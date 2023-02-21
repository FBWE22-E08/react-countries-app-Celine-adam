import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import AllCountries from "./components/views/AllCountries";
import ByName from "./components/views/ByName";
import ByRegion from "./components/views/ByRegion";
import NotFound from "./components/NotFound";
import OneCountry from "./components/OneCountry";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<AllCountries />} />
        <Route path="/byName" element={<ByName />} />
        <Route path="/byRegion" element={<ByRegion />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/country/:code" element={<OneCountry />} />
      </Routes>
    </div>
  );
}

export default App;
