import "./App.css";
import SurahAll from "./surahAll/surah-all";
import { Route, Routes } from "react-router-dom";
import DetailAll from "./Detail/DetailAll";
import GoSurah from "./goSurah/goSurah";
import Taqvim from "./taqvim/Taqvim";
import Api from "./api";

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/surah/" element={<SurahAll />} exact />
        <Route path="/" element={<GoSurah />} exact />
        <Route path="/surah/:id" element={<DetailAll />} exact />

        <Route path="/taqvim/" element={<Taqvim />} exact />

        <Route path="/admin/:id" element={<Api />} />
      </Routes>
    </div>
  );
}

export default App;
