import axios from "axios";
import React, { useEffect, useState } from "react";

const Api = () => {
  const [api, setApi] = useState([{ text: 0 }]);
  useEffect(() => {
    axios.get("http://api.alquran.cloud/v1/edition/language/ar").then((res) => {
      console.log(res.data.data);
    });
  }, []);
  useEffect(() => {
    axios.get("https://api.alquran.cloud/v1/surah/3/ar.alafasy").then((res) => {
      // console.log(res.data.data);
      setApi(res.data.data);
    });
  }, []);

  return <div>{JSON.stringify(api)}</div>;
};

export default Api;
