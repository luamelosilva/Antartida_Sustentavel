const menuHamburguer = document.querySelector(".menu-icon");
    const navLinks = document.querySelector(".dropdown-content");

    menuHamburguer.addEventListener('click',()=>{
    navLinks.classList.toggle('mobile-menu');
    });



    const images = [
        { 
            src: "../src/img/especies_1.jpg", 
            title: "Pinguim-imperador", 
            description: "estima-se que até 80% das colônias de pinguins-imperadores estarão quase extintas até 2100 com aumentos normais nas emissões de gases de efeito estufa. No entanto, se forem cumpridas as medidas do Acordo Climático de Paris para limitar o aquecimento menor que 2°C, essa estimativa cai para 31%" },

        { 
            src: "../src/img/especies_2.jpg", 
            title: "Urso Polar", 
            description: "Alguns ursos polares enfrentam a fome à medida que o gelo marinho do Ártico derrete. Isso acontece porque eles não conseguem adaptar suas dietas à vida em terra, descobriram cientistas.A icônica espécie do Ártico normalmente se alimenta de focas-aneladas que capturam em blocos de gelo no mar.Mas à medida que o gelo desaparece num mundo em aquecimento, muitos ursos passam mais tempo em terra, comendo ovos de aves, frutos silvestres e grama.Porém os animais perdem peso rapidamente em terra, aumentando o risco de morte."},

        { 
            src: "../src/img/especies_3.jpg", 
            title: "Foca-Anelada", 
            description: "A foca-anelada está acostumada a repousar sobre o gelo, conceber submersa e dar à luz sobre a superfície congelada. Os recém-nascidos são abrigados em berços, que requerem suficiente quantidade de neve. As temperaturas mais quentes da primavera fazem com que os berços de neve desmoronem e o gelo se quebre, separando os filhotes de suas mães. A contínua queda da população de focas-aneladas que vem sendo registrada pode deixar outra vítima. Afinal, elas são a principal fonte de alimento do urso polar."},

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