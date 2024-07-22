import React, { useState, useEffect } from 'react';
import PokemonForm from "./componentes/PokemonForm";
import PokemonList from "./componentes/PokemonList";

const App = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const savedPokemons = JSON.parse(localStorage.getItem("pokemons")) || [];
    setPokemons(savedPokemons);
  }, []);

  const addPokemon = (pokemon) => {
    const updatedPokemons = [...pokemons, pokemon];
    setPokemons(updatedPokemons);
    localStorage.setItem("pokemons", JSON.stringify(updatedPokemons));
  };

  const deletePokemon = (name) => {
    const updatedPokemons = pokemons.filter(p => p.name !== name);
    setPokemons(updatedPokemons);
    localStorage.setItem("pokemons", JSON.stringify(updatedPokemons));
  };

  return (
    <div className="container mt-4">
      <h1>Registra tu Pokémon</h1>
      <PokemonForm addOrUpdatePokemon={addPokemon} />
      <PokemonList pokemons={pokemons} deletePokemon={deletePokemon} />
    </div>
  );
};

export default App;