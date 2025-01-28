const btn = document.querySelector('menu-header>nav>button');

btn.addEventListener('click',function(){
    const ul = document.querySelector('menu-header>nav>ul');
        ul.classList.toggle('ativo')
})
// document.querySelector('click'). 
async function requisicao(url){
    const repostaRequisicao = await fetch(url)
    const jsonRequisicao = await (await respostaRequisicao).json();

    // console.log(jsonRequisicao);
    const body = await jsonRequisicao;
    pokemon = {
        nome: body.name,
        habilidades: body.abilities,
        imagem: body.sprites.front_default 
    };
    const div = document.createElement("div");
    const sapn
}; 
const requisicao = await fetch("https://pokeapi.co/api/v2/").then(corporequisicao=>corporequisicao.json());
