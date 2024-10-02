import React from "react";
import { motion } from "framer-motion";

const Inicio = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.2 }}
      >
        <div className="container-inicio">
          <h1 className="title">Bienvenido a Lunia Z </h1>
          <p>
          <strong className="mini-logo">Lunia Z</strong>, un juego que contrasta incluso hoy en día entre muchos
            MMORPGs en el mercado, se juega como un arcade de acción, con una
            apariencia de anime. La versión inicial de Lunia ofrece cuatro
            clases principales de personajes disponibles de forma gratuita.
            Estas incluyen a Sieg el Caballero (Guerrero), Eir la Sanadora
            (Sacerdotisa), Dainn el Mago (Hechicero) y Tia la Ladrona
            (Asesina/bandida). Actualmente hay numerosas clases disponibles de
            forma gratuita. Aunque similares, cada una tiene un estilo de juego
            diferente, como Lime, Ryan Hunt, Dacy Dalstrin, Arien, Asuka, y más,
            además de Dark Eir y Arta Lorraine. Las habilidades de los
            personajes se pueden personalizar mediante el uso de puntos de
            habilidad que el jugador gana al alcanzar un nuevo nivel. El nivel
            máximo actual de los personajes es 99.
          </p>
        </div>

        <div className="container-inicio">
          <h1 className="title">Nivel - Puntos de habilidad adicionales</h1>
          <p>
            <ul>
              <li>Menor de 70 - 01 Punto de Habilidad</li>
              <li>De 70 a 79 - 02 Puntos de Habilidad</li>
              <li>e 80 a 89 - 03 Puntos de Habilidad</li>
              <li>De 90 a 98 - 04 Puntos de Habilidad</li>
              <li>Al nivel 99 - 05 Puntos de Habilidad</li>
            </ul>
          </p>
        </div>

        <div className="container-inicio">
          <h1 className="title">Jugabilidad</h1>
          <p>
            En la jugabilidad, el jugador tiene libertad para moverse por el
            juego usando teclas en lugar de un cursor de ratón (liberando al
            usuario del método estándar de apuntar y hacer clic). En lugar de
            hacer clic en un enemigo para atacar, se pueden realizar múltiples
            ataques al presionar combinaciones de dos botones de ataque e
            incluso la barra espaciadora. Las dos teclas de ataque funcionan
            como un ataque normal y un ataque específico de la clase.
          </p>
        </div>

        <div className="container-inicio">
          <h1 className="title">Multijugador</h1>
          <p>
            La barra espaciadora se utiliza como un ataque final contra
            oponentes derribados. Los ataques se pueden encadenar en combos, en
            su mayoría aéreos, que se basan en el tiempo, la combinación y el
            orden de los botones de ataque presionados. Además, las habilidades
            y los objetos especiales se pueden asignar a teclas rápidas para
            facilitar su uso como ataques separados o en combos. Además, Lunia
            no restringe las teclas rápidas de habilidades tanto como las teclas
            de función (F1-F9), lo que permite personalizar completamente los
            controles del juego para adaptarlos a tu gusto y estilo.{" "}
          </p>
        </div>

        <div className="container-inicio">
          <h1 className="title">Online</h1>
          <p>
            La historia de Lunia consiste en una serie de "arcos" argumentales,
            que son grupos de 7 episodios vinculados a una trama. Los episodios
            son grupos de 10 etapas, donde puedes elegir entre las dificultades
            fácil, normal y difícil, que son los niveles en Lunia. Cada episodio
            tiene un entorno diferente, y este entorno cambia un poco a la mitad
            de cada episodio. Por ejemplo, el Episodio 1 comienza con los
            jugadores cruzando llanuras y luego avanzando hacia un bosque. El
            Episodio 2 ve a los jugadores empezando en una montaña cubierta de
            nieve, viajando a través de un pueblo invernal y finalmente entrando
            en una cueva helada. Cada episodio tiene una contraparte "Leyenda".
            Aunque las etapas permanecen en gran medida iguales en esencia, los
            enemigos encontrados son mucho más fuertes y, a veces, tienen nuevos
            aliados. Incluso las batallas contra los jefes a veces cambian.{" "}
          </p>
        </div>
      </motion.div>
    </>
  );
};

export default Inicio;
