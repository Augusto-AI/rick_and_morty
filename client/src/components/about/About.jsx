import React from 'react';
import augusto from '../assets/Img/augusto.jpg';
import styles from './About.module.css';







export default function About(props) {
  return (
    <div className={styles.card}>
      <h1>About Me</h1>
      <p>
        Hi there! My name is Augusto Herrera, and I'm a Js Fullstack Developer. I love
        coding and building things with the lattes technologies. Welcome to my App.
      </p>
      <img nameclass={styles.img} src={augusto} alt="My Photo" />
    </div>
  );
}

// EJERCICIO 2 | About
// Ahora crearemos un componente para presentar nuestro perfil. Crea un componente llamado About. Este componente será una vista que contenga tu información.

// Esto es completamente libre. Puedes mostrar incluso una imagen tuya. Esto le servirá a las personas que vean tu App para conocer al creador 🚀✨.