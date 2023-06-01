import React from "react";
import SearchBar from "../searchBar/SearchBar.jsx";
import { NavLink } from "react-router-dom";
import styles from "./Nav.module.css";
import Rick1 from "../assets/Img/Rick1.png"




export default function Nav(props) {
    const onSearch = props.onSearch;

    return(
        <div 
        className={styles.button2}>
            <img 
            className={styles.img} src={Rick1} alt="Rick1"/> 

            <NavLink 
            className={styles.button2} to="/home">
            Home
            </NavLink>

            <NavLink 
            className={styles.button2} to="/About">
            About
            </NavLink>

            <NavLink 
            className={styles.button2} to="/Favorites" >
            Favotires
            </NavLink>
            
            <NavLink 
            className={styles.button2} to="/">
            Logout
            </NavLink>

          
            <NavLink 
            className={styles.button2} >
            <SearchBar 
            className={styles.form} 
            onSearch={props.onSearch} />
            </NavLink>

        </div>
    )
}
