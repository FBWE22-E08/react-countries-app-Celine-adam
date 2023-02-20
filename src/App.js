import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import AllCountries from "./components/views/AllCountries";
import ByName from "./components/views/ByName";
import ByRegion from "./components/views/ByRegion";
import NotFound from "./components/NotFound";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<AllCountries />} />
        <Route path="/byName" element={<ByName />} />
        <Route path="/byRegion" element={<ByRegion />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
