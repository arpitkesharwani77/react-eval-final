import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./CountryDetails.css";

const CountryDetails = () => {
  const { country } = useParams();
  const [details, setDetails] = useState(null);

  useEffect(() => {
    axios.get(`https://restcountries.com/v3.1/name/${country}`).then((response) => {
      setDetails(response.data[0]);
    });
  }, [country]);

  if (!details) return <p>Loading...</p>;

  const { name, subregion, currencies, languages, borders } = details;

  return (
    <div className="country-details">
      <h1>{name.common}</h1>
      <p>Native Name: {Object.values(name.nativeName)[0]?.common}</p>
      <p>Subregion: {subregion}</p>
      <p>Currency: {Object.values(currencies)[0]?.name}</p>
      <p>Languages: {Object.values(languages).join(", ")}</p>
      <p>Borders: {borders?.join(", ") || "None"}</p>
    </div>
  );
};

export default CountryDetails;