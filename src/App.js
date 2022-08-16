import "./App.css";
import Hero from "./components/hero";

import { Routes, Route } from "react-router-dom";
import Couples from "./components/couples";

import Gallery from "./components/gallery";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Hero />}></Route>
        <Route path="/the-couples" element={<Couples />}></Route>
        <Route path="/gallery" element={<Gallery />}></Route>
      </Routes>
    </div>
  );
}

export default App;
