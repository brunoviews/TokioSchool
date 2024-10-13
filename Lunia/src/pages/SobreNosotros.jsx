import React from "react";
import { motion } from "framer-motion";
import Imagen from '../components/Imagen';

const SobreNosotros = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container-inicio">
          <h1 className="title">Conócenos</h1>
          <p>
            En <strong className="mini-logo">Lunia Gaming Zone</strong>, no solo nos enfocamos en el desarrollo de nuestro
            principal videojuego (Lunia Z), sino que también estamos involucrados en la
            creación de otros proyectos emocionantes. Nos especializamos en tres
            categorías clave dentro del mundo de los videojuegos. A continuación, te presentamos algunos de estos proyectos.
          </p>
        </div>

        <div className="container-inicio">
          <h3 className="title">Proyectos recientes</h3>

          <div className="container-about">
            <section>
              <h4>
                <strong>
                  <abbr title="First Person Shooter">FPS</abbr>
                </strong>
              </h4>
              <p>
                Los juegos FPS se centran en ofrecer una experiencia inmersiva
                en primera persona, donde los jugadores asumen el control
                directo de un personaje. Este tipo de juegos es ideal para
                aquellos que disfrutan de la acción rápida y la estrategia en
                tiempo real. Buscamos brindar combates emocionantes, con
                gráficos detallados y entornos dinámicos.
              </p>
                <div className="imagen-container-about">
                <Imagen src="./img/black_squad.png" alt="Black Squad" />
                </div>
            </section>

            <section>
              <h4>
                <strong>
                  
                  <abbr title="Role-Playing Game">RPG</abbr>
                </strong>
              </h4>
              <p>
                Los juegos FPS se centran en ofrecer una experiencia inmersiva
                en primera persona, donde los jugadores asumen el control
                directo de un personaje. Este tipo de juegos es ideal para
                aquellos que disfrutan de la acción rápida y la estrategia en
                tiempo real. Buscamos brindar combates emocionantes, con
                gráficos detallados y entornos dinámicos.
              </p>
              <div className="imagen-container-about">
                <Imagen src="./img/icarus.jpg" alt="Icarus" />
                </div>
            </section>

            <section>
              <h4>
                <strong>Casual Action</strong>
              </h4>
              <p>
    
                Para quienes prefieren una experiencia más relajada pero
                igualmente entretenida, desarrollamos juegos de acción casual.
                Estos títulos son accesibles, con mecánicas sencillas pero
                adictivas, perfectos para disfrutar en cualquier momento. La
                diversión y la acción rápida se combinan para ofrecer partidas
                cortas y emocionantes.
              </p>
              <div className="imagen-container-about">
                <Imagen src="./img/fish.jpg" alt="Fish" />
                </div>
            </section>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default SobreNosotros;
