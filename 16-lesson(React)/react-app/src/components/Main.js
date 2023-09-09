import { useState } from "react";
import "../css/Main.css";

function Main() {
  const [name, setName] = useState("");

  function nameHandler(event) {
    setName(event.target.value);
  }

  function displayName() {
    alert(`Hello, ${name}!`);
  }

  return (
    <div className="Main-div">
      <input type="text" value={name} onChange={nameHandler}></input>
      <button onClick={displayName}>Click to see an alert!</button>
    </div>
  );
}
export default Main;
