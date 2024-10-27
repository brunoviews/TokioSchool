import React from "react";
import Imagen from "../components/Imagen";
import Video from "../components/Video";
import { motion } from "framer-motion";
import { useState } from "react";
import "./Galeria.css";

const Galeria = () => {
  const [filtro, setFiltro] = useState("");

  const imagenes = [
    { src: "./img/arta.webp", alt: "Arta", skill: ["VIT", "DANO"] },
    { src: "./img/gaon.webp", alt: "Gaon", skill: ["VIT", "DANO"] },
    { src: "./img/ralph.webp", alt: "Ralph", skill: ["VIT", "DANO"] },
    { src: "./img/sieg.webp", alt: "Sieg", skill: ["VIT", "DANO"] },
    { src: "./img/dacy.png", alt: "Dacy", skill: ["VIT", "DANO"] },
    { src: "./img/krieg.webp", alt: "Krieg", skill: ["VIT", "DANO"] },
    { src: "./img/ryan.jpg", alt: "Ryan", skill: ["DEX"] },
    { src: "./img/tia.webp", alt: "Tia", skill: ["DEX", "VELOCIDAD"] },
    {
      src: "./img/deir.jpg",
      alt: "Dark Eir",
      skill: ["INT", "VELOCIDAD", "CURA"],
    },
    { src: "./img/iris.webp", alt: "Iris", skill: "DEX" },
    { src: "./img/arien.webp", alt: "Arien", skill: ["DEX", "VELOCIDAD"] },
    { src: "./img/eir.jpg", alt: "Eir", skill: ["VIT", "CURA"] },
    { src: "./img/asuka.webp", alt: "Asuka", skill: ["DEX", "VELOCIDAD"] },
    { src: "./img/yuki.webp", alt: "Yuki", skill: ["INT", "DANO"] },
    {
      src: "./img/kali.webp",
      alt: "Kali",
      skill: ["INT", "CURA", "VELOCIDAD"],
    },
  ];


  //Si hay un filtro, se filtran las imagenes, si no, se muestran todas
  const personajesFiltrados = filtro
    ? imagenes.filter((imagen) => imagen.skill.includes(filtro))
    : imagenes;

  const handleFiltro = (skill) => {
    setFiltro(skill);
  };

  const videos = [
    {
      src: "https://youtu.be/CnDuw81Vbko?si=OgECCQbiADg86BFH",
      alt: "DDX DIMENSION",
    },
    { src: "https://youtu.be/giqA3WxvmWw", alt: "DDM DIMENSION" },
    {
      src: "https://youtu.be/dLBGd1SoH3w?si=UOkmYAfD4QgTVYuB",
      alt: "SOLO BIGTALK",
    },
    {
      src: "https://youtu.be/4Z8ClbUEjQc?si=qH0sa2AZnl71-xGN",
      alt: "DDX DIMENSION",
    },
  ];

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container-info">
          <p>
            <strong>VIT</strong>: Los personajes centrados en vitalidad suelen
            usar ataques físicos y cuerpo a cuerpo contra los monstruos, pero no
            excluyen ataques mágicos e inmunes. Tienen mayor HP y recuperación
            de HP, lo que los hace más recomendables para enfrentar jefes y
            liderar durante batallas en equipo.
          </p>
          <p>
            <strong>INT</strong>: Los personajes centrados en inteligencia usan
            ataques mágicos, pero sin excluir ataques físicos, generalmente a
            larga distancia o en área. Tienen una mayor tasa de MP y
            recuperación de MP, siendo recomendables para limpiar corredores y
            enfrentar oleadas de monstruos, además de apoyar al equipo.
          </p>
          <p>
            <strong>DEX</strong>: Los personajes centrados en destreza tienen
            tanto ataques mágicos como físicos, en área o ataques focalizados.
            Al alcanzar cierto nivel, pueden rotar sus habilidades sin
            "retraso", es decir, sin tiempo de espera. Tienen una mayor tasa de
            daño crítico, sin embargo, tienden a usar mucho MP y no tienen tanto
            HP en comparación con otras clases, siendo recomendables para juegos
            híbridos y de control.
          </p>
          <p>
            Pero, aunque existen diferentes clases, ciertos personajes tienen
            características únicas en relación a su jugabilidad, lo que puede
            hacer que parezcan una clase híbrida.
          </p>
        </div>

        <h1 className="personajes-titulo">Personajes:</h1>
        <div className="filtro-container">
          <div className="button-container">
            <p>
              <strong className="filter-titulo">Filtrar por Clase:</strong>
            </p>
            <button className="btn-todos" onClick={() => handleFiltro("")}>
              Todos
            </button>
            <button className="btn-skill" onClick={() => handleFiltro("VIT")}>
              VIT
            </button>
            <button className="btn-skill" onClick={() => handleFiltro("INT")}>
              INT
            </button>
            <button className="btn-skill" onClick={() => handleFiltro("DEX")}>
              DEX
            </button>
          </div>
        </div>
        <div className="filtro-container">
          <div className="button-container">
            <p>
              <strong className="filter-titulo">Filtrar por Habilidad:</strong>
            </p>
            <button className="btn-todos" onClick={() => handleFiltro("")}>
              Todos
            </button>
            <button className="btn-skill" onClick={() => handleFiltro("DANO")}>
              DAÑO
            </button>
            <button
              className="btn-skill"
              onClick={() => handleFiltro("VELOCIDAD")}
            >
              VELOCIDAD
            </button>
            <button className="btn-skill" onClick={() => handleFiltro("CURA")}>
              CURA
            </button>
            
          </div>
        </div>

        <div className="galeria-container">
          {personajesFiltrados.map((imagen, index) => (
            <Imagen key={index} src={imagen.src} alt={imagen.alt} />
          ))}
        </div>

        <h1 className="personajes-titulo">Videos:</h1>
        <div className="galeria-video-container">
          {videos.map((video, index) => (
            <Video key={index} src={video.src} alt={video.alt} />
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default Galeria;
