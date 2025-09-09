const rodri_ciculo = document.getElementById('ciculo')
let tamanho_rodri = 10

rodri_ciculo.addEventListener ('dblclick',()=>{
    rodri_ciculo.style.borderRadius = `${tamanho_rodri}px`
    rodri_ciculo.style.width = `${tamanho_rodri}px`
    rodri_ciculo.style.height = `${tamanho_rodri}px`
    tamanho_rodri = tamanho_rodri+20
})