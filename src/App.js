import "./App.css";
import Hero from "./components/hero";
import Registry from "./components/registry";
import Facts from "./components/facts";
import Navbar from "./components/navbar";

function App() {
  return (
    <div className="App">
      <Hero />
      <Registry />
      <Facts />
    </div>
  );
}

export default App;
