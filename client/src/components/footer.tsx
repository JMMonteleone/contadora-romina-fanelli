export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-dark-gray text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Romina Natalia Fanelli</h3>
            <p className="text-gray-300 mb-4">
              Contadora Pública especializada en servicios contables para autónomos.
            </p>

          </div>
          <div>
            <h4 className="font-semibold mb-4">Servicios</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <button 
                  onClick={() => scrollToSection('servicios')}
                  className="hover:text-white transition-colors duration-200"
                >
                  Liquidación de Impuestos
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('servicios')}
                  className="hover:text-white transition-colors duration-200"
                >
                  Liquidación de Sueldos
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('servicios')}
                  className="hover:text-white transition-colors duration-200"
                >
                  Monotributo
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('servicios')}
                  className="hover:text-white transition-colors duration-200"
                >
                  Asesoramiento Fiscal
                </button>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contacto</h4>
            <ul className="space-y-2 text-gray-300">
              <li>rominafanelli@gmail.com</li>
              <li>+54 9 11 5468-4499</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-600 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Romina Natalia Fanelli - Contadora Pública. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
