//decleração/criando função tocaSomPom
function tocaSomPom(){
    document.querySelector('#som_tecla_pom').play()
}
//chamando/invocando a função tocaSomPom pelo clique do botão
document.querySelector('.tecla_pom').onclick = tocaSomPom 

//referencia costante listaDeTeclas, buscando todos os botões
const listaDeTeclas = document.querySelectorAll('.tecla');

//chamando a função tocaSomPom pela item "0" da listaDeTecla
listaDeTeclas[0].onclick = tocaSomPom;

let contador = 0;
while(contador < 9){
    listaDeTeclas[contador].onclick = tocaSomPom;
}