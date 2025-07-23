export default function AboutSection() {
  return (
    <section id="sobre-mi" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=800" 
              alt="Gestión contable profesional" 
              className="rounded-2xl shadow-lg w-full h-auto object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold dark-gray mb-6">Conoce a Romina Natalia Fanelli</h2>
            <div className="space-y-4 neutral-gray">
              <p className="text-lg">
                Con más de 20 años de experiencia en el área contable e impositiva, me especializo en brindar soluciones personalizadas para autónomos que buscan orden y tranquilidad en sus finanzas.
              </p>
              <p>
                Soy Contadora Pública egresada de la Universidad Nacional de Buenos Aires (UBA), con formación continua en normativas fiscales y herramientas digitales para optimizar la gestión contable de mis clientes.
              </p>
              <p>
                Mi enfoque se basa en la cercanía y la comunicación clara. Creo que cada cliente es único y merece un servicio personalizado que se adapte a sus necesidades específicas. No solo me ocupo de los números, sino que también educo y acompaño a mis clientes para que tomen decisiones informadas.
              </p>
              <p>
                Me comprometo a mantenerme actualizada con los constantes cambios normativos para ofrecerte siempre el mejor asesoramiento y tranquilidad en el cumplimiento de tus obligaciones.
              </p>
            </div>
            
            <div className="mt-8 space-y-4">
              <h3 className="text-xl font-semibold dark-gray">Formación y Certificaciones</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <i className="fas fa-graduation-cap gold-accent mr-3"></i>
                  <span>Contadora Pública - Universidad Nacional de Buenos Aires</span>
                </div>


              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
