import React from "react";
import SearchBar from "../searchBar/SearchBar";
import Rick1 from "../nav/img/Rick1.png"

export default function Nav(props) {
    return (
        <div>
            <img style ={{height: '350px' }}src={Rick1} alt="Rick and Morty" />
            <SearchBar onSearch={props.onSearch} />
        </div>
    );
}
