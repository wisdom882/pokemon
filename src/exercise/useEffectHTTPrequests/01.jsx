// useEffect: HTTP requests

import * as React from 'react'
// 🐨 you'll want the following additional things from '../pokemon':
// fetchPokemon: the function we call to get the pokemon info
// PokemonInfoFallback: the thing we show while we're loading the pokemon info
// PokemonDataView: the stuff we use to display the pokemon info

import {fetchPokemon , PokemonForm , PokemonInfoFallback , PokemonDataView} from '../../utils/pokemon'

import { WorkShopNote } from '../../reusables/workshop-note'
import file from './01.md'

function PokemonInfo({pokemonName}) {
    // 🐨 Have state for the pokemon (null)
      const [pokemon, setPokemon] = React.useState(null)
    // 🐨 use React.useEffect where the callback should be called whenever the
    // pokemon name changes.
    React.useEffect(() => {
      if(!pokemonName){
        return
      }
      setPokemon(null)
      fetchPokemon(pokemonName).then(pokemonData => {setPokemon(pokemonData)}, (error) => console.log(error))
    }, [pokemonName]);

    if(!pokemonName){
        return `Submit a pokemon`
    }
    else if(pokemonName && !pokemon){
      return <PokemonInfoFallback name={pokemonName} />
    }
    else if(pokemon){
      return <PokemonDataView pokemon={pokemon} />
    }
    
    
  }

  function PokemonApp() {
    const [pokemonName, setPokemonName] = React.useState('')
  
    function handleSubmit(newPokemonName) {
      setPokemonName(newPokemonName)
    }
  
    return (
      <div className="pokemon-info-app">
        <PokemonForm pokemonName={pokemonName} onSubmit={handleSubmit} />
        <hr />
        <div className="pokemon-info">
          <PokemonInfo pokemonName={pokemonName} />
        </div>
      </div>
    )
  }


  function App() {
    return (
      <div className="grid-container">
          <WorkShopNote file={file} />
          <PokemonApp />
      </div>
     
    )
  }
  
  export default App
