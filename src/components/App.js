import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const [appClass, setAppClass] = useState(true)
  
  function handleClick(){
    const newAppClass = appClass === false ? true : false;
    setAppClass(newAppClass)
  }
  const color = appClass === false ? "App dark" : "App light"
  return (
    <div className={color}>
      <header>
        <h2>Shopster</h2>
        <button onClick = {handleClick}>{appClass === false? "Dark Mode" : "Light Mode"}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
