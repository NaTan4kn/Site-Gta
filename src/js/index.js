const botao = document.querySelector(".btn-plataforma");
const elementoplataformas = document.querySelector(".btn-plataforma .plataformas");
botao.addEventListener("click", () => {
    elementoplataformas.classList.toggle("ativo");
    // Criar uma constate para não ficar repetindo a progração como na linha abaixo(Apenas if(botaoaberto){}) const botaoestaaberto = elementoplataformas.classlist.contains("ativo"); 

    /*if(elementoplataformas.classList.contains("ativo")){
        elementoplataformas.classList.remove("ativo");
    }
    else{
        elementoplataformas.classList.add("ativo");
    }*/
} );

