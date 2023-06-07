

const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character/";

module.exports = async (req, res) => {
    try {
        const { id } = req.params; // { id: 2 }
        const response = await axios.get(URL + id); // response.data = { --- }
        const {
            status, name, species, origin, image, gender
        } = response.data;
            const character = {
            id, status, name, species, origin, image, gender
        }
        return name
            ? res.status(200).json(character) // { --- }
            : res.status(404).send("Not found")

    } catch (error) {
        return res.status(500).send(error.message);
    }


}