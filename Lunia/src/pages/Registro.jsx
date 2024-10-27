import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";
import "./Registro.css";

const Registro = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    nombreUsuario: "",
    correo: "",
    contraseña: "",
    confirmarContraseña: "",
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value, 
    });
  };

  const validate = () => {
    const newErrors = {};
  
    // Validar Nombre
    if (!formData.nombre.trim()) {
      newErrors.nombre = 'El nombre es obligatorio';
    }
  
    // Validar Apellido
    if (!formData.apellido.trim()) {
      newErrors.apellido = 'El apellido es obligatorio';
    }
  
    // Validar Nombre de Usuario
    if (!formData.nombreUsuario.trim()) {
      newErrors.nombreUsuario = 'El nombre de usuario es obligatorio';
    }
  
    // Validar Correo Electrónico con la nueva regex
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!formData.correo) {
      newErrors.correo = 'El correo es obligatorio';
    } else if (!emailRegex.test(formData.correo)) {
      newErrors.correo = 'El correo es inválido';
    }
  
    // Validar Contraseña
    if (!formData.contraseña) {
      newErrors.contraseña = 'La contraseña es obligatoria';
    } else if (formData.contraseña.length < 6) {
      newErrors.contraseña = 'La contraseña debe tener al menos 6 caracteres';
    }
  
    // Validar Confirmar Contraseña
    if (!formData.confirmarContraseña) {
      newErrors.confirmarContraseña = 'Debes confirmar la contraseña';
    } else if (formData.contraseña !== formData.confirmarContraseña) {
      newErrors.confirmarContraseña = 'Las contraseñas no coinciden';
    }
  
    return newErrors;
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      // Simular registro exitoso
      console.log("Registro exitoso", formData);
      setSuccess(true);

      // Resetear el formulario
      setFormData({
        nombre: "",
        apellido: "",
        nombreUsuario: "",
        correo: "",
        contraseña: "",
        confirmarContraseña: "",
      });

      setTimeout(() => {
        setSuccess(false);
      }, 5000);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
    >
      <div>
        <h1 className="title">Registrate y elige en que juego quieres hacerte una leyenda</h1>
        <p className="text-info">Una vez completes tu registro, podrás acceder a cualquiera de nuestros juegos.</p>
      </div>

      <div className="registro-container">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="nombre">Nombre:</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              required
            />
            {errors.nombre && <span className="error">{errors.nombre}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="apellido">Apellido:</label>
            <input
              type="text"
              id="apellido"
              name="apellido"
              value={formData.apellido}
              onChange={handleChange}
              required
            />
            {errors.apellido && (
              <span className="error">{errors.apellido}</span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="nombreUsuario">Nombre de Usuario:</label>
            <input
              type="text"
              id="nombreUsuario"
              name="nombreUsuario"
              value={formData.nombreUsuario}
              onChange={handleChange}
              required
            />
            {errors.nombreUsuario && (
              <span className="error">{errors.nombreUsuario}</span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="correo">Correo Electrónico:</label>
            <input
              type="email"
              id="correo"
              name="correo"
              value={formData.correo}
              onChange={handleChange}
              required
            />
            {errors.correo && <span className="error">{errors.correo}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="contraseña">Contraseña:</label>
            <input
              type="password"
              id="contraseña"
              name="contraseña"
              value={formData.contraseña}
              onChange={handleChange}
              required
            />
            {errors.contraseña && (
              <span className="error">{errors.contraseña}</span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="confirmarContraseña">Confirmar Contraseña:</label>
            <input
              type="password"
              id="confirmarContraseña"
              name="confirmarContraseña"
              value={formData.confirmarContraseña}
              onChange={handleChange}
              required
            />
            {errors.confirmarContraseña && (
              <span className="error">{errors.confirmarContraseña}</span>
            )}
          </div>

          <button type="submit">Registrar</button>
        </form>
        {success && <p className="success-message">¡Registro exitoso!</p>}
      </div>
    </motion.div>
  );
};

export default Registro;
