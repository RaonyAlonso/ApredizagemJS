function criaPessoa (nome, sobrenome, a, p){
    return{
        nome,
        sobrenome,
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`
        },
        fala : function(assunto){
            return `${nome} está ${assunto}`
        },
        altura: a,
        peso: p,
        get imc(){
            const indice = this.peso / (this.altura ** 2)
            return indice.toFixed(2)
        },
        set nomeCompleto(valor){
            valor = valor.split(' ')
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ')
            

        }
    }
}

const p1 = criaPessoa('rao','alonso', 1.8, 80)
p1.nomeCompleto = 'Raony Soletti Alonso'
console.log(p1.nomeCompleto)
console.log(p1.nome)
console.log(p1.sobrenome)