import "./App.css";
import SurahAll from "./surahAll/surah-all";
import { Route, Routes } from "react-router-dom";
import DetailAll from "./Detail/DetailAll";
import GoSurah from "./goSurah/goSurah";

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/surah/" element={<SurahAll />} exact />
        <Route path="/" element={<GoSurah />} exact />
        <Route path="/surah/:id" element={<DetailAll />} exact />
      </Routes>
    </div>
  );
}

export default App;
