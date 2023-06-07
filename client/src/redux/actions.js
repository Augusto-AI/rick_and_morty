import { FILTER, ORDER } from "./types";
import axios from "axios";
import { addFav, removeFav } from "./types";

const ENDPOINT = "http://localhost:3001/rickandmorty/fav";

// ACTION | addFav
export const addFav = (character) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post(ENDPOINT, character);
      return dispatch({
        type: 'ADD_FAV',
        payload: data,
      });
    } catch (error) {
      return dispatch({
        type: "ERROR",
        payload: error.message,
      });
    }
  };
};

// ACTION | removeFav
export const removeFav = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.delete(`${ENDPOINT}/${id}`);
      return dispatch({
        type: 'REMOVE_FAV',
        payload: data,
      });
    } catch (error) {
      return dispatch({
        type: "ERROR",
        payload: error.message,
      });
    }
  };
};

export function filterCards(gender) {
  return {
    type: FILTER,
    payload: gender,
  };
}

export function orderCards(order) {
  return {
    type: ORDER,
    payload: order,
  };
}
