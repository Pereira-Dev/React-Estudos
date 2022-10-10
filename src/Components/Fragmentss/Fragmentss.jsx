//Estrutura e Lógica:

import React from "react";

function Fragmentss() {
  return (
    <div>

      <div>
        <h1>Titulo com div</h1>
        <h2>Subtitulo com div</h2>
        <p>paragrafo com div</p>
      </div>

      <>
        <h1>Titulo com fragmento</h1>
        <h2>Subtitulo com fragmento</h2>
        <p>Paragrafo com fagmentos</p>

      </>

    </div>
  );
}

export default Fragmentss;






/* 

Sobre:

Os React Fragments sao interessantes quando precisamos ter
mais de um elemento pai em um componente. 
Criamos uma tag vazia: <>....</>

Ela serve como elemento pai, não alterando a estrutura
do HTML com uma div, por exemplo, apenas para fins de Semântica.
Ambos funcionam da mesma forma, servindo como elemento pai central. 


*/
