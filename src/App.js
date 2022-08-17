import "./App.css";
import Hero from "./components/hero";

import { Routes, Route } from "react-router-dom";
import Couples from "./components/couples";

import Gallery from "./components/gallery";
import Wedparty from "./components/wedparty";
import Registry from "./components/registry";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Hero />}></Route>
        <Route path="/the-couples" element={<Couples />}></Route>
        <Route path="/gallery" element={<Gallery />}></Route>
        <Route path="/wedding-party" element={<Wedparty />}></Route>
        <Route path="/registry" element={<Registry />}></Route>
      </Routes>
    </div>
  );
}

export default App;
