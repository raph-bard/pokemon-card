import { useState } from "react";
import "./App.css";
import StyledComponent from "./components/styledComponent";

const pokemonProperties = [
  "id",
  "name",
  "evo",
  "type",
  "pv",
  "figDescr",
  "figHeight",
  "figWeight",
];

class Pokemon {
  constructor(...args) {
    for (let i = 0; i < args.length; i++) {
      this[pokemonProperties[i]] = args[i];
    }
  }
}

class StarterFeu extends Pokemon {
  constructor(...args) {
    super(...args);
  }
}
class StarterEau extends Pokemon {
  constructor(...args) {
    super(...args);
  }
}
class StarterPlante extends Pokemon {
  constructor(...args) {
    super(...args);
  }
}

const pokemonCardsFeu = [
  new StarterFeu(
    "salameche",
    "Salamèche",
    null,
    "feu",
    50,
    "Pokémon Lézard",
    0.6,
    8.5
  ),
  new StarterFeu(
    "reptincel",
    "Reptincel",
    "Reptincel",
    "feu",
    80,
    "Pokémon Flamme",
    1.1,
    19
  ),
  new StarterFeu(
    "dracaufeu",
    "Dracaufeu",
    "Salamèche",
    "feu",
    120,
    "Pokémon Flamme",
    1.7,
    90.5
  ),
];
const pokemonCardsEau = [
  new StarterEau(
    "carapuce",
    "Carapuce",
    null,
    "eau",
    40,
    "Pokémon MiniTortue",
    0.5,
    9
  ),
  new StarterEau(
    "carabaffe",
    "Carabaffe",
    "Carapuce",
    "eau",
    70,
    "Pokémon Tortue",
    1,
    22.5
  ),
  new StarterEau(
    "tortank",
    "Tortank",
    "Carabaffe",
    "eau",
    100,
    "Pokémon Carapace",
    1.6,
    85.5
  ),
];
const pokemonCardsPlante = [
  new StarterPlante(
    "bulbizarre",
    "Bulbizarre",
    null,
    "plante",
    40,
    "Pokémon Graine",
    0.7,
    6.9
  ),
  new StarterPlante(
    "herbizarre",
    "Herbizarre",
    "Bulbizarre",
    "plante",
    70,
    "Pokémon Graine",
    1.0,
    13.0
  ),
  new StarterPlante(
    "florizarre",
    "Florizarre",
    "Herbizarre",
    "plante",
    100,
    "Pokémon Graine",
    2.0,
    100
  ),
];

function App() {
  const [pokemonCard, setPokemonCard] = useState(pokemonCardsFeu);

  const switchStarter = () => {
    if (pokemonCard === pokemonCardsFeu) {
      setPokemonCard(pokemonCardsEau);
    } else if (pokemonCard === pokemonCardsEau) {
      setPokemonCard(pokemonCardsPlante);
    } else {
      setPokemonCard(pokemonCardsFeu);
    }
  };

  return (
    <div>
      <div className="d-flex">
        {pokemonCard.map((pokemon) => (
          <StyledComponent
            key={pokemon.id}
            {...pokemon}
          />
        ))}
      </div>
      <div className="d-flex">
        <button className="switch-starter" onClick={switchStarter}>
          Switch Starter
        </button>
      </div>
    </div>
  );
}

export default App;
