function criaCalculadora(){
    return {
        display: document.querySelector('.display'),
        inicia() {
            cliqueBotes();
        },
        cliqueBotes(){
            document.addEventListener('click',function(e){
                const el = e.target

                if(el.classList.contains('btn-num')){
                    this.btnParaDisplay()
                }
            })
        }
    }
}

const calculadora = criaCalculadora()
calculadora.inicia()