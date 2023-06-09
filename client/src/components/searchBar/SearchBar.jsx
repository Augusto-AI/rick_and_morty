
 
import React, {useState} from "react"; 
import styles from "./SearchBar.module.css";


export default function SearchBar(props) {
   const [id, setId] = useState("");

   const handleChange = event => {
      const {value} = event.target;
      setId(value);
      console.log("id: ", id);
   }

   return (
      <div className={styles.container}>
         <input
            type="text"
            name="search"
            id="search"
            onChange={handleChange}
            placeholder="Busca tu personaje por ID"
         />
         <button className={styles.botton2} onClick={() => props.onSearch(id)}>Agregar</button>
           
      </div>
   );
}