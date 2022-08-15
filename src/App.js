import "./App.css";
import Hero from "./components/hero";
import Couples from "./components/couples";
import Bridesmaid from "./components/bridesmaid";
import Groomsmen from "./components/groomsmen";
import Registry from "./components/registry";

function App() {
  return (
    <div className="App">
      <Hero />
      <Couples />
      <Bridesmaid />
      <Groomsmen />
      <Registry/>
    </div>
  );
}

export default App;
