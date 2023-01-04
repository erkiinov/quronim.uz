import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Spinner from "../components/Spinner/spinner";
import Detail from "../components/suraDetail/Detail";
import "./detailAll.scss";

const DetailAll = () => {
  const [style, setStyle] = useState({ display: "inline-block" });

  const [lang, setLang] = useState("uz.sodik");
  const [api1, setApi1] = useState({ ayahs: [] });
  useEffect(() => {
    axios
      .get(`https://api.alquran.cloud/v1/surah/${params.id}/ar.alafasy`)
      .then((res) => {
        if (res.data.code === 200) {
          setStyle({ display: "none" });
        } else {
          setStyle({ display: "inline-block" });
        }
        setApi1(res.data.data);
      });
  }, []);

  const [api2, setApi2] = useState([]);
  useEffect(() => {
    axios
      .get(`https://api.alquran.cloud/v1/surah/${params.id}/${lang}`)
      .then((res) => {
        if (res.data.code === 200) {
          setStyle({ display: "none" });
        } else {
          setStyle({ display: "inline-block" });
        }
        setApi2(res.data.data.ayahs);
      });
  }, [lang]);

  const params = useParams();

  return (
    <div className="DetailAll">
      <Spinner style={style} />
      <Link className="Link" to={"/surah"}>
        <i className="fa-solid fa-arrow-left"></i>&nbsp;Back
      </Link>
      <div className="text-name">
        <h1>
          <span className="uzz">{api1.englishName}</span>&nbsp;
          {api1.name ? <span className="arr">({api1.name})</span> : ""}
        </h1>
      </div>
      {api1.ayahs.map(({ number, numberInSurah, audio, text }, index) => (
        <Detail
          key={number}
          audio={audio}
          textAr={text}
          order={numberInSurah}
          textUz={api2[index]?.text}
        />
      ))}
      <select
        id="select"
        onChange={(e) => {
          if (e.target.value === "Uz") {
            setLang("uz.sodik");
          } else if (e.target.value === "Ru") {
            setLang("ru.kuliev");
          } else if (e.target.value === "En") {
            setLang("en.asad");
          } else if (e.target.value === "Es") {
            setLang("es.asad");
          }
        }}
      >
        <option value="Uz" key="A">
          Uz
        </option>
        <option value="Ru" key="B">
          Ru
        </option>
        <option value="En" key="C">
          En
        </option>
        <option value="Es" key="D">
          Es
        </option>
      </select>
    </div>
  );
};

export default DetailAll;
