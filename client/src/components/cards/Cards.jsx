import Card from '../card/Card.jsx';

export default function Cards({characters, onClose}) {
   console.log(typeof onClose);
   const cardsContainer = {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-evenly"
   }

   console.log(characters);
   return (
      <div style={cardsContainer}>
         {
            characters.map((character, index) => (
               <div key={index} > 
               <Card
                 
                  id={character.id}
                  name={character.name}
                  status={character.status}
                  species={character.species}
                  gender={character.gender}
                  origin={character.origin?.name}
                  image={character.image}
                  onClose={onClose}
               />
               </div>
            ))
         }
      </div>
   );
}