import  { useState, useEffect } from "react";
import axios from "axios";
import Card from "../components/Card";
import "./Home.css";

const Home = () => {
  const [countries, setCountries] = useState([]);
  const [regions, setRegions] = useState([]);
  const [filter, setFilter] = useState("");
  const [sortBy, setSortBy] = useState("");

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((response) => {
      setCountries(response.data);
      setRegions([...new Set(response.data.map((c) => c.region))]);
    });
  }, []);

  const filteredCountries = countries
    .filter((c) => (filter ? c.region === filter : true))
    .sort((a, b) => (sortBy === "population" ? a.population - b.population : 0));

  return (
    <div className="home">
      <div className="filters">
        <select onChange={(e) => setFilter(e.target.value)}>
          <option value="">Filter by Region</option>
          {regions.map((region) => (
            <option key={region} value={region}>
              {region}
            </option>
          ))}
        </select>

        <select onChange={(e) => setSortBy(e.target.value)}>
          <option value="">Sort by</option>
          <option value="population">Population</option>
        </select>
      </div>

      <div className="card-container">
        {filteredCountries.map((country) => (
          <Card key={country.cca3} country={country} />
        ))}
      </div>
    </div>
  );
};

export default Home;