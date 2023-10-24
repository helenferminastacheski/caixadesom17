//decleração/criando função tocaSom
function tocaSom(idElementoAudio){
    document.querySelector(idElementoAudio).play()
}
//chamando/invocando a função tocaSom pelo clique do botão
document.querySelector('.tecla_pom').onclick = tocaSom 

//referencia costante listaDeTeclas, buscando todos os botões
const listaDeTeclas = document.querySelectorAll('.tecla');

//chamando a função tocaSom pela item "0" da listaDeTecla
listaDeTeclas[0].onclick = tocaSom;

let contador = 0;
while(contador < listaDeTeclas.length){
    const efeito = listaDeTeclas[contador].classList[1]
    cont idAudio = "#som_"+efeito;
    listaDeTeclas[contador].onclick = function?(){
        tocaSom(Audio)
    };
    contador = contador + 1;
    consoler.log(contaor);
}