import { useState, useEffect } from "react";
import "../css/Exercise2.css";

function Exercise2() {
  const neutralTheme = {
    backgroundColor: "white",
    color: "black",
  };

  const darkTheme = {
    backgroundColor: "black",
    color: "white",
  };

  const lightTheme = {
    backgroundColor: "yellow",
    color: "black",
  };

  const [theme, setTheme] = useState(neutralTheme);

  function changeTheme(theme) {
    setTheme(theme);
  }

  useEffect(() => {
    const body = document.body;
    body.style.backgroundColor = theme.backgroundColor;
    body.style.color = theme.color;
  }, [theme]);

  return (
    <div className="App-div">
      <div className="App-div2">
        <button
          onClick={() => {
            changeTheme(neutralTheme);
          }}
        >
          neutralTheme
        </button>
        <button
          onClick={() => {
            changeTheme(darkTheme);
          }}
        >
          darkTheme
        </button>
        <button
          onClick={() => {
            changeTheme(lightTheme);
          }}
        >
          lightTheme
        </button>
      </div>
      <div style={theme}>TEXT</div>
    </div>
  );
}

export default Exercise2;
