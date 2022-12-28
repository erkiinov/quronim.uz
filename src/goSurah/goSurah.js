import React from "react";
import { Link } from "react-router-dom";
import "./gosurah.scss";

const GoSurah = () => {
  return (
    <div className="goSurah">
      <img
        src="https://www.pngkit.com/png/full/948-9484856_quran-logo-al-quran.png"
        alt=""
      />
      <Link to={"/surah/"}>
        <h2 className="button-link">Surahs</h2>
      </Link>
    </div>
  );
};

export default GoSurah;
