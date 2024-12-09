/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import "./Card.css";

const Card = ({ country }) => {
  const navigate = useNavigate();
  const { name, flags, population, region, capital } = country;

  return (
    <div className="card">
      <img src={flags.svg} alt={name.common} />
      <div className="card-content">
        <h3>{name.common}</h3>
        <p>Population: {population}</p>
        <p>Region: {region}</p>
        <p>Capital: {capital}</p>
        <button onClick={() => navigate(`/${name.common}`)}>More Details</button>
      </div>
    </div>
  );
};

export default Card;