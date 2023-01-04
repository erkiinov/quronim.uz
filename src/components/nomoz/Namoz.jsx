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
          <span>{timing.tong_saharlik}</span>
        </li>
        <hr />
        <li>
          <span>Quyosh chiqishi</span>
          <span>{timing.quyosh}</span>
        </li>
        <hr />
        <li>
          <span>Peshin</span>
          <span>{timing.peshin}</span>
        </li>
        <hr />
        <li>
          <span>Asr</span>
          <span>{timing.asr}</span>
        </li>
        <hr />
        <li>
          <span>Shom</span>
          <span>{timing.shom_iftor}</span>
        </li>
        <hr />
        <li>
          <span>Xufton</span>
          <span>{timing.hufton}</span>
        </li>
      </ul>
    </div>
  );
};

export default Namoz;
