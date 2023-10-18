import styled from "styled-components";

const Container = styled.div`
  width: 358px;
  padding: 5px 15px;
  color: black;
  border-radius: 14px;
`;

const StyledComponents = (pokemon) => {
  return (
    <Container className={`pokemon-card type-${pokemon.type}`}>
      <h1 className={`${pokemon.id}`}>
        <b>
          {pokemon.evo === null
            ? "Pokemon de base"
            : `Evolution de ${pokemon.evo}`}
        </b>
        {pokemon.name}
        <i className={`nrj nrj-${pokemon.type}`}></i>
        <span>{pokemon.pv} PV</span>
      </h1>
      <figure>
        <img
          className="pokemon-image"
          src={`src/assets/${pokemon.id}.jpg`}
          alt={pokemon.pkmName}
        />
        <figcaption>
          {pokemon.figDescr}. Taille: {pokemon.figHeight} m, poids:{" "}
          {pokemon.figWeight} kg
        </figcaption>
      </figure>
      <div className="attack-block">
        <div className="attack attack-1 attack-only">
          <div className="nrj-block">
            <i className="nrj nrj-normal"></i>
          </div>
          <h2>Griffe</h2>
          <span>10</span>
        </div>
        <div className="attack attack-2">
          <div className="nrj-block">
            <i className="nrj nrj-feu"></i>
            <i className="nrj nrj-normal"></i>
          </div>
          <h2>
            Flammèche{" "}
            <p>
              Défaussez 1 carte énergie <i className="nrj nrj-feu"></i> attachée
              à Salamèche pour pouvoir utiliser cette attaque.
            </p>
          </h2>
          <span>30</span>
        </div>
      </div>
      <div className="stats-block">
        <h3>
          Faiblesse
          <i
            className={`nrj nrj-${
              pokemon.type === "feu"
                ? "eau"
                : pokemon.type === "eau"
                ? "plante"
                : pokemon.type === "plante"
                ? "feu"
                : "autreType"
            }`}
          ></i>
        </h3>

        <h3>Résistance</h3>
        <h3>
          Coût de retraite<i className="nrj nrj-normal"></i>
        </h3>
      </div>
      <p className="infos-block">
        Il préfère les endroits chauds. En cas de pluie, de la vapeur se forme
        autour de sa queue. NIV.10 No.4
      </p>
    </Container>
  );
};

export default StyledComponents;
