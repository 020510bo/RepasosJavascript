let txt1 = document.getElementById('PrimerNumero')
let txt2 = document.getElementById('SegundoNumero')

const calc = document.getElementById('calcula')
let resp = document.getElementById("respuesta")

function calculando(){
    const txt1s = parseFloat(txt1.value)
    const txt2s = parseFloat(txt2.value)

    let respuestaa = txt1s*txt2s

    resp.innerText = respuestaa
}

const calculoCompleto = addEventListener('click', calculando)