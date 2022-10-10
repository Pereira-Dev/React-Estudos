import React from 'react';
import './App.css';
import Else from './Components/If Else/Else';
import Listaarray from './Components/Listas Array/Lista';
import ConditionalRender from './Components/RenderCondicional/Render';
import CarDetails from './Components/Reutilizar_Componentes/Reuti';
import Data from './Components/UseState/UseState';



/*

Guia de nomenclatura: 

1 - Lista === Listas Array
2 - Data === useState
3 - ConditionalRender === RenderConditional
4 - Else === If Else 
5 - Reuti == Reutilização Componentes 
6 - 
7 - 
8 - 
9 - 
10 -


*/





function App() {
  return (
    <div className="App">

      <Listaarray />
      <Data />
      <ConditionalRender />
      <Else />
      <CarDetails brand="Ford" km={0} color="Preto" novo={true}  />
      <CarDetails brand="BMW" km={12000} color="Branco" novo={false} />
      <CarDetails brand="Toyota" km={20000} color="Cinza" novo={false} />


    </div>
  );
}

export default App;
