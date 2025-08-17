import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from 'framer-motion';

const Blog = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryItems = [
    {
      id: 1,
      title: "Instalación de Aire Acondicionado",
      description: "Instalación profesional de sistema de aire acondicionado residencial con acabados perfectos.",
      image: "/images/air-conditioner.jpeg",
      category: "Climatización",
      date: "Marzo 2024"
    },
    {
      id: 2,
      title: "Reparación de Tablero Eléctrico",
      description: "Mantenimiento y reparación de tablero eléctrico principal con certificaciones de seguridad.",
      image: "/images/tablero-electrico.jpeg",
      category: "Electricidad",
      date: "Febrero 2024"
    },
    {
      id: 3,
      title: "Pintura Interior Profesional",
      description: "Servicio completo de pintura interior con preparación de superficies y acabados de calidad.",
      image: "/images/pintura.jpeg",
      category: "Pintura",
      date: "Enero 2024"
    },
    {
      id: 4,
      title: "Mantenimiento de Piscina",
      description: "Limpieza profunda y mantenimiento completo de sistema de filtración de piscina.",
      image: "/images/limpieza-piscinas.jpeg",
      category: "Piscinas",
      date: "Diciembre 2023"
    },
    {
      id: 5,
      title: "Instalación de Luminarias",
      description: "Instalación de sistema de iluminación LED moderno con control inteligente.",
      image: "/images/luminarias.jpeg",
      category: "Iluminación",
      date: "Noviembre 2023"
    },
    {
      id: 6,
      title: "Mantenimiento de Jardines",
      description: "Servicio completo de mantenimiento de áreas verdes y jardines residenciales.",
      image: "/images/mantenimiento-areas-verdes.jpeg",
      category: "Jardinería",
      date: "Octubre 2023"
    },
    {
      id: 7,
      title: "Reparación de Plomería",
      description: "Reparación de sistema de plomería y instalación de nuevos accesorios.",
      image: "/images/panel-lavadora.jpeg",
      category: "Plomería",
      date: "Septiembre 2023"
    },
    {
      id: 8,
      title: "Instalación de Puertas",
      description: "Instalación profesional de puertas y ventanas con acabados perfectos.",
      image: "/images/puertas-cochera.jpeg",
      category: "Carpintería",
      date: "Agosto 2023"
    },
    {
      id: 9,
      title: "Sistema de Ventilación",
      description: "Instalación de sistema de ventilación para mejorar la calidad del aire interior.",
      image: "/images/ventilacion.jpeg",
      category: "Ventilación",
      date: "Julio 2023"
    },
    {
      id: 10,
      title: "Instalación de Soportes",
      description: "Instalación segura de soportes para TV y estantes con anclajes profesionales.",
      image: "/images/instalacion-soportes-muebles.jpeg",
      category: "Instalación",
      date: "Junio 2023"
    },
    {
      id: 11,
      title: "Sistema de Comunicación",
      description: "Instalación de intercomunicador y sistema de audio residencial.",
      image: "/images/comunicator.jpeg",
      category: "Comunicación",
      date: "Mayo 2023"
    },
    {
      id: 12,
      title: "Enchapado de Cerámica",
      description: "Instalación de cerámica y porcelanato en baños y cocinas.",
      image: "/images/enchapado-ceramica.jpeg",
      category: "Cerámica",
      date: "Abril 2023"
    }
  ];

  const categories = ["Todos", "Climatización", "Electricidad", "Pintura", "Piscinas", "Iluminación", "Jardinería", "Plomería", "Carpintería", "Ventilación", "Instalación", "Comunicación", "Cerámica"];

  const [selectedCategory, setSelectedCategory] = useState("Todos");

  const filteredItems = selectedCategory === "Todos" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-light via-blue-50 to-gray-100">
      <Helmet>
        <title>Galería de Trabajos - Servicios Residenciales Profesionales</title>
        <meta name="description" content="Explora nuestra galería de trabajos realizados. Instalaciones, reparaciones y mantenimientos profesionales en hogares de toda la ciudad."/>
      </Helmet>

      <div className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-extrabold text-gray-800 mb-6">
              Galería de Trabajos
            </h1>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6 rounded-full"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explora algunos de nuestros trabajos más destacados. Cada proyecto refleja nuestro compromiso con la calidad y la satisfacción del cliente.
            </p>
          </motion.div>

          {/* Filter Categories */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="wait">
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -50 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg transform hover:-translate-y-2 transition-all duration-300 cursor-pointer"
                  onClick={() => setSelectedImage(item)}
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {item.category}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                        {item.date}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-3">{item.title}</h3>
                    <p className="text-gray-600 mb-4">{item.description}</p>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedImage(item);
                      }}
                      className="text-blue-600 font-semibold hover:text-blue-800 transition-colors duration-300"
                    >
                      Ver detalles →
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Call to Action */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-20 bg-blue-600 rounded-2xl p-8 shadow-xl text-white text-center"
          >
            <h2 className="text-3xl font-bold mb-4">
              ¿Te gustó nuestro trabajo?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Solicita un presupuesto gratuito para tu próximo proyecto
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition-colors duration-300"
                                 onClick={() => {
                   const phone = '51972963857';
                   const message = 'Hola PITECH, vi su galería de trabajos y me impresionó la calidad. Me gustaría solicitar un presupuesto para un proyecto similar. ¿Podrían ayudarme?';
                   window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
                 }}
              >
                Contactar por WhatsApp
              </button>
              <button
                className="bg-gray-800 text-white hover:bg-gray-900 font-bold py-3 px-8 rounded-lg transition-colors duration-300"
                onClick={() => window.location.href = '/contacto'}
              >
                Solicitar Presupuesto
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Modal for Image Details */}
      <AnimatePresence>
        {selectedImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 p-4">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative"
            >
              <button
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl font-bold z-10"
                onClick={() => setSelectedImage(null)}
                aria-label="Cerrar"
              >
                &times;
              </button>
              
              <div className="grid md:grid-cols-2">
                <div className="h-64 md:h-full">
                  <img
                    src={selectedImage.image}
                    alt={selectedImage.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {selectedImage.category}
                    </span>
                    <span className="text-gray-500 text-sm">{selectedImage.date}</span>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-800 mb-4">{selectedImage.title}</h3>
                  <p className="text-gray-600 text-lg mb-6">{selectedImage.description}</p>
                  
                  <button
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300"
                                         onClick={() => {
                       const phone = '51972963857';
                       const message = `Hola PITECH, vi el trabajo de ${selectedImage.title} en su galería y me gustaría solicitar un servicio similar. ¿Podrían proporcionarme información y presupuesto?`;
                       window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
                     }}
                  >
                    Solicitar Servicio Similar
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Blog; 