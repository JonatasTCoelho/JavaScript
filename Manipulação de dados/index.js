let variavel = 'texto';

console.log(variavel.length);
//Length = pega a quantd de caracteres de um texto

let texto = "Meu nome é Jonatas";

console.log(texto.indexOf('nome'));
//INDEXOF = Pega a posição da palavra no texto

let texto2 = "ESTE É O MEU TEXTO muito bem escrito";
console.log(texto2.substring(29,37));
//SUBSTRING = PEGA TEXTOS DE UMA POSIÇÃO INICIAL ATÉ UMA POSIÇÃO FINAL

 let text = 'ESTE É UM TEXTO DE TESTE';
 console.log(text.substr(19, 5));
 //SUBSTR = PEGA TEXTOS DE UMA POSIÇÃO INICIAL ATÉ UMA QUANTIDADE DE CARACTERES A FRENTE

 let text1 = 'texto aqui';
 let texto_editado = text1.replace('texto', 'jonatas');
 console.log(texto_editado);
 //replace serve para substituir palavras dentro de um texto
