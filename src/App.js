import "./styles/styles.css";
import React, { useMemo, useState, useRef, useCallback } from "react";
import Feedback from './components/Feedback';
import Search from './components/Search';
export default function App() {
  console.log("App rendered");
  return (
    <div className="App">
      <Feedback/>
    </div>
  );
}
