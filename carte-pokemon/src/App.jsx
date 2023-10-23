import { useState } from "react";
import "./App.css";
import StyledComponent from "./components/styledComponent";

const pokemonProperties = [
  "id",
  "name",
  "evo",
  "evoId",
  "type",
  "pv",
  "figDescr",
  "figHeight",
  "figWeight",
  "talent",
  "atck1Name",
  "atck1Strength",
  "atck2Name",
  "atck2Descr",
  "atck2Strength",
  "descrText",
  "descrNiv",
  "descrNo",
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
    0,
    "feu",
    50,
    "Pokémon Lézard",
    0.6,
    8.5,
    false,
    "Griffe",
    10,
    "Flamèche",
    (
      <p>
        Défaussez 1 carte énergie <i className="nrj nrj-feu"></i> attachée à
        Salamèche pour pouvoir utiliser cette attaque.
      </p>
    ),
    30,
    "Il préfère les endroits chauds. En cas de pluie, de la vapeur se forme  autour de sa queue",
    10,
    4,
  ),
  new StarterFeu(
    "reptincel",
    "Reptincel",
    "Salamèche",
    1,
    "feu",
    80,
    "Pokémon Flamme",
    1.1,
    19,
    false,
    "Tranche",
    30,
    "Lance-flamme",
    (
      <p>
        Défaussez 1 carte énergie <i className="nrj nrj-feu"></i> attachée à
        Reptince pour pouvoir utiliser cette attaque.
      </p>
    ),
    50,
    "En agitant sa queue, il peut élever le niveau de la température à un degré incroyable",
    32,
    5,
  ),
  new StarterFeu(
    "dracaufeu",
    "Dracaufeu",
    "Reptincel",
    2,
    "feu",
    120,
    "Pokémon Flamme",
    1.7,
    90.5,
    true,
    (
      <p className="talent">
        <b className="blue-color">Pouvoir Pokémon : Combustion d'énergie</b>{" "}
        Vous pouvez transformer toutes les énergies attachées à votre Dracaufeu
        en énergies <i className="nrj nrj-feu"></i>. Ce pouvoir ne peut être
        utilisé si Dracaufeu est Endormi, Confus ou Paralysé.
      </p>
    ),
    null,
    "Danseflamme",
    (
      <p>
        Défaussez 2 cartes énergies attachées à Dracaufeu pour pouvoir utiliser
        cette attaque.
      </p>
    ),
    100,
    "Il peut fendre la roche de son souffle brûlant. Il est souvent la cause de nombreux incendies",
    76,
    6,
  ),
];
const pokemonCardsEau = [
  new StarterEau(
    "carapuce",
    "Carapuce",
    null,
    0,
    "eau",
    40,
    "Pokémon MiniTortue",
    0.5,
    9,
    false,
    "Ecume",
    10,
    "Repli",
    (
      <p>
        Lancez une pièce. Si c'est face, prévenez tous les dégats infligés à
        Carapuce pendant le prochain tour de votre adversaire (Tout autre effet
        ou attaque est toujours valide.)
      </p>
    ),
    null,
    "Son dos durcit avec l'âge et devient une super carapace. Il peut cracher des jets d'écumes",
    8,
    1,
  ),
  new StarterEau(
    "carabaffe",
    "Carabaffe",
    "Carapuce",
    1,
    "eau",
    70,
    "Pokémon Tortue",
    1,
    22.5,
    false,
    "Morsure",
    40,
    "Repli",
    (
      <p>
        Lancez une pièce. Si c'est face, prévenez tous les dégats infligés à
        Carapuce pendant le prochain tour de votre adversaire (Tout autre effet
        ou attaque est toujours valide.)
      </p>
    ),
    null,
    "Il se cache au fond de l'eau pour guetter sa proie. Ses oreilles sont des gouvernails",
    22,
    8
  ),
  new StarterEau(
    "tortank",
    "Tortank",
    "Carabaffe",
    2,
    "eau",
    100,
    "Pokémon Carapace",
    1.6,
    85.5,
    true,
    (
      <p className="talent">
        <b className="red-color">Pouvoir Pokémon : Danse de la pluie</b> Vous
        pouvez attacher 1 carte énergie <i className="nrj nrj-eau"></i> à 1 de
        vos pokemon. Ce pouvoir ne peut être utilisé si Tortank est Endormi,
        Confus ou Paralysé.
      </p>
    ),
    null,
    "Hydrocanon",
    (
      <p>
        Inflige 40 dégats plus 10 dégats supplémentaires pour chaque attaque
        énergie <i className="nrj nrj-eau"></i> attachée à Tortank.
      </p>
    ),
    100,
    "Un Pokémon brutal armé de canons hydrauliques. Ses puissants jets d'eau sont dévastateurs",
    52,
    9
  ),
];
const pokemonCardsPlante = [
  new StarterPlante(
    "bulbizarre",
    "Bulbizarre",
    null,
    0,
    "plante",
    40,
    "Pokémon Graine",
    0.7,
    6.9,
    false,
    "Fouet Lianes",
    10,
    "Tranch'Herbe",
    null,
    20,
    "Il a une étrange graine plantée sur son dos. Elle grandit avec lui depuis la naissance",
    13,
    1
  ),
  new StarterPlante(
    "herbizarre",
    "Herbizarre",
    "Bulbizarre",
    1,
    "plante",
    70,
    "Pokémon Graine",
    1.0,
    13.0,
    false,
    "Fouet Lianes",
    30,
    "Poudre Toxik",
    <p> Le Pokémon Défenseur est maintenant Empoisonné</p>,
    20,
    "Son bulbe dorsal devient si gros qu'il ne peut plus se tenir sur ses membres postérieurs",
    20,
    2
  ),
  new StarterPlante(
    "florizarre",
    "Florizarre",
    "Herbizarre",
    2,
    "plante",
    100,
    "Pokémon Graine",
    2.0,
    100,
    true,
    (
      <p className="talent">
        <b className="red-color">Pouvoir Pokémon : Transfert d'énergie</b> Vous
        pouvez prendre 1 carte énergie <i className="nrj nrj-plante"></i> à 1 de
        vos pokemon et l'attacher à un autre. Ce pouvoir ne peut être utilisé si Tortank est Endormi, Confus ou Paralysé.
      </p>
    ),
    null,
    "Lance-Soleil",
    null,
    60,
    "Sa plante mûrit en absorbant les rayons du soleil. Il migre souvent vers les endroits ensoleillés",
    67,
    3
  ),
];

function App() {
  const [pokemonCard, setPokemonCard] = useState(pokemonCardsPlante);

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
          <StyledComponent key={pokemon.id} {...pokemon} />
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
