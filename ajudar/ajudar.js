const menuHamburguer = document.querySelector(".menu-icon");
    const navLinks = document.querySelector(".dropdown-content");

    menuHamburguer.addEventListener('click',()=>{
    navLinks.classList.toggle('mobile-menu');
    });



    const images = [
        { 
            src: "../src/img/pesquisa_ajudar.webp", 
            title: "Pesquisa Científica", 
            description: "Apoiar pesquisas científicas na Antártida é essencial para combater as mudanças climáticas e preservar um dos ecossistemas mais importantes do planeta. Projetos que monitoram as condições ambientais do continente ajudam a prever impactos globais, como a elevação do nível do mar. Ao seguir e divulgar essas descobertas, contribuímos diretamente para a preservação da Antártida e o futuro do nosso clima." },

        { 
            src: "../src/img/palestra_ajudar.webp", 
            title: "Palestras", 
            description: "Promover a conscientização, educar e realizar palestras sobre a Antártida é uma maneira poderosa de proteger o continente. Ao educar o público sobre os efeitos das mudanças climáticas na Antártida, aumentamos o conhecimento sobre sua importância para o equilíbrio ambiental global, como a regulação do clima e o controle dos níveis do mar."},

        { 
            src: "../src/img/pro.jpg", 
            title: "PROANTAR", 
            description: "O Programa Antártico Brasileiro (PROANTAR) é vital para a pesquisa e preservação do continente antártico, uma área crucial para o equilíbrio climático do planeta. Ao promover estudos sobre mudanças climáticas, biodiversidade e oceanografia, o PROANTAR gera conhecimento que ajuda a entender os impactos das mudanças ambientais. Além disso, o programa contribui para a educação e a conscientização sobre a importância da proteção de ecossistemas frágeis. Apoiar o PROANTAR é, portanto, essencial para garantir um futuro sustentável, demonstrando o compromisso"},

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