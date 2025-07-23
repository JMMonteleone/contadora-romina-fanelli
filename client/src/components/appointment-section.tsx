import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useMutation } from "@tanstack/react-query";

export default function AppointmentSection() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const contactMutation = useMutation({
    mutationFn: async (formData: FormData) => {
      const data = {
        nombre: formData.get('nombre') as string,
        email: formData.get('email') as string,
        telefono: formData.get('telefono') as string,
        servicio: formData.get('servicio') as string,
        mensaje: formData.get('mensaje') as string,
      };

      // Always use relative URL since both frontend and backend are served on the same port
      const apiUrl = '/api/contact';
      
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Error al enviar el formulario');
      }

      return response.json();
    },
    onSuccess: () => {
      setIsSubmitted(true);
      setErrorMessage("");
    },
    onError: (error: Error) => {
      setErrorMessage(error.message);
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage("");
    const formData = new FormData(e.currentTarget);
    contactMutation.mutate(formData);
  };

  return (
    <section id="turnos" className="py-16 bg-primary-blue">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">¿Necesitas una consulta?</h2>
          <p className="text-lg text-blue-100 max-w-3xl mx-auto">
            Agenda una cita personalizada o envía tu consulta. Te responderé a la brevedad para ayudarte con tus necesidades contables.
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto">
          {/* Contact Form */}
          <Card className="bg-white">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold dark-gray mb-6 text-center">Solicitar Turno</h3>
              
              {errorMessage && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <p className="text-red-800">{errorMessage}</p>
                  </div>
                </div>
              )}
              
              <form 
                onSubmit={handleSubmit} 
                className="space-y-4"
              >
                <div>
                  <Label htmlFor="name">Nombre completo *</Label>
                  <Input
                    id="name"
                    name="nombre"
                    type="text"
                    required
                    placeholder="Tu nombre completo"
                    className="mt-1"
                  />

                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="tu@email.com"
                      className="mt-1"
                    />

                  </div>
                  <div>
                    <Label htmlFor="phone">Teléfono</Label>
                    <Input
                      id="phone"
                      name="telefono"
                      type="tel"
                      placeholder="+54 9 11 1234-5678"
                      className="mt-1"
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="servicio">Servicio de interés</Label>
                  <select name="servicio" id="servicio" className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                    <option value="">Selecciona un servicio</option>
                    <option value="impuestos">Liquidación de Impuestos</option>
                    <option value="sueldos">Liquidación de Sueldos</option>
                    <option value="monotributo">Monotributo</option>
                    <option value="balances">Estados Contables</option>
                    <option value="asesoramiento-fiscal">Asesoramiento Fiscal</option>

                    <option value="otro">Otro</option>
                  </select>
                </div>
                
                <div>
                  <Label htmlFor="message">Mensaje</Label>
                  <Textarea
                    id="message"
                    name="mensaje"
                    rows={4}
                    required
                    placeholder="Cuéntame sobre tu consulta o necesidad específica..."
                    className="mt-1"
                  />
                </div>
                
                {isSubmitted ? (
                  <div className="text-center py-8">
                    <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-4">
                      <div className="flex items-center justify-center mb-2">
                        <svg className="w-8 h-8 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <h4 className="text-lg font-semibold text-green-800">¡Formulario enviado con éxito!</h4>
                      </div>
                      <p className="text-green-700">
                        Su consulta ha sido enviada correctamente. Nos pondremos en contacto con usted a la brevedad.
                      </p>
                    </div>
                    <Button 
                      onClick={() => {
                        setIsSubmitted(false);
                        const form = document.querySelector('form') as HTMLFormElement;
                        if (form) form.reset();
                      }}
                      className="bg-primary-blue text-white hover:bg-blue-700"
                    >
                      Enviar otra consulta
                    </Button>
                  </div>
                ) : (
                  <Button 
                    type="submit" 
                    disabled={contactMutation.isPending}
                    className="w-full bg-primary-blue text-white hover:bg-blue-700 disabled:opacity-50"
                  >
                    {contactMutation.isPending ? "Enviando..." : "Enviar Consulta"}
                  </Button>
                )}
              </form>
            </CardContent>
          </Card>
          
          {/* Contact Information - Centered below form */}
          <div className="text-white text-center mt-8">
            <h3 className="text-2xl font-semibold mb-6">Información de Contacto</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center">
                <i className="fas fa-envelope gold-accent text-2xl mb-3"></i>
                <h4 className="font-semibold mb-1">Email</h4>
                <p className="text-blue-100">rominafanelli@gmail.com</p>
              </div>
              <div className="flex flex-col items-center">
                <i className="fas fa-phone gold-accent text-2xl mb-3"></i>
                <h4 className="font-semibold mb-1">Teléfono</h4>
                <p className="text-blue-100">+54 9 11 5468-4499</p>
              </div>
              <div className="flex flex-col items-center">
                <i className="fas fa-clock gold-accent text-2xl mb-3"></i>
                <h4 className="font-semibold mb-1">Horarios de Atención</h4>
                <p className="text-blue-100">Lunes a Viernes: 9:00 - 18:00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}