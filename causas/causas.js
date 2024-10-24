    const menuHamburguer = document.querySelector(".menu-icon");
    const navLinks = document.querySelector(".dropdown-content");

    menuHamburguer.addEventListener('click',()=>{
    navLinks.classList.toggle('mobile-menu');
    });



    const images = [
        { 
            src: "../src/img/Impacto.jpg", 
            title: "Porque isso está acontecendo?", 
            description: "O problema começou com a revolução industrial, quando nós, como espécie, passamos a ter influência no clima, porque passamos a ser importantes emissores de gases de efeito estufa, explica Lucas Ruiz, geólogo do Instituto Argentino de Nivologia, Glaciologia e Ciências Ambientais (Ianigla) — nivologia é o estudo da neve e glaciologia, o das geleiras." },

        { 
            src: "../src/img/Lucas-Ruiz.jpg", 
            title: "Porque isso está acontecendo?", 
            description: "à medida que o planeta se aquece, as zonas polares perdem a superfície branca, que reflete menos, o que produz um aumento na temperatura, que por sua vez gera mais perda de gelo.Esse fenômeno é o que explica porque os polos estão se aquecendo de duas a três vezes mais que o resto do planeta, diz Costa, do Instituto Antártico Argentino." },

            { 
                src: "../src/img/SOl.webp", 
                title: "Porque isso está acontecendo?", 
                description: "A má notícia é que, uma vez desencadeado esse processo, não basta manter as temperaturas atuais para desacelerá-lo. Teríamos que encontrar uma maneira de resfriar a atmosfera, algo que está fora de nosso alcance atualmente.E considerando os dois polos, há água suficiente para elevar o nível do mar em mais de 12 metros." },

            { 
                src: "../src/img/consequencias_1.jpg", 
                title: "Consequências", 
                description: "O relatório 2023 da Organização Meteorológica Mundial indica uma elevada probabilidade de que a temperatura média anual próxima à superfície do planeta ultrapasse em 1,5°C os níveis pré-industriais (1850-1900), por pelo menos um ano durante o período entre 2023 e 2027 (WMO, 2023). Isto significa um grave alerta e indica que grandes massas de gelo das regiões polares irão se liquefazer e, assim, poderão carrear os microorganismos que estão ali estabilizados para os oceanos, possibilitando a circulação global" },

            { 
                src: "../src/img/Consequencia_2.jpg", 
                title: "Consequências", 
                description: "Um exemplo dos riscos sanitários associados ao degelo polar, foi o surto de antraz ocorrido em 2016 na península de Yamal, na Sibéria, dentro do Círculo Polar Ártico. A fonte das infecções pelo Bacillus anthracis foi uma carcaça de rena conservada no permafrost por décadas, que descongelou devido ao calor atípico do verão, liberando o patógeno ainda viável. Como resultado, mais de 2.500 renas foram infectadas e tiveram que ser sacrificadas, 90 pessoas foram hospitalizadas, 21 casos de antraz ficaram confirmados e uma criança morreu" },

            { 
                src: "../src/img/consequencias3.webp", 
                title: "Consequências", 
                description: "Em uma pesquisa recente, Alempic e colaboradores (2023) demonstraram que grandes vírus de DNA, com mais de 48 mil anos de idade, conseguiram sobreviver no permafrost, mantendo ativo seu poder de infectar outras células. Devido a essa característica, eles foram apelidados de “vírus zumbis”. Estes achados indicam que, com o derretimento de solos congelados nas regiões polares, diversos microrganismos podem ser liberados." },


    ];
    
    let currentIndex = 0;
    
    const carrosselImg = document.querySelector('.carrossel-img');
    const carrosselTitle = document.querySelector('h2');
    const descriptionText = document.querySelector('.descricao p'); // Seleciona o parágrafo da descrição // Implementado
    
    function showImage(index) {
        carrosselImg.src = images[index].src;
        carrosselTitle.textContent = images[index].title;
        descriptionText.textContent = images[index].description; // Atualiza a descrição com base na imagem // Implementado
    }
    
    document.querySelector('.prev').addEventListener('click', () => {
        currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
        showImage(currentIndex);
    });
    
    document.querySelector('.next').addEventListener('click', () => {
        currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
        showImage(currentIndex);
    });
    
    showImage(currentIndex); // Inicializa com a primeira imagem