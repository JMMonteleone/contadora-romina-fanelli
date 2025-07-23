import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: "fas fa-calculator",
    title: "Liquidación de Impuestos",
    description: "Gestión completa de declaraciones juradas, IVA, Ganancias y otros tributos nacionales y provinciales.",
    features: ["IVA mensual y anual", "Impuesto a las Ganancias", "Bienes Personales"]
  },
  {
    icon: "fas fa-users",
    title: "Liquidación de Sueldos",
    description: "Cálculo y liquidación de haberes, cargas sociales y cumplimiento de obligaciones laborales.",
    features: ["Recibos de sueldo", "F931 y declaraciones", "Aguinaldo y liquidaciones"]
  },
  {
    icon: "fas fa-file-invoice-dollar",
    title: "Monotributo",
    description: "Asesoramiento integral para monotributistas, desde la inscripción hasta las declaraciones mensuales.",
    features: ["Inscripción y modificaciones", "Facturación electrónica", "Declaraciones mensuales"]
  },
  {
    icon: "fas fa-balance-scale",
    title: "Estados Contables",
    description: "Elaboración de balances, estados de resultados y análisis contable para la toma de decisiones.",
    features: ["Balance General", "Estado de Resultados", "Análisis contable"]
  },
  {
    icon: "fas fa-chart-line",
    title: "Asesoramiento Fiscal",
    description: "Consultoría especializada para optimizar la carga impositiva y cumplir con las obligaciones fiscales.",
    features: ["Planificación fiscal", "Consultas específicas", "Actualización normativa"]
  },

];

export default function ServicesSection() {
  return (
    <section id="servicios" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold dark-gray mb-4">Servicios Profesionales</h2>
          <p className="text-lg neutral-gray max-w-3xl mx-auto">
            Ofrezco una amplia gama de servicios contables diseñados para simplificar tu gestión empresarial y optimizar tu situación fiscal.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-white hover:shadow-md transition-shadow duration-200">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-light-blue rounded-lg flex items-center justify-center mb-4">
                  <i className={`${service.icon} primary-blue text-xl`}></i>
                </div>
                <h3 className="text-xl font-semibold dark-gray mb-3">{service.title}</h3>
                <p className="neutral-gray mb-4">{service.description}</p>
                <ul className="text-sm neutral-gray space-y-1">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <i className="fas fa-check text-green-500 text-xs mr-2"></i>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
