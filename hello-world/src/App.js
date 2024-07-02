import logo from "./logo.svg";
import "./App.css";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import Hello from "./components/Hello";
import Message from "./components/Message";

function App() {
  return (
    <div className="App">
      {/* <Greet name="dog">
        <p>This is children props</p>
      </Greet>
      <Greet name="cat" />

      <Welcome /> */}
      {/* <Hello /> */}
      <Message />
    </div>
  );
}

export default App;
