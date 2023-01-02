
let calculator = document.getElementById('calculator');

calculator.addEventListener('click', () => {

    const height = parseFloat(document.getElementById('height').value);
    const weight = parseFloat(document.getElementById('weight').value);
    const result = document.getElementById('result');

    let sumToImc = weight / (height * height);
    let thinness = sumToImc <= 18.5;
    let normal = sumToImc >= 18.5 && sumToImc <= 24.9;
    let overweight = sumToImc >= 25 && sumToImc <= 29.9;
    let obesity = sumToImc >= 30 && sumToImc <= 39.9;
    let larger = sumToImc >= 40;

    if (thinness) {
        result.innerText = `Abaixo do Peso: ${sumToImc}`;
    };

    if (normal) {
        result.innerText = `Normal: ${sumToImc}`;
    };

    if (overweight) {
        result.innerText = `Sobrepeso: ${sumToImc}`;
    };

    if (obesity) {
        result.innerText = `Obesidade: ${sumToImc}`;
    };

    if (larger) {
        result.innerText = `Obesidade grave: ${sumToImc}`;
    };

});