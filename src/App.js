import "./App.css";
import Hero from "./components/hero";
import Registry from "./components/registry";
import Facts from "./components/facts";
import Gallery from "./components/gallery";

function App() {
  return (
    <div className="App">
      <Hero />
      <Gallery/>
      <Registry />
      <Facts />
    </div>
  );
}

export default App;
