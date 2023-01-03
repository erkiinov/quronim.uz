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
      <div className="buttons">
        <Link to={"/surah/"}>
          <h2 className="button-link">Qur'on</h2>
        </Link>
        <Link to={"/taqvim/"}>
          <h2 className="button-link">Namoz Vaqtlari</h2>
        </Link>
      </div>
    </div>
  );
};

export default GoSurah;
