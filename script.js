function funcao_calcular(){
    var n1 = parseFloat(document.getElementById("altura").value)
    var n2 = parseFloat(document.getElementById("peso").value)
    // var res = Number(document.getElementById("resultado").value)
    var total = window.document.getElementById('resultado')
    var novo_n1 = (n1 * n1)
    soma = n2 / novo_n1
    total.innerHTML= `<strong>Resultado:</strong>${soma}` 
}