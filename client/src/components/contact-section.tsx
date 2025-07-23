export default function ContactSection() {
  return (
    <section id="contacto" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold dark-gray mb-4">Conectemos</h2>
          <p className="text-lg neutral-gray max-w-3xl mx-auto">
            Sígueme en mis redes sociales para estar al día con las últimas novedades fiscales y consejos contables.
          </p>
        </div>
        
        <div className="flex justify-center space-x-6">
          <a 
            href="https://www.linkedin.com/in/romina-natalia-fanelli-73208117/" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow duration-200 primary-blue hover:text-blue-700"
          >
            <i className="fab fa-linkedin-in text-xl"></i>
          </a>

          <a 
            href="mailto:rominafanelli@gmail.com"
            className="flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow duration-200 primary-blue hover:text-blue-700"
          >
            <i className="fas fa-envelope text-xl"></i>
          </a>
        </div>
      </div>
    </section>
  );
}
