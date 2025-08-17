import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-light via-blue-50 to-gray-100">
      <Helmet>
        <title>Quiénes Somos - Servicios Residenciales Profesionales</title>
        <meta name="description" content="Conoce más sobre nuestra empresa de servicios residenciales, nuestra misión, visión y valores como líderes en mantenimiento y reparación de hogares."/>
      </Helmet>

      {/* Hero Section */}
              <div className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary via-blue-700 to-blue-600">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
              ¿Quiénes Somos?
            </h1>
            <div className="w-24 h-1 bg-white mx-auto mb-6 rounded-full"></div>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Somos una empresa especializada en servicios de mantenimiento y reparación residencial, comprometida con la calidad, la puntualidad y la satisfacción del cliente.
            </p>
          </motion.div>

          {/* Mission and Vision Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 transform hover:-translate-y-1 transition-all duration-300 hover:bg-white/20"
            >
              <h2 className="text-3xl font-bold text-white mb-6">Misión</h2>
              <p className="text-white/90 text-lg">
                Proporcionar servicios de mantenimiento y reparación residencial de alta calidad, garantizando la satisfacción total de nuestros clientes y el cuidado de sus hogares como si fueran nuestros.
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 transform hover:-translate-y-1 transition-all duration-300 hover:bg-white/20"
            >
              <h2 className="text-3xl font-bold text-white mb-6">Visión</h2>
              <p className="text-white/90 text-lg">
                Ser reconocidos como la empresa líder en servicios residenciales, destacando por nuestra profesionalidad, confiabilidad y compromiso con la excelencia en cada trabajo realizado.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Experience Section */}
      <div className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-extrabold text-gray-800 sm:text-5xl mb-4">
              Más de 10 Años de Experiencia
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6 rounded-full"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hemos servido a cientos de familias, manteniendo sus hogares en perfectas condiciones con nuestro equipo de profesionales certificados.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center"
            >
              <div className="bg-blue-600 text-white text-4xl font-bold rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                500+
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Clientes Satisfechos</h3>
              <p className="text-gray-600">Familias que confían en nuestros servicios</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-center"
            >
              <div className="bg-blue-600 text-white text-4xl font-bold rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                1000+
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Trabajos Completados</h3>
              <p className="text-gray-600">Proyectos exitosos en toda la ciudad</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-center"
            >
              <div className="bg-blue-600 text-white text-4xl font-bold rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                15+
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Técnicos Expertos</h3>
              <p className="text-gray-600">Profesionales certificados y capacitados</p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-extrabold text-gray-800 sm:text-5xl mb-4">
              Nuestros Valores
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6 rounded-full"></div>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-center"
            >
              <div className="bg-blue-100 text-blue-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Calidad</h3>
              <p className="text-gray-600">Utilizamos materiales de primera y técnicas profesionales</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center"
            >
              <div className="bg-blue-100 text-blue-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Puntualidad</h3>
              <p className="text-gray-600">Respetamos tu tiempo y cumplimos con los horarios acordados</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-center"
            >
              <div className="bg-blue-100 text-blue-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Honestidad</h3>
              <p className="text-gray-600">Precios transparentes y sin sorpresas ocultas</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-center"
            >
              <div className="bg-blue-100 text-blue-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Compromiso</h3>
              <p className="text-gray-600">Nos comprometemos con la satisfacción total del cliente</p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-100">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-extrabold text-gray-800 sm:text-5xl mb-4">
              ¿Por Qué Elegirnos?
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6 rounded-full"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="bg-white rounded-xl p-6 shadow-lg"
            >
              <div className="text-blue-600 text-3xl mb-4">🔧</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Técnicos Certificados</h3>
              <p className="text-gray-600">Nuestro equipo cuenta con certificaciones y experiencia comprobada en cada especialidad.</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white rounded-xl p-6 shadow-lg"
            >
              <div className="text-blue-600 text-3xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Respuesta Rápida</h3>
              <p className="text-gray-600">Atendemos emergencias y urgencias con la mayor prontitud posible.</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-white rounded-xl p-6 shadow-lg"
            >
              <div className="text-blue-600 text-3xl mb-4">💰</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Precios Justos</h3>
              <p className="text-gray-600">Ofrecemos tarifas competitivas y presupuestos transparentes sin sorpresas.</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-white rounded-xl p-6 shadow-lg"
            >
              <div className="text-blue-600 text-3xl mb-4">🛡️</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Garantía</h3>
              <p className="text-gray-600">Todos nuestros trabajos incluyen garantía de calidad y satisfacción.</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="bg-white rounded-xl p-6 shadow-lg"
            >
              <div className="text-blue-600 text-3xl mb-4">📱</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Atención 24/7</h3>
              <p className="text-gray-600">Estamos disponibles para emergencias y consultas en cualquier momento.</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="bg-white rounded-xl p-6 shadow-lg"
            >
              <div className="text-blue-600 text-3xl mb-4">🏠</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Servicio Integral</h3>
              <p className="text-gray-600">Cubrimos todas las necesidades de mantenimiento de tu hogar en un solo lugar.</p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 