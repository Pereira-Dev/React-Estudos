
//Estrutura e Lógica: 


import React from "react";
import { useState } from "react";

function ConditionalRender() {

    
    const [Profissao] = useState("Tecnologia");


    return (

        <>
            <h1>Qual sua profissão?</h1>
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
para utilizar uma lógica mais complexa aplicada, checar o componente if / else. 

lembrando que para comparar, utilizamos o formato abaixo: 
   
    {constname === "useStatename" ? (condição verdadeira) : (condição falsa)}

*/