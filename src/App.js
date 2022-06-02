import "./App.css";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import People from "./components/people";
import Event from "./components/event"
import Registry from "./components/registry";
import Location from "./components/location";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <People/>
      <Event/>
      <Registry/>
      <Location/>
      <Footer />
    </div>
  );
}

export default App;
