import './App.css';
import StyledComponent from './components/styledComponent'


const pokemonCard = [
  {
    id: "salameche",
    pkmName: "Salamèche",
    pkmEvo: null,
    pv: 50,
  },
  {
    id: "reptincel",
    pkmName: "Reptincel",
    pkmEvo: "Salamèche",
    pv: 80,
  },
  {
    id: "dracaufeu",
    pkmName: "Dracaufeu",
    pkmEvo: "Reptincel",
    pv: 120,
  }
]

function App() {

  return (
    <div className='d-flex'>
      {pokemonCard.map((pokemon) => (
        <StyledComponent key={pokemon.id} pkmId={pokemon.id} pkmName={pokemon.pkmName} pkmEvo={pokemon.pkmEvo} pv={pokemon.pv}/>
      ))};


    </div>
  )
 


}

export default App
