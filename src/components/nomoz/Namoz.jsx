import React from "react";
import "./Namoz.scss";

const month = [
  "",
  "Muharram",
  "Safar",
  "Rabbiyul avval",
  "Rabbiyul axir",
  "Jumadil avval",
  "Jumadil axir",
  "Rojab",
  "Shaban",
  "Ramadan",
  "Shavval",
  "Zul qada",
  "Zul hijja",
];

const month2 = [
  "",
  "Yanvar",
  "Fevral",
  "Mart",
  "Aprel",
  "May",
  "Iyun",
  "Iyul",
  "Avgust",
  "Sentyabr",
  "Oktyabr",
  "Nayabr",
  "Dekabr",
];

const Namoz = ({ date, timing }) => {
  return (
    <div className="namoz-uni">
      <div className="title-namoz">
        <h1>
          {date?.hijri?.day}&nbsp;
          {month[date?.hijri?.month?.number]}, {date?.hijri?.year}
        </h1>
        <h2>
          {date?.gregorian?.day}&nbsp;
          {month2[date?.gregorian?.month?.number]}, {date?.gregorian?.year}
        </h2>
      </div>
      <ul>
        <li>
          <span>Bomdot</span>
          <span>{timing.Fajr}</span>
        </li>
        <hr />
        <li>
          <span>Quyosh chiqishi</span>
          <span>{timing.Sunrise}</span>
        </li>
        <hr />
        <li>
          <span>Peshin</span>
          <span>{timing.Dhuhr}</span>
        </li>
        <hr />
        <li>
          <span>Asr</span>
          <span>{timing.Asr}</span>
        </li>
        <hr />
        <li>
          <span>Shom</span>
          <span>{timing.Maghrib}</span>
        </li>
        <hr />
        <li>
          <span>Xufton</span>
          <span>{timing.Isha}</span>
        </li>
      </ul>
    </div>
  );
};

export default Namoz;
