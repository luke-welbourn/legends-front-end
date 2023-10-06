import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Home from "./Pages/Home/Home";
import ShowLegends from "./Pages/ShowLegends/ShowLegends";
import Create from "./Pages/Create/Create";
import LegendParam from "./Pages/LegendParam/LegendParam";
import { useState, useEffect } from "react";
import { LegendType } from "./Data/Types/Types";

const App = () => {
  const [currentList, setCurrentList] = useState<LegendType[]>([]);

  const getLegends = async () => {
    const response = await fetch("http://localhost:8080/legends?limit=25");
    const legendData = await response.json();
    setCurrentList(legendData);
  };

  useEffect(() => {
    getLegends();
  }, []);

  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/legends" element={<ShowLegends />} />
        <Route path="/legends/create" element={<Create />} />
        <Route
          path="/legends/:id"
          element={<LegendParam legend={currentList} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
