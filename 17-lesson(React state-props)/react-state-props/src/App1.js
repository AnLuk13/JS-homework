import "./App.css";
import Exercise1 from "./components/Exercise1";

function App1() {
  const data = {
    Firstname: "Antonio",
    age: 20,
  };

  return (
    <div className="App">
      <div>
        <h1>
          Data from parent: name: {data.Firstname}, age: {data.age}
        </h1>
      </div>
      <Exercise1 name={data.Firstname} age={data.age}></Exercise1>
    </div>
  );
}

export default App1;
