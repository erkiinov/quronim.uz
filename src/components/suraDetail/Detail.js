import React, { useRef } from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./detail.scss";

const Detail = ({ textAr, textUz, audio, order }) => {
  const [count, setCount] = useState(1);

  const audioRef = useRef(null);
  const refFun = () => {
    setCount(count + 1);
    if (count % 2 === 0) {
      audioRef.current.pause();
    } else if (count % 2 === 1) {
      audioRef.current.play();
    }
  };
  return (
    <div className="Detail-uni" onClick={refFun}>
      <audio src={audio} ref={audioRef} controls></audio>
      <h3 className="order">{order}</h3>
      <p className="sura-p">{textUz}</p>
      <h1 className="sura-h">{textAr}</h1>
      <p>🔉</p>
      <img
        src="https://www.quronim.uz/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbg2.a8b3a2d7.png&w=256&q=75"
        alt=""
      />
    </div>
  );
};

export default Detail;
