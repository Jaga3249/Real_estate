import Header from "./components/Header/Header";
import Hero from "./components/Hero_section/Hero";
import "./App.css";
import Companies from "./components/companies/Companies";
import Residencies from "./components/Ressidencies/Residencies";

function App() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient" />
        <Header />
        <Hero />
      </div>
      <Companies />
      <Residencies />
    </div>
  );
}

export default App;
