import LoginPage from "./components/LoginPage";
import WelcomePage from "./components/WelcomePage";
import { useState } from "react";

function App2() {
  const [myName, setMyName] = useState("");
  const [checkLogin, setCheckLogin] = useState(false);

  const submitHandler = (name) => {
    setMyName(name);
    setCheckLogin(true);
  };

  return (
    <div>
      {checkLogin ? (
        <WelcomePage userName={myName} />
      ) : (
        <LoginPage onLogin={submitHandler} />
      )}
    </div>
  );
}

export default App2;
