import styles from "./Navbar.css";
import React, { useMemo, useState, useRef, useCallback } from "react";
import Search from '../Search/Search.jsx';
import Logo from '../Logo/Logo.jsx';
import Button from '../Button/Button.jsx'

export default function Navbar() {

    return (
        <nav className="navbar">
        <Logo/>
        <Search placeholder="Search an album of your choice"/>
        <Button>Give Feedback</Button>
        </nav>
    );
  }