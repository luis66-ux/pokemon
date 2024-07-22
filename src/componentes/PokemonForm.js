import React, { useState } from 'react';

const PokemonForm = ({ addPokemon }) => {
  const [name, setName] = useState("");
  const [type, setType] = useState("Normal");
  const [secondType, setSecondType] = useState("Ninguno");
  const [level, setLevel] = useState(1);
  const [evolution, setEvolution] = useState(false);
  const [megaEvolution, setMegaEvolution] = useState(false);
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const pokemon = { name, type, secondType, level, evolution, megaEvolution, date };
    addPokemon(pokemon);
    setName("");
    setType("Normal");
    setSecondType("Ninguno");
    setLevel(1);
    setEvolution(false);
    setMegaEvolution(false);
    setDate("");
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="form-group">
        <label htmlFor="name">Nombre</label>
        <input
          type="text"
          id="name"
          className="form-control"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="type">Primer tipo</label>
        <select
          id="type"
          className="form-control"
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option value="Normal">Normal</option>
          <option value="Planta">Planta</option>
          <option value="Agua">Agua</option>
          <option value="Fuego">Fuego</option>
          <option value="Eléctrico">Eléctrico</option>
          <option value="Bicho">Bicho</option>
          <option value="Volador">Volador</option>
          <option value="Fantasma">Fantasma</option>
          <option value="Hielo">Hielo</option>
          <option value="Lucha">Lucha</option>
          <option value="Acero">Acero</option>
          <option value="Psíquico">Psíquico</option>
          <option value="Roca">Roca</option>
          <option value="Tierra">Tierra</option>
          <option value="Siniestro">Siniestro</option>
          <option value="Veneno">Veneno</option>
          <option value="Hada">Hada</option>
          <option value="Dragón">Dragón</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="secondType">Segundo tipo (Optional)</label>
        <select
          id="secondType"
          className="form-control"
          value={secondType}
          onChange={(e) => setSecondType(e.target.value)}
        >
          <option value="Ninguno">Ninguno</option>
          <option value="Normal">Normal</option>
          <option value="Planta">Planta</option>
          <option value="Agua">Agua</option>
          <option value="Fuego">Fuego</option>
          <option value="Eléctrico">Eléctrico</option>
          <option value="Bicho">Bicho</option>
          <option value="Volador">Volador</option>
          <option value="Fantasma">Fantasma</option>
          <option value="Hielo">Hielo</option>
          <option value="Lucha">Lucha</option>
          <option value="Acero">Acero</option>
          <option value="Psíquico">Psíquico</option>
          <option value="Roca">Roca</option>
          <option value="Tierra">Tierra</option>
          <option value="Siniestro">Siniestro</option>
          <option value="Veneno">Veneno</option>
          <option value="Hada">Hada</option>
          <option value="Dragón">Dragón</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="level">Nivel</label>
        <input
          type="number"
          id="level"
          className="form-control"
          value={level}
          onChange={(e) => setLevel(Number(e.target.value))}
          min="1"
        />
      </div>
      <div className="form-group">
        <label htmlFor="evolution">Evolución</label>
        <input
          type="checkbox"
          id="evolution"
          checked={evolution}
          onChange={(e) => setEvolution(e.target.checked)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="megaEvolution">Mega Evolución</label>
        <input
          type="checkbox"
          id="megaEvolution"
          checked={megaEvolution}
          onChange={(e) => setMegaEvolution(e.target.checked)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="date">Fecha de captura</label>
        <input
          type="date"
          id="date"
          className="form-control"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-primary">Añadir Pokémon</button>
    </form>
  );
};

export default PokemonForm;