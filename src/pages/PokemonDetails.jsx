import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";

const PokemonDetails = () => {
    const [pokemon, setPokemon] = useState([]);
    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const details = async () => {
            try {
                const response = await axios.get(
                    `https://pokeapi.co/api/v2/pokemon/${params.id}`
                );
                setPokemon(response.data);
            } catch (error) {
                console.error(error);
                navigate("/notfound");
                
            }
            
        };
        details();
    }, [params.id, navigate]);


    return (
        pokemon.name && (
            <div id="pokemon-card-container">
                <div className="pokemon-card">
                    <h1>{pokemon.name}</h1>

                    <img
                        src={
                            pokemon.id &&
                            `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`
                        }
                        alt=""
                        id="pokemon-img"
                    />
                    <div className="pokemon-details-info">
                        <p>
                            <span>Height:</span> {pokemon.height}
                        </p>
                        <p>
                            <span>Weight:</span> {pokemon.weight}
                        </p>
                        <p>
                            <span>Base Experience:</span>{" "}
                            {pokemon.base_experience}
                        </p>
                        <p>
                            <span>Type:</span>{" "}
                            {pokemon.types
                                ?.map((type) => type.type.name)
                                .join(", ")}
                        </p>
                    </div>
                </div>
                
                <Link to="/pokemon">
                    <button id="goback-button">
                        Go Back
                    </button>
                </Link>

                
            </div>
        )



       



        
    );
};

export default PokemonDetails;
