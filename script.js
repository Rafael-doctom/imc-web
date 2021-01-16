function funcao_calcular(){
    var n1 = parseFloat(document.getElementById("altura").value)
    var n2 = parseFloat(document.getElementById("peso").value)
    var resultado = window.document.getElementById('resultado')
    var soma = n2/(n1*n1)
    if(soma <=18.5){
    resultado.innerHTML=`RESULTADO:
    ${soma}<br><br>
    Você está <strong>Abaixo do Peso </strong>`
    }else if(soma >=18.5 && soma <=24.9   ){
        resultado.innerHTML= `RESULTADO:
        ${soma}<br><br>
        Você está <strong> no Peso Normal </strong>`
    }else{
        alert('[Erro: aplicação em desenvolvimento]')

    }
}