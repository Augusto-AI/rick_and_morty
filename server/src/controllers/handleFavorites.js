// let myFavorites = []; // [ {id: 1}, {id: 3}, ... ]

// const postFav = (req, res) => {
//     myFavorites.push(req.body);
//     return res.status(200).json(myFavorites);
// }

// const deleteFav = (req, res) => {
//     const { id } = req.params;
//     myFavorites = myFavorites.filter(
//         char => char.id !== id
//     )
//     return res.status(200).json(myFavorites);
// }

// module.exports = { postFav, deleteFav };

let myFavorites = [];

const postFav = (req, res) => {
  const character = req.body;
  myFavorites.push(character);
  res.json(myFavorites);
};

const deleteFav = (req, res) => {
  const { id } = req.params;
  myFavorites = myFavorites.filter((character) => character.id !== id);
  res.json(myFavorites);
};

module.exports = { postFav, deleteFav };
