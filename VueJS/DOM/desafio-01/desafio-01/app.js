new Vue({
    el: '#desafio',
    data: {
        nome: 'Jônatas',
        idade: '18',
        imagem: 'https://files.cod3r.com.br/curso-vue/vue.jpg '
    },
    methods:{
        randomico: function(){
            return Math.random()
        }
    } 
})