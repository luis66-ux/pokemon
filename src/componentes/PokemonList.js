import React from 'react';

const PokemonList = ({ pokemons, deletePokemon }) => {
  return (
    <div>
      <h2>Lista de Pokémones</h2>
      <ul className="list-group">
        {pokemons.map((pokemon) => (
          <li key={pokemon.name} className="list-group-item d-flex justify-content-between align-items-center">
            <div>
              <strong>{pokemon.name}</strong> - {pokemon.type} {pokemon.secondType !== 'None' ? `/ ${pokemon.secondType}` : ''} - Nivel: {pokemon.level} - Evolución: {pokemon.evolution ? "Yes" : "No"} - Mega Evolución: {pokemon.megaEvolution ? "Yes" : "No"} - Fecha: {pokemon.date}
            </div>
            <button
              className="btn btn-danger btn-sm"
              onClick={() => deletePokemon(pokemon.name)}
            >
              Eliminar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PokemonList;