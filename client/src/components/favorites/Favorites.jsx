import React, { useState } from 'react';
import Card from '../card/Card.jsx';
import styles from './Favorites.module.css';
import { connect } from 'react-redux';
import { orderCards, filterCards } from '../../redux/actions.js';
import { useDispatch } from 'react-redux';

function Favorites(props) {
  const [aux, setAux] = useState(false); // Estado local "aux" inicializado en false
  
  const myFavorites = props.myFavorites;
  
  const dispatch = useDispatch();

  const handleOrder = (evento) => {
    dispatch(orderCards(evento.target.value));
    setAux(!aux); // Cambia el estado local "aux" al valor opuesto (true a false o false a true)
  };

  const handleFilter = (evento) => {
    if (evento.target.value === 'Todos') {
      setAux(true); // Cambia el estado local "aux" a true si se selecciona la opción "Todos"
    } else {
      dispatch(filterCards(evento.target.value));
      setAux(false); // Cambia el estado local "aux" a false si se selecciona cualquier otra opción
    }
  };

  const onClose = (id) => {
    dispatch(filterCards(id)); 

  };

  return (
    <div>
      <select 
        onChange={handleOrder}
        className={styles.button1}
        value={aux ? 'A' : 'D'}
      >
        <option value="A">Ascendente</option>
        <option value="D">Descendente</option>
      </select>

      <select 
      className={styles.button1}
        name="filter" 
        onChange={handleFilter}
        value={aux ? 'Todos' : ''}
      >
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Genderless">Genderless</option>
        <option value="unknown">Unknown</option>
        <option value="Todos">Todos</option> 
      </select>

      {myFavorites
        .filter((character) => aux || character.gender === 'Todos')
        .map((character) => (
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
        ))}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, null)(Favorites);
