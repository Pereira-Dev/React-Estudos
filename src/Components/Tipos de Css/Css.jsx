
/*

---------------------------------------------------------------------------


1 - Css Modules 

Utilizado como um recurso de Css scoped, ele é exclusivo do componente,
altamente utilizado em projetos reais e a forma mais eficiente de trabalhar
com css a nível de componentes. Precisamos importá-lo também no componente.

Nota: O nome dado ao arquivo é (NomedoComponente.modules.css)

estrutura: 

>Pasta Exemplo 
>>Exemplo.jsx
>>>Exemplo.modules.css


---------------------------------------------------------------------------


2 - Css Global

Utilizado para estilizar diversos elementos em comum ou fazer um reset
no CSS. Utilizamos o arquivo (index.css) para isso localizado em src.


---------------------------------------------------------------------------


3 - Css Componente

Utilizado para um componente em especifico, geralmente é criado um arquivo
com o mesmo nome do componente e este é importado no próprio componente. 

Nota: esse método não é scoped, ou seja, o CSS vaza para outros 
componentes se houver uma regra em colisão. O React já cria um exemplo
desta técnica com o (App.css/js).

Lembrando, alterando o (App.css) ele altera tudo que for invocado 
dentro do (App.js).


---------------------------------------------------------------------------


4 - Css Inline Style 

Utilizado por meio do atributo style, conseguimos aplicar regras 
diretamente em um elemento. 

Nota: Devemos optar por outras maneiras de CSS, o inline pode dificultar
a manutenção ou deixar o código imprevisível em algumas situações. 

Estrutura: 
<p style={{color: "blue", padding: "2px"}}> Este elemento é Inline </p>


---------------------------------------------------------------------------


5 - Css Inline Dinâmico 

Utilizado para aplicar estilo baseado em uma Condicional, vamos inserir
no atributo um (if ternário). Dependendo da condição podemos mudar 
que regras de estilo um elemento recebe.

Estrutura: 

const n = 15;
const [name] = useState("Patrick")

<p style={n < 10 ? {color: "white"} : {color: "black"}}> Dinamic </p>
(imprimirá cor Preto)


<p style={n > 10 ? {color: "white"} : {color: "black"}}> Dinamic </p>
(imprimirá cor Branco)


<h1 style={name === "Patrick" ? {margin-top: "10px"} : {null}}>Nome</h1>
(Imprimirá Nome com margin-top de 10px)


---------------------------------------------------------------------------

*/