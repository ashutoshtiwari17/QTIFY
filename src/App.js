import React, { useMemo, useState, useRef, useCallback } from "react";

import Navbar from './components/Navbar/Navbar.jsx';

export default function App() {
  console.log("App rendered");
  return (
    <div className="App">
      <Navbar/>
    </div>
  );
}
