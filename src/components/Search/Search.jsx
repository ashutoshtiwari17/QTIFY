import "./Search.css"
import React, { useMemo, useState, useRef, useCallback } from "react";
import { ReactComponent as SearchIcon } from "../../assets/search_icon.svg";


export default function Search({placeholder}) {
    const onSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <form className="wrapper" onSubmit={onSubmit}>
            <input required 
            className="search"             
            placeholder={placeholder}>
            </input>
            <button className="searchButton" type="submit">
                <SearchIcon/>
            </button>
        </form>
    );
  }