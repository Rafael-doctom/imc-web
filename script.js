function funcao_calcular() {

    let weight = parseFloat(document.getElementById("altura").value);
    let height = parseFloat(document.getElementById("peso").value);
    let result = window.document.getElementById('resultado');

    let soma = height / (weight * weight)

    if (soma <= 18.5) {
        result.innerHTML = `${soma} <br>
    Você está <strong>Abaixo do Peso </strong>`
    } else if (soma >= 18.5 && soma <= 24.9) {
        result.innerHTML = `
        ${soma}<br>
        Você está <strong> no Peso Normal </strong>`
    } else {
        alert('[Erro: aplicação em desenvolvimento]')
    }

}