import styles from "./Logo.css";
import React, { useMemo, useState, useRef, useCallback } from "react";
import HeadPhone from "../../assets/logo.png";
export default function Logo({children}) {

    return (
        <img src={HeadPhone} alt="logo" width={67} height={34}/>
    );
  }