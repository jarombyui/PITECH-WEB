# PITECH - Servicios Residenciales Profesionales

Sitio web oficial de PITECH, especialistas en servicios de mantenimiento y reparación residencial integral.

## Características

- Diseño moderno y responsivo con tema profesional
- Páginas informativas sobre servicios residenciales
- Galería de trabajos realizados
- Formulario de contacto con presupuesto gratuito
- Integración con WhatsApp para comunicación inmediata
- Navegación intuitiva y experiencia de usuario optimizada

## Servicios Ofrecidos

- **Aire Acondicionado**: Instalación, mantenimiento y reparación
- **Electricidad Residencial**: Tableros, iluminación y sistemas eléctricos
- **Pintura Profesional**: Interior, exterior y acabados especializados
- **Plomería y Fontanería**: Reparaciones, instalaciones y mantenimiento
- **Carpintería y Muebles**: Puertas, ventanas y estructuras
- **Mantenimiento de Piscinas**: Limpieza, filtración y tratamiento
- **Ventilación y Climatización**: Sistemas de aire y extractores
- **Mantenimiento de Jardines**: Poda, riego y paisajismo
- **Instalación de Soportes**: TV, estantes y muebles
- **Sistemas de Comunicación**: Intercomunicadores y audio
- **Enchapado y Cerámica**: Baños, cocinas y áreas comunes
- **Estructuras y Construcción**: Ampliaciones y reparaciones menores

## Tecnologías Utilizadas

- **Frontend**: React.js
- **Estilos**: Tailwind CSS
- **Navegación**: React Router DOM
- **Iconos**: React Icons
- **Animaciones**: Framer Motion
- **SEO**: React Helmet
- **Formularios**: EmailJS

## Instalación

1. **Clonar el repositorio:**
```bash
git clone https://github.com/JaromCampos/PITECH-WEB.git
cd PITECH-WEB
```

2. **Instalar dependencias:**
```bash
npm install
```

3. **Iniciar el servidor de desarrollo:**
```bash
npm start
```

El sitio estará disponible en `http://localhost:3000`

## Despliegue

Este proyecto está configurado para ser desplegado en Vercel. El despliegue automático se realiza cuando se hace push a la rama principal.

### Comandos de construcción:
```bash
npm run build
npm run test
```

## Estructura del Proyecto

```
src/
  ├── components/          # Componentes reutilizables
  │   ├── Footer.js       # Pie de página con información de contacto
  │   ├── Hero.js         # Sección hero principal
  │   ├── Navbar.js       # Navegación principal
  │   ├── Services.js     # Componente de servicios
  │   └── WhatsAppButton.js # Botón flotante de WhatsApp
  ├── pages/              # Páginas de la aplicación
  │   ├── About.js        # Página "Quiénes Somos"
  │   ├── Blog.js         # Galería de trabajos
  │   ├── Contact.js      # Formulario de contacto
  │   ├── Home.js         # Página principal
  │   └── ServicesPage.js # Página detallada de servicios
  ├── App.js              # Componente principal
  └── index.js            # Punto de entrada
public/
  └── images/             # Imágenes del proyecto
      ├── logo-PYTECH.jpeg
      └── [imágenes de servicios]
```

## Características Técnicas

### 🎨 **Diseño y UX**
- Paleta de colores profesional (azules, cyan, índigo)
- Gradientes modernos y sombras personalizadas
- Animaciones suaves con Framer Motion
- Diseño completamente responsivo
- Optimización para dispositivos móviles

### 💬 **Integración de Contacto**
- Botón flotante de WhatsApp con mensajes personalizados
- Formulario de contacto con validación
- Enlaces directos a WhatsApp con mensajes contextuales
- Información de contacto destacada en el footer

### 📱 **Funcionalidades**
- Carrusel de imágenes en la página principal
- Galería de trabajos con filtros por categoría
- Modales informativos para servicios
- Navegación fluida entre páginas
- SEO optimizado con React Helmet

## Información de Contacto

- **WhatsApp**: +51 972 963 857
- **Email**: servicios@pitech.com
- **Horario**: Lunes a Domingo 7:00 AM - 9:00 PM
- **Emergencias**: Disponibles 24/7
- **Zona de Servicio**: Toda la ciudad y alrededores

## Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/NuevaFuncionalidad`)
3. Commit tus cambios (`git commit -m 'Agregar nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/NuevaFuncionalidad`)
5. Abre un Pull Request

## Licencia

Este proyecto está bajo la Licencia PITECH. Todos los derechos reservados.

---

**PITECH Servicios Residenciales** - Tu hogar en las mejores manos con más de 10 años de experiencia en servicios profesionales de mantenimiento y reparación residencial. 