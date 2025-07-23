import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="pt-20 pb-12 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold dark-gray mb-4">
            Servicios Contables <span className="primary-blue">Profesionales</span>
          </h1>
          <p className="text-lg neutral-gray mb-8 max-w-3xl mx-auto">
            ¡Hola! Soy Romina Natalia Fanelli, Contadora Pública especializada en acompañar a autónomos en su gestión contable e impositiva. Mi objetivo es brindarte tranquilidad y confianza en cada decisión contable.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              onClick={() => scrollToSection('servicios')}
              className="bg-primary-blue text-white hover:bg-blue-700 px-8 py-3"
              size="lg"
            >
              Ver Servicios
            </Button>
            <Button 
              onClick={() => scrollToSection('turnos')}
              variant="outline"
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3"
              size="lg"
            >
              Solicitar Turno
            </Button>
          </div>
          
          {/* Professional Icons Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
              <i className="fas fa-calculator primary-blue text-4xl mb-4"></i>
              <h3 className="font-semibold dark-gray mb-2">Cálculos Precisos</h3>
              <p className="text-sm neutral-gray text-center">Liquidaciones exactas y confiables</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
              <i className="fas fa-file-invoice gold-accent text-4xl mb-4"></i>
              <h3 className="font-semibold dark-gray mb-2">Gestión Completa</h3>
              <p className="text-sm neutral-gray text-center">Todos tus trámites en un lugar</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
              <i className="fas fa-shield-alt primary-blue text-4xl mb-4"></i>
              <h3 className="font-semibold dark-gray mb-2">Cumplimiento Legal</h3>
              <p className="text-sm neutral-gray text-center">Siempre al día con las normativas</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
