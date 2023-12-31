import "./App.css";

const Counter = () => {
  return (
    <>
      <h1>Counter</h1>
      <button onClick={() => alert("You clicked the button!")}>Click me</button>
      <br />
      <br />
    </>
  );
};

function App() {
  return (
    <div>
      <Counter />
    </div>
  );
}

export default App;
