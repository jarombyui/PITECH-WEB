import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet';

const carouselImages = [
  {
    id: 1,
    image: "/images/aire-acondicionado-inteiror.jpeg",
    caption: "Instalación y mantenimiento de aire acondicionado residencial"
  },
  {
    id: 2,
    image: "/images/luminarias.jpeg",
    caption: "Instalación y reparación de sistemas de iluminación"
  },
  {
    id: 3,
    image: "/images/pintura.jpeg",
    caption: "Servicios profesionales de pintura residencial"
  },
  {
    id: 4,
    image: "/images/limpieza-piscinas.jpeg",
    caption: "Mantenimiento y limpieza de piscinas"
  },
  {
    id: 5,
    image: "/images/mantenimiento-areas-verdes.jpeg",
    caption: "Mantenimiento de áreas verdes y jardines"
  },
  {
    id: 6,
    image: "/images/servicios-comerciales-industriales.jpeg",
    caption: "Servicios especializados para comercios e industrias"
  }
];

const services = [
  {
    id: 1,
    name: "Aire Acondicionado Interior",
    image: "/images/aire-acondicionado-inteiror.jpeg",
    description: "Instalación y mantenimiento de aire acondicionado interior residencial"
  },
  {
    id: 2,
    name: "Electricidad Residencial",
    image: "/images/tablero-electrico.jpeg",
    description: "Instalaciones eléctricas, reparaciones y mantenimiento de tableros"
  },
  {
    id: 3,
    name: "Pintura Profesional",
    image: "/images/pintura.jpeg",
    description: "Servicios profesionales de pintura interior y exterior"
  },
  {
    id: 4,
    name: "Plomería y Fontanería",
    image: "/images/plomeria.jpeg",
    description: "Reparaciones de plomería, instalación de accesorios y mantenimiento"
  },
  {
    id: 5,
    name: "Línea Blanca",
    image: "/images/linea-blanca.jpeg",
    description: "Servicio y reparación de electrodomésticos de línea blanca"
  },
  {
    id: 6,
    name: "Carpintería y Puertas",
    image: "/images/puertas-cochera.jpeg",
    description: "Instalación y reparación de puertas, ventanas y muebles"
  },
  {
    id: 7,
    name: "Limpieza de Piscinas",
    image: "/images/limpieza-piscinas.jpeg",
    description: "Limpieza, mantenimiento y reparación de piscinas"
  },
  {
    id: 8,
    name: "Servicios Comerciales e Industriales",
    image: "/images/servicios-comerciales-industriales.jpeg",
    description: "Servicios especializados para comercios e industrias"
  }
];

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? carouselImages.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-light via-blue-50 to-gray-100">
      <Helmet>
        <title>PITECH - Servicios Residenciales Profesionales</title>
        <meta name="description" content="PITECH ofrece servicios profesionales de mantenimiento y reparación residencial. Aire acondicionado, electricidad, plomería, pintura y más. ¡Tu hogar en las mejores manos!"/>
      </Helmet>

             {/* Hero Section con Carrusel */}
       <div className="relative h-[80vh] mb-12">
        <div className="absolute inset-0 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="absolute inset-0"
            >
                             <img
                 src={carouselImages[currentIndex].image}
                 alt={carouselImages[currentIndex].caption}
                 className="w-full h-full object-contain bg-gray-900"
               />
                             <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/60 to-transparent"></div>
                             <div className="absolute bottom-8 left-8 right-8">
                 <div className="bg-white/95 backdrop-blur-sm rounded-xl px-6 py-4 shadow-tech max-w-2xl">
                   <h1 className="text-3xl md:text-4xl font-bold text-primary mb-2">
                     PITECH - Servicios Residenciales
                   </h1>
                   <p className="text-gray-700 text-lg">
                     {carouselImages[currentIndex].caption}
                   </p>
                 </div>
               </div>
               {/* Overlay adicional para mejorar legibilidad */}
               <div className="absolute inset-0 bg-black/20"></div>
            </motion.div>
          </AnimatePresence>
        </div>
        
        {/* Controles del carrusel */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-primary p-3 rounded-full transition-all duration-300 z-10 shadow-tech"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-primary p-3 rounded-full transition-all duration-300 z-10 shadow-tech"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
        
        {/* Indicadores */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-3 z-10">
          {carouselImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'bg-accent scale-125' : 'bg-white/60'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Sección de Servicios Principales */}
      <div className="max-w-7xl mx-auto px-4 mb-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ofrecemos servicios profesionales de mantenimiento y reparación para mantener tu hogar en perfectas condiciones
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
                              className="bg-white rounded-xl shadow-blue overflow-hidden hover:shadow-blue-lg transition-all duration-300 transform hover:-translate-y-2 border border-gray-200"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary mb-2">
                  {service.name}
                </h3>
                <p className="text-gray-600 mb-4">
                  {service.description}
                </p>
                <button
                  onClick={() => navigate('/servicios')}
                  className="w-full bg-gradient-to-r from-secondary to-tech text-white py-2 px-4 rounded-lg hover:from-tech hover:to-secondary transition-all duration-300 font-semibold"
                >
                  Saber Más
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Sección de Por Qué Elegirnos */}
      <div className="bg-gradient-to-r from-primary to-dark text-white py-16 mb-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              ¿Por Qué Elegirnos?
            </h2>
            <p className="text-xl opacity-90">
              Más de 10 años de experiencia en servicios residenciales
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-accent/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Profesionales Certificados</h3>
              <p className="opacity-90">Nuestro equipo cuenta con certificaciones y experiencia comprobada</p>
            </div>

            <div className="text-center">
              <div className="bg-accent/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Servicio Rápido</h3>
              <p className="opacity-90">Respuesta inmediata y trabajos realizados en tiempo récord</p>
            </div>

            <div className="text-center">
              <div className="bg-accent/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Precios Justos</h3>
              <p className="opacity-90">Tarifas competitivas y presupuestos transparentes sin sorpresas</p>
            </div>
          </div>
        </div>
      </div>

      {/* Botones de acción */}
      <div className="max-w-4xl mx-auto px-4 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <button
                         onClick={() => {
               const phone = '51972963857';
               const message = 'Hola PITECH, vi su sitio web y me gustaría solicitar un presupuesto gratuito para servicios residenciales. ¿Podrían ayudarme?';
               window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
             }}
                          className="bg-gradient-to-r from-secondary to-tech text-white text-xl font-bold py-6 px-8 rounded-xl shadow-blue hover:shadow-blue-lg hover:scale-105 transition-all duration-300"
          >
            Solicitar Presupuesto Gratuito
          </button>
          <button
            onClick={() => navigate('/servicios')}
                          className="bg-gradient-to-r from-primary to-dark text-white text-xl font-bold py-6 px-8 rounded-xl shadow-blue hover:shadow-blue-lg hover:scale-105 transition-all duration-300"
          >
            Ver Todos Nuestros Servicios
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home; 