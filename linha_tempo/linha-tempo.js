const menuHamburguer = document.querySelector(".menu-icon");
    const navLinks = document.querySelector(".dropdown-content");

    menuHamburguer.addEventListener('click',()=>{
    navLinks.classList.toggle('mobile-menu');
    });



    const images = [
        { 
            src: "../src/img/ANTES.jpg", 
            title: "Antes", 
            description: "Em 6 de fevereiro de 2020, estações meteorológicas registraram a temperatura mais alta já registrada para a Antártida. Os termômetros na Base Esperanza, na ponta norte da Península Antártica, atingiram 18,3 °C (64,9 °F) — quase a mesma temperatura de Los Angeles naquele dia. A onda de calor causou derretimento generalizado nas geleiras próximas.   As temperaturas altas chegaram em 5 de fevereiro e continuaram até 13 de fevereiro de 2020. As imagens acima mostram o derretimento da calota de gelo da Ilha Eagle e foram adquiridas pelo Operational Land Imager (OLI) no Landsat 8 em 4 e 13 de fevereiro de 2020." },

        { 
            src: "../src/img/DEPOIS.jpg", 
            title: "Depois", 
            description: "Em 6 de fevereiro de 2020, estações meteorológicas registraram a temperatura mais alta já registrada para a Antártida. Os termômetros na Base Esperanza, na ponta norte da Península Antártica, atingiram 18,3 °C (64,9 °F) — quase a mesma temperatura de Los Angeles naquele dia. A onda de calor causou derretimento generalizado nas geleiras próximas.   As temperaturas altas chegaram em 5 de fevereiro e continuaram até 13 de fevereiro de 2020. As imagens acima mostram o derretimento da calota de gelo da Ilha Eagle e foram adquiridas pelo Operational Land Imager (OLI) no Landsat 8 em 4 e 13 de fevereiro de 2020."  },

        { 
            src: "../src/img/antesa-83.svg", 
            title: "Antes", 
            description: "Em maio de 2024, um iceberg de 375 km² se desprendeu da plataforma de gelo Brunt, Antártida, resultado da expansão da fenda Halloween Crack. O iceberg A-83 foi registrado pelo Landsat 9 e faz parte de um ciclo natural, mas as mudanças climáticas agravam o problema. O derretimento de icebergs como esse pode contribuir para o aumento do nível do mar, afetando ecossistemas e áreas costeiras, além de perturbar correntes oceânicas e a vida marinha. O monitoramento por satélite será essencial para entender as consequências desses eventos."},

        { 
            src: "../src/img/depoisa-83.svg", 
            title: "Depois", 
            description: "Em maio de 2024, um iceberg de 375 km² se desprendeu da plataforma de gelo Brunt, Antártida, resultado da expansão da fenda Halloween Crack. O iceberg A-83 foi registrado pelo Landsat 9 e faz parte de um ciclo natural, mas as mudanças climáticas agravam o problema. O derretimento de icebergs como esse pode contribuir para o aumento do nível do mar, afetando ecossistemas e áreas costeiras, além de perturbar correntes oceânicas e a vida marinha. O monitoramento por satélite será essencial para entender as consequências desses eventos."  }
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