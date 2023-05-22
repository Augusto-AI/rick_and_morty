// Ahora te desafiamos a que crees un nuevo componente llamado Error. A este componente le podrás dar los estilos que quieras, pero la idea es que se muestre un mensaje de error 404. ¡Puedes inspirarte en este ejemplo!

// El desafío es el siguiente: haz que este componente se muestre cada vez que el usuario ingrese a cualquier otra ruta que no exista. Es decir que no la hayas especificado en esta homework. Por ejemplo, si creaste una ruta "/home" y "/about", y el usuario en el navegador escribe y "/henry", debería mostrar el componente Error 404.
import Error from './components/Error';
<Switch>
  <Route exact path="/" component={Home} />
  <Route path="/about" component={About} />
  <Route path="/contact" component={Contact} />
  <Route component={Error} />
</Switch>
import React from 'react';

function Error() {
  return (
    <div style={{ background: 'red', color: 'white', padding: '1rem' }}>
      <h2>Error 404: Página no encontrada</h2>
    </div>
  );
}

export default Error;
