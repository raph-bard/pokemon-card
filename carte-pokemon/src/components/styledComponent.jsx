import styled from "styled-components";

const Container = styled.div`
  width: 358px;
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
        <div
          className="pokemon-image"
          style={{ backgroundImage: `url('src/assets/${pokemon.id}.jpg')`}}
        ></div>
        <figcaption>
          {pokemon.figDescr}. Taille: {pokemon.figHeight} m, poids:{" "}
          {pokemon.figWeight} kg
        </figcaption>
      </figure>
      <div className="attack-block">
        <div className="attack attack-1 attack-only">
          <div className="nrj-block">
            {pokemon.talent == true ? "" : <i className="nrj nrj-normal"></i>}
          </div>
          {pokemon.talent !== true ? (
            <h2>{pokemon.atck1Name}</h2>
          ) : (
            pokemon.atck1Name
          )}
          <span>{pokemon.atck1Strength}</span>
        </div>
        <div className="attack attack-2">
          <div className="nrj-block">
            <i className="nrj nrj-feu"></i>
            <i className="nrj nrj-normal"></i>
          </div>
          <h2>
            {pokemon.atck2Name} {pokemon.atck2Descr}
          </h2>
          <span>{pokemon.atck2Strength}</span>
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
        {pokemon.descrText}. NIV.{pokemon.descrNiv} No.{pokemon.descrNo}
      </p>
    </Container>
  );
};

export default StyledComponents;
