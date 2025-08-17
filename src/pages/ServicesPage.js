import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';

const serviceDetails = [
  {
    title: "Aire Acondicionado",
    details: "Ofrecemos servicios completos de instalación, mantenimiento y reparación de sistemas de aire acondicionado residencial. Nuestros técnicos certificados garantizan un trabajo profesional y eficiente, incluyendo limpieza de filtros, recarga de refrigerante, reparación de compresores y optimización del rendimiento energético.",
    image: "/images/air-conditioner.jpeg",
    features: ["Instalación profesional", "Mantenimiento preventivo", "Reparación de averías", "Limpieza de filtros", "Recarga de refrigerante", "Optimización energética"]
  },
  {
    title: "Electricidad Residencial",
    details: "Servicios eléctricos completos para tu hogar. Instalamos y reparamos tableros eléctricos, sistemas de iluminación, tomacorrientes, interruptores y más. Cumplimos con todas las normas de seguridad eléctrica para garantizar la protección de tu familia.",
    image: "/images/tablero-electrico.jpeg",
    features: ["Instalación de tableros", "Reparación de circuitos", "Sistemas de iluminación", "Instalación de tomacorrientes", "Mantenimiento preventivo", "Certificaciones de seguridad"]
  },
  {
    title: "Pintura Profesional",
    details: "Servicios de pintura interior y exterior con acabados profesionales. Utilizamos materiales de alta calidad y técnicas modernas para transformar tu hogar. Incluye preparación de superficies, aplicación de pinturas especializadas y acabados decorativos.",
    image: "/images/pintura.jpeg",
    features: ["Pintura interior", "Pintura exterior", "Preparación de superficies", "Acabados decorativos", "Pinturas especializadas", "Garantía de calidad"]
  },
  {
    title: "Plomería y Fontanería",
    details: "Reparaciones y mantenimiento de sistemas de plomería residencial. Instalamos y reparamos grifos, tuberías, desagües, calentadores de agua y más. Solucionamos problemas de fugas, obstrucciones y mantenemos tu sistema de agua funcionando perfectamente.",
    image: "/images/panel-lavadora.jpeg",
    features: ["Reparación de fugas", "Instalación de grifos", "Desatascos", "Mantenimiento de tuberías", "Instalación de accesorios", "Sistemas de agua caliente"]
  },
  {
    title: "Carpintería y Muebles",
    details: "Servicios de carpintería especializada para puertas, ventanas, muebles y estructuras. Realizamos instalaciones, reparaciones y mantenimiento con materiales de calidad. Nuestros carpinteros expertos garantizan acabados perfectos y durabilidad.",
    image: "/images/puertas-cochera.jpeg",
    features: ["Instalación de puertas", "Reparación de ventanas", "Fabricación de muebles", "Mantenimiento de estructuras", "Acabados profesionales", "Materiales de calidad"]
  },
  {
    title: "Mantenimiento de Piscinas",
    details: "Servicios completos de limpieza, mantenimiento y reparación de piscinas residenciales. Incluye limpieza de filtros, control de pH, reparación de equipos y mantenimiento de sistemas de filtración para mantener tu piscina en perfectas condiciones.",
    image: "/images/limpieza-piscinas.jpeg",
    features: ["Limpieza profunda", "Mantenimiento de filtros", "Control de pH", "Reparación de equipos", "Sistemas de filtración", "Tratamiento de agua"]
  },
  {
    title: "Ventilación y Climatización",
    details: "Instalación y mantenimiento de sistemas de ventilación para mejorar la calidad del aire en tu hogar. Incluye extractores, ventiladores, sistemas de aire acondicionado y climatización para crear un ambiente confortable y saludable.",
    image: "/images/ventilacion.jpeg",
    features: ["Sistemas de ventilación", "Instalación de extractores", "Mantenimiento de equipos", "Control de humedad", "Calidad del aire", "Eficiencia energética"]
  },
  {
    title: "Mantenimiento de Jardines",
    details: "Servicios de mantenimiento de áreas verdes y jardines residenciales. Incluye poda de plantas, mantenimiento de césped, riego automático, fertilización y diseño paisajístico para mantener tu jardín hermoso y saludable.",
    image: "/images/mantenimiento-areas-verdes.jpeg",
    features: ["Poda de plantas", "Mantenimiento de césped", "Sistemas de riego", "Fertilización", "Diseño paisajístico", "Control de plagas"]
  },
  {
    title: "Instalación de Soportes y Muebles",
    details: "Servicios de instalación profesional de soportes para TV, estantes, muebles y accesorios. Garantizamos instalaciones seguras y duraderas, respetando las características de tu hogar y utilizando los mejores materiales.",
    image: "/images/instalacion-soportes-muebles.jpeg",
    features: ["Soportes para TV", "Instalación de estantes", "Montaje de muebles", "Anclajes seguros", "Materiales de calidad", "Garantía de instalación"]
  },
  {
    title: "Sistemas de Comunicación",
    details: "Instalación y mantenimiento de sistemas de comunicación residencial como intercomunicadores, timbres inteligentes y sistemas de seguridad. Mejoramos la conectividad y seguridad de tu hogar con tecnología moderna.",
    image: "/images/comunicator.jpeg",
    features: ["Intercomunicadores", "Timbres inteligentes", "Sistemas de audio", "Conectividad WiFi", "Instalación profesional", "Mantenimiento técnico"]
  },
  {
    title: "Enchapado y Cerámica",
    details: "Servicios de instalación y reparación de cerámica, porcelanato y enchapados para baños, cocinas y áreas comunes. Utilizamos técnicas modernas y materiales de calidad para acabados duraderos y estéticos.",
    image: "/images/enchapado-ceramica.jpeg",
    features: ["Instalación de cerámica", "Reparación de enchapados", "Acabados profesionales", "Materiales de calidad", "Diseño personalizado", "Garantía de durabilidad"]
  },
  {
    title: "Estructuras y Construcción",
    details: "Servicios de construcción y reparación de estructuras menores, ampliaciones y mejoras residenciales. Incluye trabajos de albañilería, construcción de muros, reparación de techos y estructuras de soporte.",
    image: "/images/estructuras.jpeg",
    features: ["Construcción menor", "Reparación de estructuras", "Trabajos de albañilería", "Ampliaciones", "Reparación de techos", "Muros de contención"]
  }
];

