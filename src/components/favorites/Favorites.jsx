import React, { useState } from 'react';
import Card from '../card/Card.jsx';
import styles from './Favorites.module.css';
import { connect } from 'react-redux';
import { orderCards, filterCards } from '../../redux/actions.js';
import { useDispatch } from 'react-redux';

function Favorites({ myFavorites, onClose }) {
  const dispatch = useDispatch();
  const [aux, setAux] = useState(false); // Estado local "aux" inicializado en false

  const handleOrder = (evento) => {
    dispatch(orderCards(evento.target.value));
    aux ? setAux(false) : setAux(true); // Si el estado local "aux" es true, cambia el estado local "aux" a false, si es false, cambia el estado local "aux" a true
  };

  const handleFilter = (evento) => {
    if (evento.target.value === 'Todos') {
      setAux(true); // Si se selecciona la opción "Todos", cambia el estado local "aux" a true
    } else {
      dispatch(filterCards(evento.target.value));
      setAux(false); // Si se selecciona otra opción distinta a "Todos", cambia el estado local "aux" a false
    }
  };

  return (
    <div name="order" className={styles.cardsContainer}>
      <select onChange={handleOrder}>
        <option value="A">Ascendente</option>
        <option value="D">Descendente</option>
      </select>

      <select name="filter" onChange={handleFilter}>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Genderless">Genderless</option>
        <option value="unknown">Unknown</option>
        <option value="Todos">Todos</option> {/* Opción adicional para mostrar todos los personajes */}

      </select>

      {myFavorites
        .filter((character) => aux || character.gender === 'Todos') // Filtra los personajes favoritos según el estado local "aux"
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


