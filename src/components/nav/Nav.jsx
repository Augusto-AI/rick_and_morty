import React from "react";
import SearchBar from "../searchBar/SearchBar.jsx";
import { NavLink } from "react-router-dom";
import styles from "./Nav.module.css";
import Rick1 from "../assets/Img/Rick1.png"




export default function Nav(props) {
    return(
        <div >
            <img className={styles.img} src={Rick1} alt="Rick1"/>   
            <NavLink >
            <SearchBar className={styles.container} onSearch={props.onSearch} />
            </NavLink>

            <NavLink to="/home">
            <button className={styles.button2}>Home</button>
            </NavLink>

            <NavLink to="/About">
            <button className={styles.button2}>About</button>
            </NavLink>

            <NavLink to="/favotires" >
            <button className={styles.button2}>Favotires</button>
            </NavLink>
        </div>
    )
}
