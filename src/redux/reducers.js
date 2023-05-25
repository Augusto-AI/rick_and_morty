import { FILTER, ORDER } from "./types";

const initialState = {
  myFavorites: [],
  allCharacters: [],
};

export default function reducers(
  state = initialState, 
  { type, payload }
  ) {
  switch (type) {
    case 'ADD_FAV':
      return {
        ...state,
        myFavorites: [...state.allCharacters, payload],
        allCharacters: [...state.allCharacters, payload]
      };
    case 'REMOVE_FAV':
      const filteredFav = state.allCharacters.filter(
        fav => fav.id !== Number(payload)
        );
      return {
        ...state,
        myFavorites: filteredFav,
        allCharacters: filteredFav,
      };
    case FILTER:

      if(payload === 'all') return {
        ...state,
        myFavorites: state.allCharacters
      };

      console.log(payload, 'payload')
      console.log(state.allCharacters, 'state.allCharacters')
      console.log(state.allCharacters.filter(character => character.gender === payload), 'filtered')
      // const filteredCharacters = state.allCharacters.filter(character => character.gender === payload);
      // return {
      //   ...state,
      //   myFavorites: filteredCharacters,
      // }
      const allCharactersCopy = [...state.allCharacters];
      const filteredCharacters = allCharactersCopy.filter(
        character => character.gender === payload
        );
      return {
        ...state,
        myFavorites: filteredCharacters,
      };


    case ORDER:

      const orderedCharacters = [...state.allCharacters].sort((a, b) => {
        if (payload === 'A') {
          return a.id - b.id;
        } else if (payload === 'D') {
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
