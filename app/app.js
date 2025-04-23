let btn = window.document.querySelector('#btnConvert')
let valueConversor = window.document.querySelector("#inTemp")

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
        return Number(valorI)
    } else if ((opcaoI == "fahrenheit") && (opcaoO == "celsius")){
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
