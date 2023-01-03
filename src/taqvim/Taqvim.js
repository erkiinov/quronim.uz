import axios from "axios";
import React, { useEffect, useState } from "react";
import Namoz from "../components/nomoz/Namoz";
import Spinner from "../components/Spinner/spinner";
import "./Taqvim.scss";
import { Link } from "react-router-dom";

const Taqvim = () => {
  const [style, setStyle] = useState({ display: "inline-block" });

  const [taqvim, setTaqvim] = useState({
    timings: "",
    date: "",
  });
  useEffect(() => {
    axios
      .get(
        " http://api.aladhan.com/v1/timingsByCity?city=Tashkent&country=Uzbekistan&method=2"
      )
      .then((res) => {
        if (res.status === 200) {
          setStyle({ display: "none" });
          setTaqvim(res.data.data);
        } else {
          setStyle({ display: "inline-block" });
        }
      });
  }, []);
  return (
    <div className="taqvim">
      <Spinner style={style} />
      {style.display === "none" ? (
        <>
          <Namoz timing={taqvim.timings} date={taqvim.date} />
          <Link className="Link" to={"/"}>
            <i className="fa-solid fa-arrow-left"></i>&nbsp;Back
          </Link>
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default Taqvim;
