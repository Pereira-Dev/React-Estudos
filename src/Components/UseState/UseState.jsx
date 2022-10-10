
//Estrutura e Lógica: 

import React from 'react'
import { useState } from 'react'

function Data (){
    
    const [data, setData] = useState (10)
    
    
        
    
    
    return(
        <>
            <p>April, {data}</p>
            <button onClick={() => setData (data - 1)}> Ontem</button>
            <button onClick={() => setData (10) }> Hoje</button>
            <button onClick={() => setData(11)} >Amanha</button>
        </>

        
    )
}


export default Data


/*

Sobre: 

No useState utilizamos dois nomes como vimos no data / setData, o primeiro nome (data) sera uma constante e o valor nunca altera 
o segundo nome (setData) sera uma varivel, e o useState faz essa manipulacao. Nesse exemplo, o valor de data sempre sera 10, 
e o useState pode utilizar valores variados ou ate mesmo deixa-lo em branco useState (), assim o valor do mesmo sera zero e
podemos manipular os valores com +1 ou -1 etc. 


*/