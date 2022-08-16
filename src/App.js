import "./App.css";
import Hero from "./components/hero";

import { Routes, Route } from "react-router-dom";
import Couples from "./components/couples";
import Navbar from "./components/navbar";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Hero />}></Route>
        <Route path="/the-couples" element={<Couples />}></Route>
      </Routes>
    </div>
  );
}

export default App;
