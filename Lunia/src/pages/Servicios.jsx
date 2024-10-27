import React from "react";
import "./Servicios.css";
const Servicios = () => {
  return (
    <>
      <div className="servicio-container">
        <h1 className="title">Nuestros Servicios</h1>
        <p>
          En <strong className="mini-logo">Lunia Gaming Zone</strong>, nos
          dedicamos a brindar soluciones integrales en el ámbito digital y de
          desarrollo de videojuegos. Además de contar con nuestro juego
          principal destacado en la página de inicio y una sección dedicada a
          personajes, ofrecemos una variedad de servicios diseñados para
          satisfacer las necesidades de nuestros clientes y socios comerciales.
        </p>
      </div>

      <div className="servicio-container">
        <h3 className="title">Servicios de Desarrollo de Videojuegos</h3>
        <p>
          Mantenimiento Web: Mantener tu sitio web actualizado y funcionando de
          manera óptima es crucial para el éxito de tu presencia en línea.
          Nuestro equipo de expertos se encarga de:
        </p>

        <section className="servicio-container-section">
          <h4>Actualizaciones y Mejoras Continuas</h4>
          <p>
            Implementamos nuevas funcionalidades y optimizaciones para asegurar
            que tu sitio web esté siempre al día con las últimas tendencias y
            tecnologías.
          </p>
        </section>

        <section className="servicio-container-section">
          <h4>Monitoreo y Seguridad</h4>
          <p>
            Vigilamos constantemente tu sitio para detectar y prevenir posibles
            amenazas, garantizando la integridad y seguridad de tu información.
          </p>
        </section>

        <section className="servicio-container-section">
          <h4>Optimización de Rendimiento</h4>
          <p>
            Mejoramos la velocidad y eficiencia de tu sitio web para ofrecer una
            experiencia de usuario fluida y satisfactoria.
          </p>
        </section>

        <section className="servicio-container-section">
          <h4>Soporte Técnico</h4>
          <p>
            Disponemos de un equipo de soporte dedicado para resolver cualquier
            incidencia o consulta que pueda surgir de manera rápida y eficiente.
          </p>
        </section>
      </div>

      <div className="servicio-container">
        <h3 className="title">Mantenimiento de Videojuegos para Terceros</h3>
        <p>
          Además de desarrollar nuestros propios juegos, en Lunia Gaming Zone
          ofrecemos servicios de mantenimiento y soporte para videojuegos
          desarrollados por otras compañías. Nos comprometemos a:
        </p>

        <section className="servicio-container-section">
          <h4>Actualizaciones de Software</h4>
          <p>
            Gestionamos e implementamos actualizaciones para garantizar que los
            juegos funcionen sin problemas y sean compatibles con las nuevas
            plataformas y tecnologías..
          </p>
        </section>

        <section className="servicio-container-section">
          <h4>Corrección de Errores</h4>
          <p>
            Identificamos y solucionamos bugs y problemas técnicos para mejorar
            la experiencia de los jugadores.
          </p>
        </section>

        <section className="servicio-container-section">
          <h4>Optimización del Rendimiento</h4>
          <p>
            Aseguramos que los juegos operen de manera eficiente, reduciendo
            tiempos de carga y mejorando la estabilidad general.
          </p>
        </section>

        <section className="servicio-container-section">
          <h4>Soporte y Consultoría</h4>
          <p>
            Brindamos asesoramiento técnico y soporte continuo para ayudar a las
            compañías a mantener y mejorar sus videojuegos, permitiéndoles
            enfocarse en la creatividad y desarrollo de contenido.
          </p>
        </section>
      </div>
    </>
  );
};

export default Servicios;
