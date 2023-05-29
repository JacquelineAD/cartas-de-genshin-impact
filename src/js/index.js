/*
quando clicar no pokémon da listagem temos que esconder o cartão do pokémon aberto e mostrar o cartão correspondente ao que foi selecionado na listagem
pra isso vamos precisar trabalhar com dois elementos
1 - listagem
2 - cartão do pokémon
precisamos criar duas variáveis no JS pra trabalhar com os elementos da tela
vamos precisar trabalhar com um evento de clique feito pelo usuário na listagem de pokémons
- remover a classe aberto só do cartão que está aberto
- ao clicar em um pokémon da listagem pegamos o id desse pokémon pra saber qual cartão mostrar
-remover a classe ativo que marca o pokémon selecionado
-adicionar a classe ativo no item da lista selecionado 
*/


// precisamos criar duas variáveis no JS pra trabalhar com os elementos da tela

const listaLateralPersonagem = document.querySelectorAll('.personagens')
const personagemCard = document.querySelectorAll('.cartao-personagem')

listaLateralPersonagem.forEach(personagens => {

    personagens.addEventListener('click',() => {

        const cartaoPersonagensAberto = document.querySelector('.aberto')
        cartaoPersonagensAberto.classList.remove('aberto')

    
        const idPersonagensSelecionado= personagens.attributes.id.value

        const idDoCartaoPersonagemParaAbrir = 'cartao-'+ idPersonagensSelecionado
        const cartaoPersonagensParaAbrir = document.getElementById(idDoCartaoPersonagemParaAbrir)
        cartaoPersonagensParaAbrir.classList.add('aberto')

        const personagemAtivoNaListagem = document.querySelector('.ativo')
        personagemAtivoNaListagem.classList.remove('ativo')

        const personagemSelecionadoNaListagem = document.getElementById(idPersonagensSelecionado)
        personagemSelecionadoNaListagem.classList.add('ativo')
    })
})