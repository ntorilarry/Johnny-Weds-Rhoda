import "./App.css";
import Hero from "./components/hero";

import Couples from "./components/couples";
import Bridesmaid from "./components/bridesmaid";
import Groomsmen from "./components/groomsmen";

function App() {
  return (
    <div className="App">
      <Hero />
      <Couples />
      <Bridesmaid />
      <Groomsmen />
    </div>
  );
}

export default App;
