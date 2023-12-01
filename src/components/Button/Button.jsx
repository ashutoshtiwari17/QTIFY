import styles from "./Button.css";
import React, { useMemo, useState, useRef, useCallback } from "react";

export default function Button({children}) {

    return (
        <button className="Button">{children}</button>
    );
  }