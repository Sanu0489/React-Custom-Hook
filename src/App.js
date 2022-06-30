import React, { useState } from "react";
import "./App.css";
import useLocalStorage from "./useLocalStorage";
import useUpdateLoogger from "./useUpdateLogger";

function App() {
  const [name, setName] = useLocalStorage('name', '');
  useUpdateLoogger(name);

  return (
    <div>
      {name}
      <br/>
      <input
        type="text"
        value = {name}
        onChange={e=>setName(e.target.value)}
      />
    </div>
  );
}

export default App;
