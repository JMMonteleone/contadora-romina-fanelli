export default function WhatsAppButton() {
  const whatsappUrl = "https://wa.me/5491154684499?text=Hola%20Romina,%20me%20interesa%20conocer%20m%C3%A1s%20sobre%20tus%20servicios%20contables";

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <a 
        href={whatsappUrl}
        target="_blank" 
        rel="noopener noreferrer"
        className="flex items-center justify-center w-14 h-14 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition-all duration-200 hover:scale-110 transform"
        aria-label="Contactar por WhatsApp"
      >
        <i className="fab fa-whatsapp text-2xl"></i>
      </a>
    </div>
  );
}
