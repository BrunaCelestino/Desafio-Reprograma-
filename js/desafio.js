var inputValorHora = document.querySelector("#valor-hora");

var inputHorasProjeto = document.querySelector("#horas-projeto");

var spanResposta = document.querySelector("#resposta");


function calcular() { 
    
    var valorFinal = (inputValorHora.valueAsNumber * inputHorasProjeto.valueAsNumber).toFixed(2);
    
    spanResposta.textContent = "Valor do Projeto: R$ " + valorFinal;
}