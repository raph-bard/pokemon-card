import { useState } from "react";
import "./App.css";
import StyledComponent from "./components/styledComponent";

class Pokemon {
  id;
  pkmName;
  pkmEvo;
  pv;
  figDescr;
  figHeight;
  figWeight;

  constructor(id, pkmName, pkmEvo, pv, figDescr, figHeight, figWeight) {
    this.id = id;
    this.pkmName = pkmName;
    this.pkmEvo = pkmEvo;
    this.pv = pv;
    this.figDescr = figDescr;
    this.figHeight = figHeight;
    this.figWeight = figWeight;
  }
}

class StarterFeu extends Pokemon {
  
  constructor(id, pkmName, pkmEvo, pv, figDescr, figHeight, figWeight) {
    super(id, pkmName, pkmEvo, pv, figDescr, figHeight, figWeight);
  }
}
class StarterEau extends Pokemon {
  constructor(id, pkmName, pkmEvo, pv, figDescr, figHeight, figWeight) {
    super(id, pkmName, pkmEvo, pv, figDescr, figHeight, figWeight);
  }
}
class StarterPlante extends Pokemon {
  constructor(id, pkmName, pkmEvo, pv, figDescr, figHeight, figWeight) {
    super(id, pkmName, pkmEvo, pv, figDescr, figHeight, figWeight);
  }
}

const pokemonCardsFeu = [
  new StarterFeu(
    "salameche",
    "Salamèche",
    null,
    50,
    "Pokémon Lézard",
    0.6,
    8.5
  ),
  new StarterFeu("reptincel", "Reptincel", "Reptincel", 80, "Pokémon Flamme", 1.1, 19),
  new StarterFeu("dracaufeu", "Dracaufeu", "Salamèche", 120, "Pokémon Flamme", 1.7, 90.5),
];
const pokemonCardsEau = [
  new StarterEau("carapuce", "Carapuce", null, 40, "Pokémon MiniTortue", 0.5, 9),
  new StarterEau("carabaffe", "Carabaffe", "Carapuce", 70, "Pokémon Tortue", 1, 22.5),
  new StarterEau("tortank", "Tortank", "Carabaffe", 100, "Pokémon Carapace", 1.6, 85.5),
];
const pokemonCardsPlante = [
  new StarterPlante("bulbizarre", "Bulbizarre", null, 40, "Pokémon Graine", 0.7, 6.9),
  new StarterPlante("herbizarre", "Herbizarre", "Bulbizarre", 70, "Pokémon Graine", 1.0, 13.0),
  new StarterPlante("florizarre", "Florizarre", "Herbizarre", 100, "Pokémon Graine", 2.0, 100),
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
            pkmId={pokemon.id}
            pkmName={pokemon.pkmName}
            pkmEvo={pokemon.pkmEvo}
            pv={pokemon.pv}
            figDescr={pokemon.figDescr}
            figHeight={pokemon.figHeight}
            figWeight={pokemon.figWeight}
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
