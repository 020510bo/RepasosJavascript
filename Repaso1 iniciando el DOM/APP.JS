let txt1 = document.getElementById('numero1')
let txt2 = document.getElementById('numero2')
const calc = document.getElementById('calcular')
let resp = document.getElementById('Respuesta')


function calculando(){
    let num1 = parseFloat(txt1.value)
    let num2 = parseFloat(txt2.value)

    const calculo = num1+num2

    resp.innerText = calculo
    

}

calculoFInal = addEventListener('click', calculando)


