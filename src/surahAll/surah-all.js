import React, { useEffect, useState } from "react";
import axios from "axios";
import Surah from "../components/surah/Surah";
import "./Surah-all.scss";
import { Link } from "react-router-dom";
import Spinner from "../components/Spinner/spinner";

const SurahAll = () => {
  const [style, setStyle] = useState({ display: "inline-block" });

  const [api, setApi] = useState([]);
  useEffect(() => {
    axios.get("https://api.alquran.cloud/v1/surah").then((res) => {
      if (res.data.code === 200) {
        setStyle({ display: "none" });
      } else {
        setStyle({ display: "inline-block" });
      }
      setApi(res.data.data);
    });
  }, []);

  return (
    <div className="surahAll">
      <Spinner style={style} />
      <Link className="Link" to={"/"}>
        <i className="fa-solid fa-arrow-left"></i>&nbsp;Back
      </Link>
      <h1 className="quran-title">
        <span>Qur'an</span>&nbsp;
        <span>(القرآن)</span>
      </h1>
      {/* <Link to={"/"} className={"logo"}>
        <img
          src="https://o.remove.bg/downloads/759916c7-cdb7-4f54-9749-032e62d9e1f4/187-1875960_al-quran-icon-png-transparent-png-removebg-preview.png"
          alt=""
        />
      </Link> */}
      {api.map(({ number, englishName }) => (
        <Surah key={number} id={number} name={englishName} />
      ))}
    </div>
  );
};

export default SurahAll;
