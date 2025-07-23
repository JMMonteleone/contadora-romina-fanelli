import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="bg-white shadow-sm fixed w-full top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold primary-blue">Romina Fanelli</h1>
            <p className="text-xs neutral-gray">Contadora Pública</p>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button 
                onClick={() => scrollToSection('inicio')}
                className="dark-gray hover:text-blue-600 transition-colors duration-200 font-medium"
              >
                Inicio
              </button>
              <button 
                onClick={() => scrollToSection('servicios')}
                className="neutral-gray hover:text-blue-600 transition-colors duration-200"
              >
                Servicios
              </button>
              <button 
                onClick={() => scrollToSection('sobre-mi')}
                className="neutral-gray hover:text-blue-600 transition-colors duration-200"
              >
                Sobre mí
              </button>
              <button 
                onClick={() => scrollToSection('turnos')}
                className="neutral-gray hover:text-blue-600 transition-colors duration-200"
              >
                Turnos
              </button>

              <Button 
                onClick={() => scrollToSection('contacto')}
                className="bg-primary-blue text-white hover:bg-blue-700"
              >
                Contacto
              </Button>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <i className="fas fa-bars text-xl neutral-gray"></i>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col space-y-4 mt-8">
                  <button 
                    onClick={() => scrollToSection('inicio')}
                    className="text-left py-2 px-3 dark-gray font-medium"
                  >
                    Inicio
                  </button>
                  <button 
                    onClick={() => scrollToSection('servicios')}
                    className="text-left py-2 px-3 neutral-gray"
                  >
                    Servicios
                  </button>
                  <button 
                    onClick={() => scrollToSection('sobre-mi')}
                    className="text-left py-2 px-3 neutral-gray"
                  >
                    Sobre mí
                  </button>
                  <button 
                    onClick={() => scrollToSection('turnos')}
                    className="text-left py-2 px-3 neutral-gray"
                  >
                    Turnos
                  </button>

                  <Button 
                    onClick={() => scrollToSection('contacto')}
                    className="bg-primary-blue text-white font-medium justify-start"
                  >
                    Contacto
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
