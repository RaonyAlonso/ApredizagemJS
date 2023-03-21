
falaOi()


function falaOi(){
    console.log('oi')
}

const souUmDado = function(){
    console.log('Sou um dado')
}

function executaFucao(funcao){
    console.log('Vou exxecutar uma função')
    funcao()
}
executaFucao(souUmDado)

const funcaoArrow = () =>{
    console.log('Sou uma arrow function')
}
funcaoArrow();

const obj = {
    falar: function(){
console.log('estou falando')
    }
}
obj.falar();