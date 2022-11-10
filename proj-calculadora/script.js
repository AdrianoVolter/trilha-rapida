const calcular = () => {

    numero1 = parseFloat(document.querySelector("#n1").value)
    numero2 = parseFloat(document.querySelector("#n2").value)
    let operacao = document.querySelector('#select').value
    let resultado;


    if (operacao === "+") {
        resultado = numero1 + numero2
    } else if (operacao === "-") {
        resultado = numero1 - numero2
    } else if (operacao === "*") {
        resultado = numero1 * numero2
    } else if (operacao === "/") {
        resultado = numero1 / numero2
    } else if (operacao === "%") {
        resultado = numero1 % numero2
    } else if (operacao === "**") {
        resultado = numero1 ** numero2
    }
    document.querySelector("#res").innerHTML = "Resultado: " + resultado
}



