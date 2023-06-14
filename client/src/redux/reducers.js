import { FILTER, ORDER } from "./types";



const initialState = {
  myFavorites: [],
  allCharacters: [],
  errors: false,
};

export default function reducers(state = initialState, action ) {
  switch (action.type) {
    // REDUCER | ADD_FAV
    case "ADD_FAV":
      return { ...state, myFavorites: action.payload, allCharacters: action.payload };

    // REDUCER | REMOVE_FAV
    case "REMOVE_FAV":
      return { ...state, myFavorites: action.payload };

    case FILTER:
      if (action.payload === "all")
        return {
          ...state,
          myFavorites: state.allCharacters,
        };

      const allCharactersCopy = [...state.allCharacters];
      const filteredCharacters = allCharactersCopy.filter(
        (character) => character.gender === action.payload
      );
      return {
        ...state,
        myFavorites: filteredCharacters,
      };

    case ORDER:
      const orderedCharacters = [...state.allCharacters].sort((a, b) => {
        if (action.payload === "A") {
          return a.id - b.id;
        } else if (action.payload === "D") {
          return b.id - a.id;
        }
        return 0;
      });
      return {
        ...state,
        myFavorites: orderedCharacters,
      };
    default:
      return state;
  }
}
