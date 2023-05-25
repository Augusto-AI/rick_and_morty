import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from './Card.module.css';
import { addFav, removeFav } from '../../redux/actions';

function Card(props) {
  const [isFav, setIsFav] = useState(false);

  const handleFavorite = () => {
    if (isFav) {
      props.removeFav(props.id);
      setIsFav(false);
    } else {
      props.addFav(props);
      setIsFav(true);
    }
  };

  useEffect(() => {
    props.myFavorites.forEach((fav) => {
      if (fav.id === props.id) {
        setIsFav(true);
      }
    });
  }, [props.myFavorites, props.id]);

  return (
    <div className={styles.container}>
      <div className={styles.buttonContainer}>
        {isFav ? (
          <button onClick={handleFavorite}>❤️</button>
        ) : (
          <button onClick={handleFavorite}>🤍</button>
        )}
        <button onClick={() => props.onClose(props.id)}>X</button>
      </div>
      <Link to={`/detail/${props.id}`}>
        <div className={styles.dataContainer}>
          <h2>{props.name}</h2>
          <h4>{props.id}</h4>
          <h4>{props.type}</h4>
          <h4>{props.episode}</h4>
          <h4>{props.location}</h4>
          <h4>{props.status}</h4>
          <h4>{props.species}</h4>
          <h4>{props.gender}</h4>
          <h4>{props.origin}</h4>
        </div>
        <img src={props.image} alt="Imagen" />
      </Link>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addFav: (character) => dispatch(addFav(character)),
    removeFav: (id) => dispatch(removeFav(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);


