let btn = window.document.querySelector('#btnConvert')
let valueConversor = window.document.querySelector("#inTemp")
let textoExplicando = window.document.querySelector("#text")

valueConversor.addEventListener('keypress', (e)=>{
    if (e.charCode ==13){
        convertion()
    }
})

function convertion(){
    let optConversor = window.document.querySelector("#tempIn").value
    let optConvertido = window.document.querySelector("#tempOut").value
    let saida = window.document.querySelector("#output")

    let check = checked(optConversor, valueConversor, saida)
    saida.innerHTML = converter(optConversor, optConvertido, valueConversor.value).toFixed(2)
}

btn.addEventListener('click', convertion)

function checked(opcaoI, valorI, output){
    if ((opcaoI == 'kelvin') && (valorI<0)){
        alert('Kelvin não pode ser negativo')
        output.innerHTML = 'Valor inválido'
        return false
    }
    if (valorI==''){
        alert('Preencha um valor')
        return false
    }
    return true
}
function converter(opcaoI, opcaoO, valorI){
    if (opcaoI == opcaoO) {
        textoExplicando.innerText = 'Temperaturas iguais'
        return Number(valorI)
    } else if ((opcaoI == "fahrenheit") && (opcaoO == "celsius")){
        textoExplicando.innerText = 'Subtraia 32 da temperatura em Fahrenheit e multiplique por 5/9. Fórmula: °C = (°F - 32) × 5/9'
        return (valorI-32)/1.8
    } else if ((opcaoI == "fahrenheit") && (opcaoO == "kelvin")){
        textoExplicando.innerText = 'Primeiro converta para Celsius e depois para Kelvin. Fórmula: K = (°F - 32) × 5/9 + 273,15'
        return (valorI-32)*5/9+273
    } else if ((opcaoI == "celsius") && (opcaoO == "fahrenheit")){
        textoExplicando.innerText = 'Multiplique a temperatura em Celsius por 9/5 e adicione 32. Fórmula: °F = (°C × 9/5) + 32'
        return valorI*1.8+32
    } else if ((opcaoI == "celsius") && (opcaoO == "kelvin")){
        textoExplicando.innerText = 'Apenas some 273,15 à temperatura em Celsius. Fórmula: K = °C + 273,15'
        return Number(valorI)+273
    } else if ((opcaoI == "kelvin") && (opcaoO == "fahrenheit")){
        textoExplicando.innerText = 'Converta para Celsius e depois para Fahrenheit. Fórmula: °F = (K - 273,15) × 9/5 + 32'
        return (valorI-273)*1.8+32
    } else if ((opcaoI == "kelvin") && (opcaoO == "celsius")){
        textoExplicando.innerText = 'Subtraia 273,15 da temperatura em Kelvin. Fórmula: °C = K - 273,15'
        return valorI-273
    }
}
