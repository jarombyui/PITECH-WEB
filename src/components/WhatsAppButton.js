import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
  const phoneNumber = '51972963857'; // WhatsApp number with country code
  const message = 'Hola PITECH, vi su sitio web y me gustaría solicitar información sobre sus servicios residenciales. ¿Podrían ayudarme con un presupuesto?';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 group"
      aria-label="Contactar por WhatsApp"
    >
      <div className="relative">
        <div className="absolute -inset-1 bg-gradient-to-r from-accent to-tech rounded-xl blur-lg opacity-75 group-hover:opacity-100 transition duration-300"></div>
        <div className="relative bg-gradient-to-r from-accent to-tech rounded-xl p-4 shadow-blue-lg hover:scale-110 transition-transform duration-300 flex items-center justify-center animate-pulse-slow" style={{ width: 64, height: 64 }}>
          <FaWhatsapp className="w-12 h-12 text-white" />
        </div>
      </div>
    </a>
  );
};

export default WhatsAppButton; 