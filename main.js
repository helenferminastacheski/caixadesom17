//decleração/criando função tocaSom
function tocaSom(idElementoAudio){
    document.querySelector(idElementoAudio).play();
}
//chamando/invocando a função tocaSom pelo clique do botão
document.querySelector('.tecla_pom').onclick = tocaSom;

//referencia costante listaDeTeclas, buscando todos os botões
const listaDeTeclas = document.querySelectorAll('.tecla');

//chamando a função tocaSom pela item "0" da listaDeTecla
listaDeTeclas[0].onclick = tocaSom;

for(let contador = 0;contador< listaDeTeclas.length;contador++){
    const tecla = listaDeTeclas[contador];
    const efeito = tecla.classList[1];
    const idAudio = `#som_${efeito}`;
    tecla.onclik = function(){
        tocaSom(idAudio);
    }
    tecla.okeydown = function(){
        tecla.classList.add( 'ativa')
    }
}
    
