import React from 'react';
import Imagen from '../components/Imagen';
import Video from '../components/Video';
import { motion } from 'framer-motion';
import './Galeria.css';

const Galeria = () => {

  const imagenes = [
    { src: './img/arta.webp', alt: 'Arta' },
    { src: './img/gaon.webp', alt: 'Gaon' },
    { src: './img/ralph.webp', alt: 'Ralph' },
    { src: './img/sieg.webp', alt: 'Sieg' },
    { src: './img/dacy.png', alt: 'Dacy' },
    { src: './img/krieg.webp', alt: 'Krieg' },
    { src: './img/ryan.jpg', alt: 'Ryan' },
    { src: './img/tia.webp', alt: 'Tia' },
    { src: './img/deir.jpg', alt: 'Dark Eir' },
    { src: './img/iris.webp', alt: 'Iris' },
    { src: './img/arien.webp', alt: 'Arien' },
    { src: './img/eir.jpg', alt: 'Eir' },
    { src: './img/asuka.webp', alt: 'Asuka' },
    { src: './img/yuki.webp', alt: 'Yuki' },
    { src: './img/kali.webp', alt: 'Kali' }
  ];


  const videos = [
    { src: 'https://youtu.be/CnDuw81Vbko?si=OgECCQbiADg86BFH', alt: 'DDX DIMENSION' },
    { src: 'https://youtu.be/giqA3WxvmWw', alt: 'DDM DIMENSION' },
    { src: 'https://youtu.be/dLBGd1SoH3w?si=UOkmYAfD4QgTVYuB', alt: 'SOLO BIGTALK' },
    { src: 'https://youtu.be/4Z8ClbUEjQc?si=qH0sa2AZnl71-xGN', alt: 'DDX DIMENSION' },

  ];



  return (


    <>
  <motion.div
      
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
    >
      <div className='container-info'>
        <p><strong>VIT</strong>: Los personajes centrados en vitalidad suelen usar ataques físicos y cuerpo a cuerpo contra los monstruos, pero no excluyen ataques mágicos e inmunes. Tienen mayor HP y recuperación de HP, lo que los hace más recomendables para enfrentar jefes y liderar durante batallas en equipo.</p>
        <p><strong>INT</strong>: Los personajes centrados en inteligencia usan ataques mágicos, pero sin excluir ataques físicos, generalmente a larga distancia o en área. Tienen una mayor tasa de MP y recuperación de MP, siendo recomendables para limpiar corredores y enfrentar oleadas de monstruos, además de apoyar al equipo.</p>
        <p><strong>DEX</strong>: Los personajes centrados en destreza tienen tanto ataques mágicos como físicos, en área o ataques focalizados. Al alcanzar cierto nivel, pueden rotar sus habilidades sin "retraso", es decir, sin tiempo de espera. Tienen una mayor tasa de daño crítico, sin embargo, tienden a usar mucho MP y no tienen tanto HP en comparación con otras clases, siendo recomendables para juegos híbridos y de control.</p>
        <p>Pero, aunque existen diferentes clases, ciertos personajes tienen características únicas en relación a su jugabilidad, lo que puede hacer que parezcan una clase híbrida.

        </p>
      </div>

      <h1 className='personajes-titulo'>Personajes:</h1>
      <div className='galeria-container' >
        {imagenes.map((imagen, index,) => (
          <Imagen key={index} src={imagen.src} alt={imagen.alt} />


        ))}


      </div>


      <h1 className='personajes-titulo'>Videos:</h1>
      <div className='galeria-video-container' >
        {videos.map((video, index) => (
          <Video key={index} src={video.src} alt={video.alt} />
        ))}
      </div>
      </motion.div>
    </>
  );
}

export default Galeria;
