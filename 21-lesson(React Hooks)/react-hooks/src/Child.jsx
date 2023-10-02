import { useData } from "./Form";

function Child() {
  const { data, randomData } = useData();

  return (
    <div>
      {data.name ? (
        <div>
          <div>Current name: {data.name}</div>
          <div>Current password: {data.password}</div>
        </div>
      ) : (
        <button onClick={randomData}>Set random data</button>
      )}
    </div>
  );
}

export default Child;
