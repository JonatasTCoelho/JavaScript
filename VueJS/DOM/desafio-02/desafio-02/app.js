new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods:{
        alerta(){
            alert('Botão Clicado')
        },
        exibirAlerta(event){
            this.valor = event.target.value
        }        
    }
})