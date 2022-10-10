
import React from "react";
import { useState } from "react";


function Listaarray () {
    
    const [list] = useState([


        {Age: 28, Name: "Patrick", Position: "Front-End Developer", Company: "Encora", Work: "Remote"},
        {Age: 29, Name: "Bruno", Position: "BI Analyst", Company: "iFood", Work: "Remote"},
        {Age: 28, Name: "Breno", Position: "Sales Executive", Company: "C6 Bank", Work: "Hybrid"},
        {Age: 29, Name: "Thays", Position: "Data Engineer", Company: "HealthTeach", Work: "Remote"},
        {Age: 49, Name: "Alexandre", Position: "CFO", Company: "ALLE", Work: "Hybrid"},
        {Age: 23, Name: "Aline", Position: "Teacher", Company: "Mapple Bear", Work: "in Office"},
        {Age: 35, Name: "Maria", Position: "DevOps", Company: "Google", Work: "Remote"},
        
    ]);
    
    
    
    return(
        <>
            <ul>
                {list.map((listando) => (
                    <li>
                       {listando.Age} - {listando.Name} - {listando.Position} - {listando.Company} - {listando.Work}
                    </li>
                ))}
                
            </ul>
        </>
    )
}

export default Listaarray


/*

Sobre :

Array utilizado com useState para criação de listas, invocando todos os dados para serem printados na tela por auxilio do {list.map((randomname) => ))}

*/