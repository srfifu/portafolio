import { useState } from 'react';
import { FaGithub, FaWhatsapp, FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";


function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-base-100 to-base-200">
      {/* Navegación elegante actualizada */}
      <nav className="navbar bg-base-100/70 backdrop-blur-md sticky top-0 z-50 shadow-md border-b border-base-200">
        <div className="container mx-auto px-4 flex items-center justify-between">
          
          {/* Logo */}
          <a className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text hover:scale-105 transition-transform">
            Iván Mansilla
          </a>

          {/* Navegación Desktop */}
          <ul className="hidden lg:flex space-x-6 font-medium items-center">
            <li><a href="#inicio" className="hover:text-primary transition-colors">Inicio</a></li>
            <li><a href="#sobre-mi" className="hover:text-primary transition-colors">Sobre Mí</a></li>
            <li><a href="#servicios" className="hover:text-primary transition-colors">Servicios</a></li>
            <li><a href="#proyectos" className="hover:text-primary transition-colors">Proyectos</a></li>
            <li><a href="#contacto" className="hover:text-primary transition-colors">Contacto</a></li>
          </ul>

          {/* Botón hamburguesa móvil */}
          <div className="lg:hidden">
            <button className="btn btn-circle btn-ghost" onClick={toggleMenu}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Menú móvil */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-base-100/95 backdrop-blur-lg flex flex-col items-center justify-center space-y-6 text-xl font-semibold">
          <button 
            className="absolute top-4 right-4 btn btn-circle btn-ghost"
            onClick={toggleMenu}
          >
            ✕
          </button>
          <a href="#inicio" className="hover:text-primary transition-colors" onClick={toggleMenu}>Inicio</a>
          <a href="#sobre-mi" className="hover:text-primary transition-colors" onClick={toggleMenu}>Sobre Mí</a>
          <a href="#servicios" className="hover:text-primary transition-colors" onClick={toggleMenu}>Servicios</a>
          <a href="#proyectos" className="hover:text-primary transition-colors" onClick={toggleMenu}>Proyectos</a>
          <a href="#contacto" className="hover:text-primary transition-colors" onClick={toggleMenu}>Contacto</a>
        </div>
      )}


      {/* Sección Hero con efecto parallax */}
      <section id="inicio" className="hero min-h-screen relative overflow-hidden">
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content relative z-10">
          <div className="max-w-4xl">
            <div className="avatar animate-float">
              <div className="w-48 rounded-full ring ring-primary ring-offset-base-100 ring-offset-4">
                <img src="https://cdn.pixabay.com/photo/2021/03/03/10/17/man-6064964_1280.jpg" alt="Iván Mansilla" />
              </div>
            </div>
            <h1 className="mb-6 text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              ¡Hola, soy Iván!
            </h1>
            <h2 className="mb-8 text-3xl md:text-4xl font-semibold">
              Desarrollador Web <span className="text-primary">Full Stack</span>
            </h2>
            <p className="mb-8 text-xl max-w-2xl mx-auto">
              Creo soluciones digitales innovadoras y escalables con las últimas tecnologías web.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#contacto" className="btn btn-primary btn-lg rounded-full px-8 shadow-lg hover:shadow-primary/50">
                Contáctame
              </a>
              <a
                href="https://deni-begaj.github.io/docs/cv.pdf"
                download
                className="btn btn-outline btn-lg rounded-full px-8 border-2 hover:bg-base-100/20"
              >
                Descargar CV
              </a>

            </div>
          </div>
        </div>
        
        {/* Efecto de partículas decorativas */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(15)].map((_, i) => (
            <div 
              key={i}
              className="absolute rounded-full bg-primary/20"
              style={{
                width: `${Math.random() * 10 + 5}px`,
                height: `${Math.random() * 10 + 5}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `float ${Math.random() * 10 + 10}s infinite ${Math.random() * 5}s`
              }}
            ></div>
          ))}
        </div>
      </section>

      {/* Sección de estadísticas moderna con animaciones */}
      <section className="py-20 ">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
            Experiencia Profesional
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Estadística 1 */}
            <div className="bg-base-100 rounded-2xl shadow-xl p-8 hover:scale-105 hover:shadow-2xl transition-transform duration-300 text-center">
              <div className="flex justify-center mb-4 text-primary">
                <svg className="w-10 h-10 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white-700">Proyectos</h3>
              <p className="text-4xl font-bold text-primary my-2 animate-pulse">50+</p>
              <p className="text-sm text-white-500">Realizados con éxito</p>
            </div>

            {/* Estadística 2 */}
            <div className="bg-base-100 rounded-2xl shadow-xl p-8 hover:scale-105 hover:shadow-2xl transition-transform duration-300 text-center">
              <div className="flex justify-center mb-4 text-secondary">
                <svg className="w-10 h-10 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white-700">Clientes</h3>
              <p className="text-4xl font-bold text-secondary my-2 animate-pulse">30+</p>
              <p className="text-sm text-white-500">Clientes satisfechos</p>
            </div>

            {/* Estadística 3 */}
            <div className="bg-base-100 rounded-2xl shadow-xl p-8 hover:scale-105 hover:shadow-2xl transition-transform duration-300 text-center">
              <div className="flex justify-center mb-4 text-accent">
                <svg className="w-10 h-10 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white-700">Experiencia</h3>
              <p className="text-4xl font-bold text-accent my-2 animate-pulse">5+</p>
              <p className="text-sm text-white-500">Años en desarrollo</p>
            </div>
          </div>
        </div>
      </section>
      <section id="sobre-mi" className="py-20 bg-base-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-10 text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
            Sobre mí
          </h2>

          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-10">
            <img
              src="https://cdn.pixabay.com/photo/2021/11/19/20/20/man-6810238_1280.jpg"
              alt="Foto de perfil"
              className="w-48 h-48 rounded-full object-cover shadow-md border-4 border-primary"
            />

            <div className="text-center md:text-left space-y-4">
              <h3 className="text-2xl font-semibold">¡Hola! Soy Ivan Mansilla</h3>
              <p className="text-base-content text-lg">
                Soy desarrollador fullstack con experiencia en tecnologías como PHP, MySQL, JavaScript, y frameworks modernos. Me especializo en construir soluciones web eficientes, seguras y accesibles. Me encanta automatizar procesos, integrar APIs y trabajar en proyectos que mezclan lógica y creatividad.
              </p>
              <p className="text-base-content text-lg">
                Actualmente estoy trabajando en varios proyectos, incluyendo una billetera virtual y una plataforma de gestión de servicios. Siempre estoy abierto a colaborar en ideas innovadoras.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="servicios" className="py-20 bg-base-200">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
            Servicios
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-base-100 p-6 rounded-xl shadow-lg hover:shadow-primary transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-2 text-primary">Desarrollo Web</h3>
              <p className="text-base-content">Diseño y desarrollo de sitios web rápidos, modernos y responsivos.</p>
            </div>
            <div className="bg-base-100 p-6 rounded-xl shadow-lg hover:shadow-secondary transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-2 text-secondary">Aplicaciones Full Stack</h3>
              <p className="text-base-content">Creación de soluciones completas del lado cliente y servidor.</p>
            </div>
            <div className="bg-base-100 p-6 rounded-xl shadow-lg hover:shadow-accent transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-2 text-accent">Mantenimiento y Soporte</h3>
              <p className="text-base-content">Optimización, actualizaciones y soporte técnico profesional.</p>
            </div>
          </div>
        </div>
      </section>
      <section id="proyectos" className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
            Proyectos Destacados
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Proyecto 1 */}
            <div className="bg-base-100 p-6 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300">
              <img src="https://fiverr-res.cloudinary.com/videos/t_main1,q_auto,f_auto/fsvt55l8bqwxlu4wdpao/create-a-personal-finance-tracking-dashboard.png" alt="Proyecto Financia" className="rounded-lg mb-4" />
              <h3 className="text-xl font-semibold text-primary mb-2">Financia - Gestión Financiera</h3>
              <p className="text-base-content">
                Aplicación moderna de finanzas personales para controlar gastos, recibir alertas y realizar transferencias con seguridad.
              </p>
            </div>

            {/* Proyecto 2 */}
            <div className="bg-base-100 p-6 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300">
              <img src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/RE4QB67?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=960&qlt=100&fmt=png-alpha&fit=constrain" alt="Proyecto MeetSync" className="rounded-lg mb-4" />
              <h3 className="text-xl font-semibold text-primary mb-2">MeetSync - Agenda y Reservas</h3>
              <p className="text-base-content">
                Herramienta para gestionar turnos y reuniones, con integración de notificaciones por correo y WhatsApp.
              </p>
            </div>

            {/* Proyecto 3 */}
            <div className="bg-base-100 p-6 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300">
              <img src="https://flexxus.com.ar/wp-content/uploads/Print-CRM1-1024x660.png" alt="Proyecto EduFlex" className="rounded-lg mb-4" />
              <h3 className="text-xl font-semibold text-primary mb-2">EduFlex - Plataforma Educativa</h3>
              <p className="text-base-content">
                Plataforma de aprendizaje con lecciones en video, pagos integrados y seguimiento personalizado para cada estudiante.
              </p>
            </div>

          </div>
        </div>
      </section>

      
      <section id="contacto" className="py-20 bg-base-200">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
            Contacto
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <a
              href="https://github.com/tu_usuario"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-4 bg-base-100 p-5 rounded-xl shadow hover:shadow-lg transition"
            >
              <FaGithub className="text-3xl text-neutral" />
              <span className="text-lg font-medium">GitHub</span>
            </a>
            <a
              href="https://wa.me/549XXXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-4 bg-base-100 p-5 rounded-xl shadow hover:shadow-lg transition"
            >
              <FaWhatsapp className="text-3xl text-green-500" />
              <span className="text-lg font-medium">WhatsApp</span>
            </a>
            <a
              href="https://www.instagram.com/tu_usuario"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-4 bg-base-100 p-5 rounded-xl shadow hover:shadow-lg transition"
            >
              <FaInstagram className="text-3xl text-pink-500" />
              <span className="text-lg font-medium">Instagram</span>
            </a>
            <a
              href="https://www.facebook.com/tu_usuario"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-4 bg-base-100 p-5 rounded-xl shadow hover:shadow-lg transition"
            >
              <FaFacebook className="text-3xl text-blue-600" />
              <span className="text-lg font-medium">Facebook</span>
            </a>
            <a
              href="https://www.linkedin.com/in/tu_usuario"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-4 bg-base-100 p-5 rounded-xl shadow hover:shadow-lg transition"
            >
              <FaLinkedin className="text-3xl text-blue-700" />
              <span className="text-lg font-medium">LinkedIn</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer moderno */}
      <footer className="bg-base-300 text-base-content py-10">
        <div className="container mx-auto flex flex-col lg:flex-row justify-between items-start gap-10 px-5">
          
          {/* Perfil */}
          <div className="flex flex-col items-start lg:w-1/4">
            <div className="flex items-center space-x-4 mb-4">
              <div className="avatar">
                <div className="w-14 rounded-full">
                  <img src="https://cdn.pixabay.com/photo/2021/03/03/10/17/man-6064964_1280.jpg" alt="Iván Mansilla" />
                </div>
              </div>
              <span className="text-xl font-bold">Iván Mansilla</span>
            </div>
            <p className="mb-4 text-sm">Desarrollador Full Stack apasionado por crear soluciones digitales innovadoras.</p>
            <div className="flex space-x-3">
              <a href="#" className="btn btn-circle btn-ghost text-xl hover:text-primary"><i className="fab fa-github"></i></a>
              <a href="#" className="btn btn-circle btn-ghost text-xl hover:text-primary"><i className="fab fa-linkedin"></i></a>
              <a href="#" className="btn btn-circle btn-ghost text-xl hover:text-primary"><i className="fab fa-twitter"></i></a>
            </div>
          </div>

          {/* Servicios */}
          <div className="flex flex-col lg:w-1/5">
            <span className="footer-title">Servicios</span>
            <a className="link link-hover">Desarrollo Web</a>
            <a className="link link-hover">Aplicaciones Móviles</a>
            <a className="link link-hover">Diseño UI/UX</a>
            <a className="link link-hover">Consultoría Tech</a>
          </div>

          {/* Enlaces */}
          <div className="flex flex-col lg:w-1/5">
            <span className="footer-title">Enlaces</span>
            <a href="#sobre-mi" className="link link-hover">Sobre Mí</a>
            <a href="#proyectos" className="link link-hover">Proyectos</a>
            <a href="#contacto" className="link link-hover">Contacto</a>
            <a href="#" className="link link-hover">Blog</a>
          </div>

          {/* Contacto */}
          <div className="flex flex-col lg:w-1/5">
            <span className="footer-title">Contacto</span>
            <div className="flex items-center space-x-2 mt-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>contacto@ivanmansilla.com</span>
            </div>
            <div className="flex items-center space-x-2 mt-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>+54 9 11 1234-5678</span>
            </div>
          </div>

        </div>
      </footer>

      
      {/* Copyright */}
      <div className="py-4 bg-base-300 border-t border-base-200/50 text-center">
        <p>© {new Date().getFullYear()} Iván Mansilla. Todos los derechos reservados.</p>
      </div>
    </div>
  );
}

export default App;