import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import axios from 'axios'

const Details = () => {
  const navigate = useNavigate()

  const [id, setId] = useState(null)
  const [poke, setPoke] = useState(null)
  
  const onClick = () => {
    if (id) {
      navigate(`/pokemon/${id}`)
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'You must select a pokemon first!',
        
      })
    }
  }

  const onChange = (e) => {
    
    setId(e.target.value)
  }

  useEffect(() => {
    const details = async () => {
        try {
            const response = await axios.get(
                `https://pokeapi.co/api/v2/pokemon/?limit10`
            );
            setPoke(response.data);
        } catch (error) {
            console.error(error);
        }
    };
    details();
}, []);

  return (
    <div className='select-container'>
      <h1>Select a Pokemon</h1>
      <select name="pokemons" id="pokemons" onChange={onChange}>
        <option value="">Select One Pokemon</option>
        {poke?.results?.map((pokemon, i) => (
          <option key={pokemon.name} value={pokemon.name}>
            {pokemon.name}
          </option>
        ))}
        
      </select>
      <button id='details-button' onClick={onClick}>
          View Details
      </button>
    </div>
  )
}

export default Details