let btn = window.document.querySelector('#btnConvert')

btn.addEventListener('click', ()=>{
    let optConversor = window.document.querySelector("#tempIn").value
    let optConvertido = window.document.querySelector("#tempOut").value
    let valueConversor = window.document.querySelector("#inTemp").value
    let saida = window.document.querySelector("#output")

    if (optConversor == optConvertido) {
        saida.innerHTML = valueConversor
    } else {
        saida.innerHTML = converter(optConversor, optConvertido, valueConversor)
    }
    
})

function converter(opcaoI, opcaoO, valorI){
    if ((opcaoI == "fahrenheit") && (opcaoO == "celsius")){
        return (valorI-32)/1.8
    } else if ((opcaoI == "fahrenheit") && (opcaoO == "kelvin")){
        return (valorI-32)*5/9+273
    } else if ((opcaoI == "celsius") && (opcaoO == "fahrenheit")){
        return valorI*1.8+32
    } else if ((opcaoI == "celsius") && (opcaoO == "kelvin")){
        return Number(valorI)+273
    } else if ((opcaoI == "kelvin") && (opcaoO == "fahrenheit")){
        return (valorI-273)*1.8+32
    } else if ((opcaoI == "kelvin") && (opcaoO == "celsius")){
        return valorI-273
    }
}
