import "./App.css";
import Hero from "./components/hero";
import Registry from "./components/registry";
import Facts from "./components/bridesmaid";
import Gallery from "./components/gallery";
import Couples from "./components/couples";

function App() {
  return (
    <div className="App">
      <Hero />
      <Couples/>
      {/* <Gallery/> */}
      <Registry />
      <Facts />
    </div>
  );
}

export default App;
