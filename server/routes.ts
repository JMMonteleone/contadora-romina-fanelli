import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertAppointmentSchema } from "@shared/schema";
import { z } from "zod";
import { MailService } from '@sendgrid/mail';

// Initialize SendGrid
const mailService = new MailService();
if (!process.env.SENDGRID_API_KEY) {
  throw new Error("SENDGRID_API_KEY environment variable must be set");
}
mailService.setApiKey(process.env.SENDGRID_API_KEY);

// Contact form schema
const contactFormSchema = z.object({
  nombre: z.string().min(1, "El nombre es requerido"),
  email: z.string().email("Email inválido"),
  telefono: z.string().optional(),
  servicio: z.string().optional(),
  mensaje: z.string().min(1, "El mensaje es requerido"),
});

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = contactFormSchema.parse(req.body);
      
      // Create email content
      const emailHtml = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1e40af; border-bottom: 2px solid #1e40af; padding-bottom: 10px;">
            Nueva Consulta desde el Sitio Web
          </h2>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #334155; margin-top: 0;">Datos del Cliente:</h3>
            <p><strong>Nombre:</strong> ${validatedData.nombre}</p>
            <p><strong>Email:</strong> ${validatedData.email}</p>
            ${validatedData.telefono ? `<p><strong>Teléfono:</strong> ${validatedData.telefono}</p>` : ''}
            ${validatedData.servicio ? `<p><strong>Servicio de interés:</strong> ${validatedData.servicio}</p>` : ''}
          </div>
          
          <div style="background-color: #ffffff; padding: 20px; border-left: 4px solid #1e40af; margin: 20px 0;">
            <h3 style="color: #334155; margin-top: 0;">Mensaje:</h3>
            <p style="line-height: 1.6;">${validatedData.mensaje}</p>
          </div>
          
          <div style="font-size: 12px; color: #64748b; border-top: 1px solid #e2e8f0; padding-top: 15px; margin-top: 30px;">
            <p>Este email fue enviado desde el formulario de contacto del sitio web de Romina Natalia Fanelli.</p>
            <p>Para responder, simplemente contesta a este email o contacta directamente a: ${validatedData.email}</p>
          </div>
        </div>
      `;

      // Send email via SendGrid
      await mailService.send({
        to: 'rominafanelli@gmail.com',
        from: {
          email: 'jonatanmonteleone@gmail.com',
          name: 'Sitio Web Romina Fanelli'
        },
        replyTo: validatedData.email,
        subject: `Nueva consulta desde la web - ${validatedData.nombre}`,
        html: emailHtml,
      });

      res.json({ 
        success: true, 
        message: "Su consulta ha sido enviada correctamente. Nos pondremos en contacto con usted a la brevedad." 
      });
    } catch (error) {
      console.error('Error sending email:', error);
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false,
          message: "Datos inválidos", 
          errors: error.errors 
        });
      } else {
        res.status(500).json({ 
          success: false,
          message: "Error al enviar el mensaje. Por favor, intente nuevamente." 
        });
      }
    }
  });

  // Appointment routes
  app.post("/api/appointments", async (req, res) => {
    try {
      const validatedData = insertAppointmentSchema.parse(req.body);
      const appointment = await storage.createAppointment(validatedData);
      res.json(appointment);
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          message: "Datos inválidos", 
          errors: error.errors 
        });
      } else {
        res.status(500).json({ 
          message: "Error interno del servidor" 
        });
      }
    }
  });

  app.get("/api/appointments", async (req, res) => {
    try {
      const appointments = await storage.getAppointments();
      res.json(appointments);
    } catch (error) {
      res.status(500).json({ 
        message: "Error al obtener las citas" 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
