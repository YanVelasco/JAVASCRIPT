function soBoaNoticia(nota){
    if(nota >= 60){
        console.log("Aprovados: " + nota)
    }
}

soBoaNoticia(81)
soBoaNoticia(51)

function seForVerdadeEuFalo(valor){
    if(valor){
        console.log('É verdade...' + valor)
    }
}

seForVerdadeEuFalo()
seForVerdadeEuFalo(null)
seForVerdadeEuFalo(undefined)
seForVerdadeEuFalo(NaN)
seForVerdadeEuFalo('')
seForVerdadeEuFalo(0)
seForVerdadeEuFalo(-1) 
seForVerdadeEuFalo('') 
seForVerdadeEuFalo('?') 
seForVerdadeEuFalo([])
seForVerdadeEuFalo(1,2)
                                                       