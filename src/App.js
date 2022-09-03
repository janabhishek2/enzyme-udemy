import "./App.css";
import Counter from "./components/counter/counter";
import DecrementCounter from "./components/DecrementCounter/DecrementCounter";

function App() {
  return (
    <div className="App" data-test="component-app">
		<Counter />
		<DecrementCounter />
    </div>
  );
}

export default App;
