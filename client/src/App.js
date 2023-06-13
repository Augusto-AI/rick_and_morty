import React, { useState, useEffect } from "react";
import { useNavigate, useLocation, Routes, Route } from "react-router-dom";
import axios from "axios";
import { Form } from "react-router-dom";
import Cards from "../src/components/cards/Cards"

function App() {
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);
  const navigate = useNavigate();

  function login(userData) {
    const { email, password } = userData;
    const URL = "http://localhost:3001/rickandmorty/login/";
    axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
      const { access } = data;
      setAccess(data);
      access && navigate("/home");
    });
  }

  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  const onSearch = async (id) => {
    try {
      const characterId = characters.filter((character) => character.id === id);
      if (characterId.length) return alert("The character already exists!!!");
      if (id < 1 || id > 826)
        return alert("There is no character with this entered ID!");
      const { data } = await axios.get(
        `http://localhost:3001/rickandmorty/character/${id}`
      );
      if (data.name) {
        setCharacters((oldChars) => [...oldChars, data]);
      } else {
        window.alert("No hay personajes con este ID!");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const onClose = (id) => {
    setCharacters(characters.filter((character) => character.id !== id));
  };

  const location = useLocation();

  return (
    <div className="App">
      {location.pathname !== "/" ? <Nav onSearch={onSearch} /> : null}
      <hr />
      <Routes>
        <Route exact path="/" element={<Form login={login} />} />
        <Route
          exact
          path="/home"
          element={
            <Cards
              characters={characters}
              onClose={onClose}
              numberOfCards={characters.length}
            />
          }
        />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/detail/:id" element={<Detail />} />
        <Route
          exact
          path="/favorites"
          element={<Favorites onClose={onClose} />}
        />
      </Routes>
    </div>
  );
}

export default App;
