
//Estrutura e Lógica: 


import React from "react";
import { useState } from "react";

function ConditionalRender() {

    const [check] = useState(true);
    const [Profissao] = useState("Tecnologia");


    return (

        <>
            <h1>Qual sua profissao?</h1>
            {Profissao === "Tecnologia" ? (
                <div>
                    <p>Correto, Selecionado Corretamente</p>
                </div>
            ) : (
                <div>
                 <p>Incorreto, tente novamente.</p>
                </div>
            )}




        </>
    )
}


export default ConditionalRender 



/* 

Sobre:

Utilizamos o Conditional Render para indicar um booleano, se algo simples e verdadeiro ou falso, 
para utilizar uma logica mais complexa aplicada, checar o componente if / else. 

lembrando que para comparar, utilizamos o formato abaixo: 
   
    {constname === "useStatename" ? (condicao verdadeira) : (condicao falsa)}

*/