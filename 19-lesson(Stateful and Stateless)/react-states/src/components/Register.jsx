import { useState } from "react";
import register from "./register.module.css";

function Register() {
  const [name, SetName] = useState("");
  const [lastname, SetLastName] = useState("");
  const [password, SetPass] = useState("");

  const [isNameTouched, setIsNameTouched] = useState(false);
  const isNameValid = name.trim() !== "";

  const [isLastNameTouched, setIsLastNameTouched] = useState(false);
  const isLastNameValid = name.trim() !== "";

  const [isPassTouched, setIsPassTouched] = useState(false);
  const isPassValid = password.trim() !== "";

  const isNameInvalid = isNameTouched && !isNameValid;
  const isLastNameInvalid = isLastNameTouched && !isLastNameValid;
  const isPassInvalid = isPassTouched && !isPassValid;

  const nameHandler = (e) => {
    if (e.nativeEvent.data === " ") {
      return;
    }
    SetName(e.target.value);
  };

  const lastNameHandler = (e) => {
    SetLastName(e.target.value);
  };

  const passHandler = (e) => {
    SetPass(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setIsNameTouched(true);
  };

  return (
    <form className={register.form} onSubmit={submitHandler}>
      <label className={register.label} htmlFor="name">
        Name:
      </label>
      <input
        className={register.input}
        type="text"
        name="name"
        onChange={nameHandler}
        onBlur={() => setIsNameTouched(true)}
        value={name}
      />
      {isNameInvalid && <p style={{ color: "red" }}>Cant be empty!</p>}
      <label className={register.label} htmlFor="lastname">
        Lastname:
      </label>
      <input
        className={register.input}
        type="text"
        name="lastname"
        onChange={lastNameHandler}
        onBlur={() => setIsLastNameTouched(true)}
        value={lastname}
      />
      {isLastNameInvalid && <p style={{ color: "red" }}>Cant be empty!</p>}
      <label className={register.label} htmlFor="password">
        Password:
      </label>
      <input
        className={register.input}
        type="password"
        name="password"
        onChange={passHandler}
        onBlur={() => setIsPassTouched(true)}
        value={password}
      />
      {isPassInvalid && <p style={{ color: "red" }}>Cant be empty!</p>}
      <button className={register.submit} type="submit">
        Submit
      </button>
    </form>
  );
}

export default Register;
