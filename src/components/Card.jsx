/* eslint-disable react/prop-types */
import {useNavigate} from "react-router-dom"

function Card({country}) {
    const navigate=useNavigate()
    const {name,flags,population,region,capital}=country

  return (
    <div>
        <img src={flags.svg} alt={name.common} />
        <h3>{name.common}</h3>
        <p>Population:{population}</p>
        <p>Region:{region}</p>
        <p>Capital:{capital}</p>

        <button onClick={()=>navigate(`/${name.common}`)}> More Detail</button>
    </div>
  )
}

export default Card