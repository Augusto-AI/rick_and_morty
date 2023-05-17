// EJERCICIO 3 | Cards
// Utilizaremos este componente para renderizar muchos componentes Card. En otras palabras, este componente será el "contenedor" de todas las Cards.

// Lo primero que debes hacer es recibir la propiedad characters mediante las props. Esta propiedad es una arreglo con todos tus personajes. Por cada uno de ellos deberás renderizar un componente Card pasándole todas las propiedades que ya mencionamos en el ejercicio anterior.

// [NOTA]: agrega una propiedad llamada key y que sea igual al ID del personaje.

// [NOTA]: puedes guiarte con la documentación de React para realizar este ejercicio.

// import Card from './Card';
import Card from '../card/Card.jsx';

export default function Cards({characters, onClose}) {
   const cardsContainer = {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-evenly"
   }
   console.log(characters);
   return (
      <div style={cardsContainer}>
         {
            characters.map(character => (
               <Card
                  key={character.id}
                  id={character.id}
                  name={character.name}
                  status={character.status}
                  species={character.species}
                  gender={character.gender}
                  origin={character.origin?.name}
                  image={character.image}
                  onClose={onClose}
               />
            ))
         }
      </div>
   );
}