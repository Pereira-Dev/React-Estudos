

//Estrutura e Lógica: 

import React from "react";

const CarDetails = ({ brand, km, color, novo }) => {
  return (
    <div>
      <h4>Car Details</h4>
      {novo === true ? (
        <div>
          <p>Carro Novo</p>
        </div>
      ) : (
        <div>
          <p>Carro Usado</p>
        </div>
      )}

      <ul>
        <li>Marca: {brand}</li>
        <li>Km: {km}</li>
        <li>Cor: {color}</li>
      </ul>
    </div>
  );
};

export default CarDetails;
/* 

Sobre: 

    Aqui podemos ver um exemplo de reutilizacao de props e componente para gerar 3 estruturas no App.js
    apenas alterando seu conteudo indicativo, a props se torna a propriedade de uma constante, porem seu valor pode ser 
    alterado e reutilizado. 

    Alem disso, foi aplicado um booleano para imprimir os carros que sao novos ou usados. 

    Nota: Declarando a const somente nao e necessario declarar uma function anteriormente. 

*/

