import { useState } from "react";
import "../css/LoginPage.css";

function loginPage({ onLogin }) {
  const [name, setName] = useState("");

  function nameFunc(event) {
    setName(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();
    onLogin(name);
  }

  return (
    <form className="form" onSubmit={submitHandler}>
      <label>First name:</label>
      <input onChange={nameFunc} type="text"></input>
      <label>Password:</label>
      <input type="password"></input>
      <button type="submit">Submit</button>
    </form>
  );
}

export default loginPage;
