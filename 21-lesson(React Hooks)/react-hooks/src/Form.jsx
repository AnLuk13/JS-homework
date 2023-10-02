import {
  useRef,
  useState,
  useEffect,
  useContext,
  createContext,
  useMemo,
} from "react";
import Child from "./Child";

const DataContext = createContext();

function Form() {
  const [data, setData] = useState({
    name: "",
    password: "",
  });

  const [number, setNumber] = useState(0);

  const changeNumber = () => {
    setNumber((prevNumber) => prevNumber + 1); // or setNumber(number + 1);
  };

  const message = useMemo(() => {
    return changeValue(number);
  }, [number]);

  useEffect(() => {
    console.log("Hello user");
  }, []);

  const nameRef = useRef();
  const passRef = useRef();

  const nameHandler = (event) => {
    setData((prevData) => {
      console.log(prevData);
      return { ...prevData, name: event.target.value };
    });
  };

  const passHandler = (event) => {
    setData((prevData) => {
      return { ...prevData, password: event.target.value };
    });
  };

  const focus = (inputField) => {
    if (inputField === "name") {
      nameRef.current.focus();
    } else passRef.current.focus();
  };

  function formSubmit(event) {
    event.preventDefault();
    console.log(data);
  }

  function randomData() {
    setData({ name: "Antonio", password: "1234" });
  }

  return (
    <DataContext.Provider value={{ data, randomData }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          width: "50%",
          alignItems: "center",
        }}
      >
        <button style={{ width: "50%" }} onClick={() => focus("name")}>
          Name reference
        </button>
        <button style={{ width: "50%" }} onClick={() => focus("password")}>
          Password reference
        </button>
        <form
          style={{ display: "flex", flexDirection: "column", gap: "10px" }}
          onSubmit={formSubmit}
        >
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            value={data.name}
            onChange={nameHandler}
            ref={nameRef}
          />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            value={data.password}
            onChange={passHandler}
            ref={passRef}
          />
          <button type="submit">Submit</button>
          <Child></Child>
          <div>
            <div>{message}</div>
            <button onClick={changeNumber}>+1</button>
          </div>
        </form>
      </div>
    </DataContext.Provider>
  );
}

export default Form;

export function useData() {
  return useContext(DataContext);
}

function changeValue(number) {
  let result = 0;
  for (let index = 0; index < 1000000000; index++) {
    result += 1;
  }
  return `The current number is ${number}`;
}