const ServicesPage = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const handleOpenModal = (index) => {
    setSelectedService(serviceDetails[index]);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedService(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-light via-blue-50 to-gray-100 py-20 px-4 sm:px-6 lg:px-8">
      <Helmet>
        <title>Servicios - PITECH Servicios Residenciales</title>
        <meta name="description" content="Servicios completos de mantenimiento y reparación residencial por PITECH. Aire acondicionado, electricidad, plomería, pintura, carpintería y más. ¡Tu hogar en las mejores manos!"/>
      </Helmet>

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-extrabold text-primary mb-6">
            Nuestros Servicios
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-secondary to-accent mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ofrecemos servicios profesionales de mantenimiento y reparación para mantener tu hogar en perfectas condiciones
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {serviceDetails.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
                             className="bg-white rounded-2xl shadow-blue overflow-hidden transform hover:-translate-y-2 transition-all duration-300 hover:shadow-blue-lg border border-gray-200"
            >
                             <div className="h-48 overflow-hidden bg-gray-100">
                 <img
                   src={service.image}
                   alt={service.title}
                   className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
                 />
               </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-primary mb-4 text-center">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-center mb-6">
                  {service.details.substring(0, 120)}...
                </p>
                <div className="text-center">
                  <button
                    className="inline-flex items-center text-accent hover:text-tech font-semibold transition-colors duration-300"
                    onClick={() => handleOpenModal(index)}
                  >
                    Ver detalles completos
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal */}
        {modalOpen && selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 p-4">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
                             className="bg-white rounded-xl shadow-blue-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto relative"
            >
              <button
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl font-bold z-10"
                onClick={handleCloseModal}
                aria-label="Cerrar"
              >
                &times;
              </button>
              
              <div className="grid md:grid-cols-2">
                <div className="h-64 md:h-full">
                  <img
                    src={selectedService.image}
                    alt={selectedService.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-3xl font-bold text-primary mb-4">{selectedService.title}</h3>
                  <p className="text-gray-600 text-lg mb-6">{selectedService.details}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-xl font-semibold text-primary mb-3">Servicios incluidos:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {selectedService.features.map((feature, index) => (
                        <div key={index} className="flex items-center text-gray-600">
                          <svg className="w-4 h-4 text-accent mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <button
                    className="w-full bg-gradient-to-r from-secondary to-tech hover:from-tech hover:to-secondary text-white font-bold py-3 px-6 rounded-lg transition-all duration-300"
                                         onClick={() => {
                       const phone = '51972963857';
                       const message = `Hola PITECH, estoy interesado en el servicio de ${selectedService.title}. ¿Podrían proporcionarme información detallada y un presupuesto?`;
                       window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
                     }}
                  >
                    Solicitar Presupuesto
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}

        {/* Call to Action Section */}
                 <div className="mt-16 bg-gradient-to-r from-primary via-blue-800 to-dark rounded-xl shadow-blue-lg p-8 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">
            ¿Necesitas un servicio personalizado?
          </h3>
          <p className="text-xl mb-6">
            Contáctanos para discutir tus necesidades específicas y encontrar la mejor solución para tu hogar
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              className="bg-gradient-to-r from-accent to-tech text-white hover:from-tech hover:to-accent font-bold py-3 px-8 rounded-lg transition-all duration-300"
                             onClick={() => {
                 const phone = '51972963857';
                 const message = 'Hola PITECH, necesito un servicio personalizado para mi hogar. ¿Podrían asesorarme sobre las mejores opciones disponibles?';
                 window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
               }}
            >
              Contactar por WhatsApp
            </button>
            <button
              className="bg-white text-primary hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition-colors duration-300"
              onClick={() => window.location.href = '/contacto'}
            >
              Ver Información de Contacto
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage; 