'use strict'

async function buscarImagens() {
    const url=`https://picsum.photos/v2/list`
    const response=await fetch(url)
    const data=await response.json()


    return data
}

//criando a imagem e adicionando a galeria
function criarImagem(link){
    const galeria=document.getElementById('galeria')
    const novaImagem=document.createElement('img')
    novaImagem.src=link.download_url

    galeria.appendChild(novaImagem)
}

async function preencherImagens() {
    const imagens=await buscarImagens()
    const galeria=document.getElementById('galeria')

    galeria.replaceChildren('')

   imagens.forEach(criarImagem)
    console.log(imagens)
}

preencherImagens()

