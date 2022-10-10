
//Estrutura e Lógica: 

import React from "react";
import { useState } from "react";


function Else() {
  const [name] = useState("Patrick");
  const [age] = useState(28);

  return (
    
    <div>
      
      <h3>Qual seu nome?</h3>
      {name === "Patrick" ? (
        <div>
          <p>Eu sou o {name}</p>
        </div>
      ) : (
        <div>
          <p>Eu sou a Maria</p>
        </div>
      )}

        <h3>Qual a sua idade?</h3>
        {age === 28 ? (
            <div>
                <p>Tenho 28 anos</p>
            </div>
        ) : (
            <div>
                <p>Tenho 22 anos</p>
            </div>
        )}

    </div>


  );
}

export default Else;



/* 

Sobre:

No If / Else utilizamos a logica com os parametros a seguir: {const === "" ? () : ()}.
Lembrando que o primeiro item nas chaves indica o parametro verdadeiro, e o segundo item falso.
Conforme o exemplo acima podemos utilizar essa logica com mais de uma const aplicada.

Nota:

=== significa 'recebe'
&& significa 'and' (esse + esse)
|| significa 'or'  (esse ou aquele)
(1) : (2) significa Se sim .... : Se nao ....

*/
