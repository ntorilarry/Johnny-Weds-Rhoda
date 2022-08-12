import "./App.css";
import Hero from "./components/hero";
import Registry from "./components/registry";
import Facts from "./components/bridesmaid";
import Couples from "./components/couples";
import Bridesmaid from "./components/bridesmaid";

function App() {
  return (
    <div className="App">
      <Hero />
      <Couples />
      <Bridesmaid />
      <Registry />
      <Facts />
    </div>
  );
}

export default App;
