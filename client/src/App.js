import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import About from "./components/about/About.jsx";
import Cards from './components/cards/Cards.jsx';
import Detail from "./components/detail/Detail.jsx";
import Form from "./components/form/Form.jsx";
import Nav from './components/nav/Nav.jsx';
import Favorites from './components/favorites/Favorites.jsx';




function App() {
   const [characters, setCharacters] = useState([]);

   const [access, setAccess] = useState(false);
   const EMAIL = "ejemplo@gmail.com";
   const PASSWORD = "123456";

   const navigate = useNavigate();

   function login(userData) {
      if (userData.password === PASSWORD && userData.email === EMAIL) {
         setAccess(true);
         navigate('/home');
      }
   }

   useEffect(() => {
      !access && navigate('/');
   }, [access]);

   const onSearch = id => { // 2 => {
      const characterID = characters.filter(character => character.id === Number(id));
      console.log(characterID);
      if (characterID.length > 0) return alert ("The character alredy exists")
      if (id < 1 || id > 826) return alert ("¡There is no character with this enteres ID!");
      
      axios (`http://localhost:3001/rickandmorty/character/${id}`)
         .then(({ data }) => {
            // console.log(data);
            if (data.name) {
               setCharacters((oldChars) => [...oldChars, data]);
            } else {
               window.alert('¡No hay personajes con este ID!');
            }
         });
   }
   const onClose = id => {
      setCharacters(characters.filter(caracter =>
         caracter.id !== Number(id)))
   }

   const location = useLocation();
   // console.log(location);

   return (
      <div className='App'>
         {
            location.pathname !== "/"
            ? <Nav onSearch={onSearch}/>
            : null
         }
         <hr />
         <Routes>
            <Route exact path="/" element={<Form login={login} />} />
            <Route exact path="/home" element = {<Cards characters={characters} onClose={onClose} numberOfCards={characters.length}/>} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/detail/:id" element={<Detail />} />
            <Route exact path="/favorites" element={<Favorites onClose={onClose} />} />
         </Routes>
         
      </div>
   );
}
export default App;