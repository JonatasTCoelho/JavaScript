
//Aula anterior
/*let dia_mes = 30;
let evento = "Fazer Academia";

    for(let q = 1; q <= dia_mes; q++){
        this.adicionarEvento(q, evento);
    }
function adicionarEvento(dia, evento){
    console.log('Fazendo cadastro do evento: ' +evento+' do dia' +dia);
}*/



//FOR PARA ARRAYS
    //Array 
    let allProducts = ['Macarrão', 'Pizza', 'Sushi', 'Queijo', 'Nutella'];
    var html = '<b>';

    for(let q in allProducts){
         html += allProducts[q]+' | ';
    }

    html += '</b>';
    document.querySelector('.lista').innerHTML = html;