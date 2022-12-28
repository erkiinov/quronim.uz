import React from "react";
import "./Surah.scss";
import { Link } from "react-router-dom";

const Surah = ({ id, name }) => {
  return (
    <li className="surah-uni" key={id}>
      <Link className="LINK" to={`/surah/${id}`}>
        {id} &nbsp;
        {name}
      </Link>
    </li>
  );
};

export default Surah;
