//Estrutura e Lógica:

import React from "react";
import CarDetails from "../Reutilizar_Componentes/Reuti";

function ReuLoop() {
  const cars = [
    { id: 1, brand: "Ferrari", km: 2340, color: "red", novo: false },
    { id: 2, brand: "Porshe", km: 1024, color: "black", novo: false },
    { id: 3, brand: "Alfa Romeo", km: 0, color: "yellow", novo: true },
  ];

  return (
    <div>
      {cars.map((car) => (
        <CarDetails
          brand={car.brand}
          km={car.km}
          color={car.color}
          novo={car.novo}
        />
      ))}
    </div>
  );
}

export default ReuLoop;

/* 

Sobre:

Os arrays de dados porem ter muitos itens, então é correto utilizar uma
estrutura de loop (map) para a sua exibição, com isso conseguimos conciliar
três conceitos: Renderização de Listas, reaproveitamento de componentes e props. 

estrutura map = {nomeconst.map((nomeparainvocar) => (tipo={nomeparainvocar.tipo}))}


*/
