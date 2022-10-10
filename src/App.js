import React from 'react';
import './App.css';
import Fragmentss from './Components/Fragmentss/Fragmentss';
import Else from './Components/If Else/Else';
import Listaarray from './Components/Listas Array/Lista';
import ConditionalRender from './Components/RenderCondicional/Render';
import ReuLoop from './Components/Reutilizacao com Loop/ReuLoop';
import CarDetails from './Components/Reutilizar_Componentes/Reuti';
import Data from './Components/UseState/UseState';
import Forms from './Pages/Forms/Index';



/*
 ----------------------------------------------------------------------------------
  
  Guia de nomenclatura: 

  1 - Listaarray === Listas Array
  2 - Data === useState
  3 - ConditionalRender === RenderConditional
  4 - Else === If Else 
  5 - CarDetails == Reutilização Componentes 
  6 - ReuLoop == Reutilização com Loop
  7 - Fragmentss == React Fragments 
  8 - Tipos de CSS
  9 - Forms == Formulário + Css Modules
  10 -
  11 -
  12 -

  
 ----------------------------------------------------------------------------------
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
      <ReuLoop />
      <Fragmentss />
      
      <Forms />

    </div>
  );
}

export default App;
