import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function OneCountry() {
  let { code } = useParams();
  const [country, setCountry] = useState({});
  useEffect(() => {
    fetch(`https://restcountries.com/v2/alpha/${code}`)
      .then((res) => res.json())
      .then((date) => setCountry(date));
  }, [code]);
  return (
    <div
      style={{
        border: "1px solid black",
        padding: "10px",
        width: "400px",
        height: "370px",
        borderRadius: "20px",
        marginBottom: "20px",
      }}
    >
      <img src={country.flag} alt={country.name} width="200px" />
      <h1> {country.name} </h1>
      <h3>{country.area} </h3>
      <p> {country.capital} </p>
      <p> {country.population} </p>
    </div>
  );
}
