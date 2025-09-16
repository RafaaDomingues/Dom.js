const rodri_ciculo = document.getElementById('ciculo')
let tamanho_rodri = 1

rodri_ciculo.addEventListener ('dblclick',()=>{
    rodri_ciculo.style.borderRadius = `${tamanho_rodri}px`;
    rodri_ciculo.style.width = `${tamanho_rodri*2}px`;
    rodri_ciculo.style.height = `${tamanho_rodri*2}px`;
    tamanho_rodri +=30;
})

function botao(novaCor) { 
    var elemento = document.getElementById("para1");
    elemento.style.backgroundColor = novaCor;
    elemento.style.display = 'inline';   
};

document.querySelector('#para1');

const imagem = document.getElementById('foto')
let foto_t = false

imagem.addEventListener('click', ()=>{
    if (foto_t === false) {
        imagem.src = 'pokedex.png'
        foto_t = true        
    }else{
        imagem.src = 'foto.jpg'
    }
});
