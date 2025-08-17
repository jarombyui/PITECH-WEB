import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const socialLinks = [
    { name: 'Facebook', path: 'https://www.facebook.com/profile.php?id=100088810666184', icon: 'fab fa-facebook-f' },
    { name: 'Instagram', path: 'https://www.instagram.com/1sse.curex/', icon: 'fab fa-instagram' },
    { name: 'WhatsApp', path: 'https://wa.me/51972963857', icon: 'fab fa-whatsapp' },
  ];

  const footerLinks = [
    { name: 'Inicio', path: '/' },
    { name: '¿Quiénes Somos?', path: '/about' },
    { name: 'Servicios', path: '/servicios' },
    { name: 'Galería', path: '/blog' },
    { name: 'Contáctanos', path: '/contacto' },
  ];

  const services = [
    'Aire Acondicionado',
    'Electricidad Residencial',
    'Pintura Profesional',
    'Plomería y Fontanería',
    'Carpintería y Muebles',
    'Mantenimiento de Piscinas'
  ];

    return (
    <footer className="bg-gradient-to-r from-primary via-blue-800 to-dark text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Contact Section - Destacado */}
                 <div className="bg-gradient-to-r from-accent/20 via-blue-500/20 to-tech/20 rounded-2xl p-8 mb-12 border border-accent/30 shadow-blue-lg">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">¿Necesitas ayuda?</h3>
            <p className="text-xl text-gray-300">Contáctanos ahora mismo</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                         {/* WhatsApp */}
             <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-6 text-center transform hover:scale-105 transition-all duration-300 shadow-lg border border-blue-500">
               <div className="text-3xl mb-3 text-white">💬</div>
               <h4 className="text-xl font-bold mb-2 text-white">WhatsApp</h4>
               <p className="text-sm mb-3 text-blue-100">Respuesta inmediata</p>
               <a
                 href="https://wa.me/51972963857?text=Hola%20PITECH,%20vi%20su%20sitio%20web%20y%20me%20gustaría%20solicitar%20información%20sobre%20sus%20servicios%20residenciales.%20¿Podrían%20ayudarme?"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="inline-block bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200"
               >
                 Chatear Ahora
               </a>
             </div>

             {/* Teléfono */}
             <div className="bg-gradient-to-r from-cyan-600 to-cyan-700 rounded-xl p-6 text-center transform hover:scale-105 transition-all duration-300 shadow-lg border border-cyan-500">
               <div className="text-3xl mb-3 text-white">📞</div>
               <h4 className="text-xl font-bold mb-2 text-white">Teléfono</h4>
               <p className="text-sm mb-3 text-cyan-100">Llamada directa</p>
               <a
                 href="tel:+51972963857"
                 className="inline-block bg-white text-cyan-600 px-4 py-2 rounded-lg font-semibold hover:bg-cyan-50 transition-colors duration-200"
               >
                 +51 972 963 857
               </a>
             </div>

             {/* Email */}
             <div className="bg-gradient-to-r from-indigo-600 to-indigo-700 rounded-xl p-6 text-center transform hover:scale-105 transition-all duration-300 shadow-lg border border-indigo-500">
               <div className="text-3xl mb-3 text-white">✉️</div>
               <h4 className="text-xl font-bold mb-2 text-white">Email</h4>
               <p className="text-sm mb-3 text-indigo-100">Consulta detallada</p>
               <a
                 href="mailto:servicios@pitech.com?subject=Consulta%20Servicios%20Residenciales&body=Hola%20PITECH,%0A%0AMe%20gustaría%20recibir%20información%20detallada%20sobre%20sus%20servicios%20residenciales.%0A%0ASaludos"
                 className="inline-block bg-white text-indigo-600 px-4 py-2 rounded-lg font-semibold hover:bg-indigo-50 transition-colors duration-200"
               >
                 servicios@pitech.com
               </a>
             </div>
          </div>

                     {/* Horarios */}
           <div className="mt-8 text-center">
             <div className="inline-flex items-center space-x-8 bg-blue-50/20 backdrop-blur-sm rounded-xl px-6 py-4 border border-blue-200/30">
               <div className="flex items-center space-x-3">
                 <span className="text-blue-400 text-lg">⏰</span>
                 <div className="text-left">
                   <span className="text-sm text-blue-200 block">Horario Regular</span>
                   <span className="text-white font-semibold">Lun-Dom: 7:00 AM - 9:00 PM</span>
                 </div>
               </div>
               <div className="w-px h-8 bg-blue-300/50"></div>
               <div className="flex items-center space-x-3">
                 <span className="text-red-400 text-lg">🚨</span>
                 <div className="text-left">
                   <span className="text-sm text-red-200 block">Emergencias</span>
                   <span className="text-white font-semibold">Disponibles 24/7</span>
                 </div>
               </div>
             </div>
           </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <div className="flex items-center">
                <img
                  src="/images/logo-PYTECH.jpeg"
                  alt="PITECH Logo"
                  className="h-16 w-auto object-contain drop-shadow-lg mr-3"
                />
                <div>
                  <h3 className="text-2xl font-bold font-tech">PITECH</h3>
                  <p className="text-sm text-accent">Servicios Residenciales</p>
                </div>
              </div>
            </div>
            <p className="text-gray-300 mb-6">
              Más de 10 años brindando servicios profesionales de mantenimiento y reparación residencial. Tu hogar en las mejores manos con nuestro equipo de técnicos certificados.
            </p>
            
            {/* Social Media */}
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.path}
                  className="bg-white/10 hover:bg-accent/20 text-gray-300 hover:text-accent p-3 rounded-full transition-all duration-300 transform hover:scale-110"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className={`${link.icon} text-xl`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white flex items-center">
              <span className="text-accent mr-2">🔗</span>
              Enlaces Rápidos
            </h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-accent transition-colors duration-200 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-accent rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white flex items-center">
              <span className="text-accent mr-2">🛠️</span>
              Nuestros Servicios
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    to="/servicios"
                    className="text-gray-300 hover:text-accent transition-colors duration-200 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-accent rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-400">&copy; {new Date().getFullYear()} PITECH Servicios Residenciales. Todos los derechos reservados.</p>
          <p className="text-gray-500 text-sm mt-2">Servicios profesionales para tu hogar</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 