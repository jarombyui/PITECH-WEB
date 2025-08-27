import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    try {
      // Simular envío de formulario
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSuccess(true);
      setFormData({ name: '', email: '', phone: '', service: '', message: '' });
    } catch (err) {
      setError('Hubo un error al enviar el mensaje. Por favor, intente nuevamente.');
    } finally {
      setLoading(false);
    }
  };

  const services = [
    "Aire Acondicionado Interior",
    "Electricidad Residencial",
    "Pintura Profesional",
    "Plomería y Fontanería",
    "Línea Blanca",
    "Carpintería y Puertas",
    "Limpieza de Piscinas",
    "Ventilación y Climatización",
    "Mantenimiento de Jardines",
    "Instalación de Soportes",
    "Sistemas de Comunicación",
    "Enchapado y Cerámica",
    "Estructuras y Construcción",
    "Servicios Comerciales e Industriales",
    "Otro"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-light via-blue-50 to-gray-100">
      <Helmet>
        <title>Contáctanos - PITECH Servicios Residenciales</title>
        <meta name="description" content="Ponte en contacto con PITECH para solicitar presupuestos, consultar sobre nuestros servicios residenciales o cualquier necesidad de mantenimiento de tu hogar."/>
      </Helmet>

      <div className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-extrabold text-primary mb-6">
              Contáctanos
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-secondary to-accent mx-auto mb-6 rounded-full"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Estamos aquí para ayudarte con todos los servicios de mantenimiento y reparación de tu hogar. Solicita un presupuesto gratuito.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Information */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-gradient-to-r from-primary via-blue-800 to-dark rounded-2xl p-8 shadow-blue-lg text-white"
            >
              <h2 className="text-3xl font-bold mb-8">Información de Contacto</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="text-accent text-2xl">📍</div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Zona de Servicio</h3>
                    <p className="opacity-90">Atendemos toda la ciudad y alrededores</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="text-accent text-2xl">📞</div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Teléfono</h3>
                    <p className="opacity-90">+51 972 963 857</p>
                    <p className="opacity-90 text-sm">WhatsApp disponible</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="text-accent text-2xl">✉️</div>
                  <div>
                                         <h3 className="text-xl font-semibold mb-2">Email</h3>
                                          <p className="opacity-90">pittechnetworks@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="text-accent text-2xl">⏰</div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Horario de Atención</h3>
                    <p className="opacity-90">Lunes a Domingo: 7:00 AM - 9:00 PM</p>
                    <p className="opacity-90 text-sm">Emergencias 24/7</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="text-accent text-2xl">🚗</div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Servicio a Domicilio</h3>
                    <p className="opacity-90">Llegamos a tu hogar sin costo adicional</p>
                  </div>
                </div>
              </div>

              {/* WhatsApp Button */}
              <div className="mt-8">
                <button
                                     onClick={() => {
                     const phone = '51972963857';
                     const message = 'Hola PITECH, estoy en la página de contacto y me gustaría solicitar un presupuesto personalizado para servicios residenciales. ¿Podrían ayudarme?';
                     window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
                   }}
                  className="w-full bg-gradient-to-r from-accent to-tech hover:from-tech hover:to-accent text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <span>💬</span>
                  <span>Contactar por WhatsApp</span>
                </button>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="lg:col-span-2 bg-white rounded-2xl p-8 shadow-blue"
            >
              <h2 className="text-3xl font-bold text-primary mb-8">Solicita un Presupuesto Gratuito</h2>
              
              {success ? (
                <div className="bg-gradient-to-r from-accent/10 to-tech/10 text-accent p-6 rounded-xl mb-6 border border-accent/20">
                  <h3 className="text-xl font-bold mb-2">¡Mensaje enviado con éxito!</h3>
                  <p>Nos pondremos en contacto contigo en las próximas 24 horas para coordinar tu servicio.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {error && (
                    <div className="bg-red-100 text-red-800 p-4 rounded-xl border border-red-200">
                      {error}
                    </div>
                  )}

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Nombre Completo *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300"
                        placeholder="Ingresa tu nombre completo"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-gray-700 font-semibold mb-2">Teléfono *</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300"
                        placeholder="Ingresa tu teléfono"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Correo Electrónico</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300"
                        placeholder="Ingresa tu correo electrónico"
                      />
                    </div>

                    <div>
                      <label htmlFor="service" className="block text-gray-700 font-semibold mb-2">Servicio de Interés *</label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 text-gray-700 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300"
                      >
                        <option value="">Selecciona un servicio</option>
                        {services.map((service, index) => (
                          <option key={index} value={service}>{service}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">Descripción del Trabajo *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="4"
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300"
                      placeholder="Describe el trabajo que necesitas realizar..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-gradient-to-r from-secondary to-tech hover:from-tech hover:to-secondary text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:-translate-y-1 shadow-blue hover:shadow-blue-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? 'Enviando...' : 'Solicitar Presupuesto Gratuito'}
                  </button>
                </form>
              )}
            </motion.div>
          </div>

          {/* Additional Info */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-16 bg-white rounded-2xl p-8 shadow-blue"
          >
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-accent text-4xl mb-4">⚡</div>
                <h3 className="text-xl font-bold text-primary mb-2">Respuesta Rápida</h3>
                <p className="text-gray-600">Te respondemos en menos de 2 horas</p>
              </div>
              <div>
                <div className="text-accent text-4xl mb-4">💰</div>
                <h3 className="text-xl font-bold text-primary mb-2">Presupuesto Gratuito</h3>
                <p className="text-gray-600">Sin compromiso y sin sorpresas</p>
              </div>
              <div>
                <div className="text-accent text-4xl mb-4">🛡️</div>
                <h3 className="text-xl font-bold text-primary mb-2">Garantía Incluida</h3>
                <p className="text-gray-600">Todos nuestros trabajos tienen garantía</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact; 