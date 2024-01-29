document.getElementById('learnMoreBtn').addEventListener('click', function() {
  var moreInfoSection = document.getElementById('moreInfo');
  moreInfoSection.style.display = moreInfoSection.style.display === 'none' ? 'block' : 'none';
});

function toggleMenu() {
  var navList = document.querySelector('.nav-list');
  navList.style.display = navList.style.display === 'none' || navList.style.display === '' ? 'flex' : 'none';
}


document.addEventListener('DOMContentLoaded', function () {
  const itemsPerPage = 6;
  const cards = [
      { image: 'img/mudas/hibrida.jpg', text: 'Jabuticaba Híbrida', additionalText: 'A Jabuticaba Híbrida é uma árvore de porte pequeno, adapta-se muito bem em quintais, chácaras e até mesmo apartamentos.' },
      { image: 'img/mudas/sabara.webp', text: 'Jabuticaba Sabará', additionalText: 'Jabuticaba Sabará é a espécie de jabuticabeira mais cultivada no Brasil. É uma árvore semi-decídua (derruba parte de suas folhas no inverno) que pode alcançar até 9 metros de altura. Seus frutos possuem a casca fina e o seu sabor é muito doce.' },
      { image: 'img/mudas/coqueiro.jpg', text: 'Coqueiro Anão', additionalText: 'O coqueiro anão não ultrapassa 10m de altura, característica que facilita a colheita de seus frutos, em comparação ao gigante, que pode chegar a 35m.' },
      { image: 'img/mudas/lichia.jpeg', text: 'Lichia', additionalText: 'Adaptada a climas subtropicais, a árvore da lichieira atinge cerca de doze metros de altura. Possui flores pequenas e folhas de cor vermelha quando jovens, que se tornam verdes à medida que envelhecem.' },
      { image: 'img/mudas/Mangas.jpg', text: 'Mangas, Palmer, Aden e Bourbon', additionalText: 'A mangueira é uma árvore frondosa de porte médio a alto, podendo atingir até 30 metros. Apresenta copa arredondada e simétrica, variando de baixa e densa a ereta e aberta e adquirindo eventualmente forma piramidal.' },
      { image: 'img/mudas/logan.jpg', text: 'Longan (Olho de Dragão)', additionalText: 'Em suas folhas, a longan contém antioxidantes como a quercitina, que ajuda a prevenir o envelhecimento precoce das células, e substâncias antivirais, que ajudam a combater a aliviar os sintomas de gripes e resfriados. O consumo de longan (olho de dragão) ajuda no fortalecimento do sistema imunológico.' },
      { image: 'img/mudas/pera.jpeg', text: 'Pêra', additionalText: 'É uma fruta que fornece nutrientes importantes para a saúde como vitamina A, E, C, fibras, potássio, magnésio e cálcio. Além disso, as peras contêm carotenoides e flavonoides, que são compostos antioxidantes que oferecem vários benefícios à saúde.' },
      { image: 'img/mudas/maca.jpg', text: 'Maçã', additionalText: 'A maçã é rica em fibras, vitaminas B1, B2 e sais minerais (fósforo e ferro). Auxilia o bom funcionamento intestinal, contém propriedades antiinflamatórias, antibacterianas e antivirais. Combate os radicais livres por conter flavanóides, prevenindo assim o envelhecimento precoce.' },
      { image: 'img/mudas/uva.jpg', text: 'Uva', additionalText: 'a uva, com seu baixo índice glicêmico, é capaz de controlar o colesterol ruim, agindo contra o diabetes. Além disso, fenótipos presentes na fruta auxiliam a melhorar a sensibilidade das células do organismo à insulina.' },
      { image: 'img/mudas/pessego.webp', text: 'Pêssego', additionalText: 'O pêssego fornece vitamina A e E, que ajudam a proteger a pele contra os danos causados pelos raios ultravioletas; Efeito diurético: ajudando a combater a retenção de líquidos. ' },
      { image: 'img/mudas/graviola.jpeg', text: 'Graviola', additionalText: 'A Graviola é conhecida e considerada um superalimento por ter alto potencial terapêutico, efeito antidiurético, anti-inflamatório, antirreumático, antiespasmódico e anticancerígeno e é popularmente indicada para promover o controle dos níveis de glicose no sangue e no combate ao excesso de radicais livres.' },
      { image: 'img/mudas/atemoia.jpg', text: 'Atemóia', additionalText: 'A Atemóia ajuda seu corpo na recuperação de gripes e resfriados: alimento fonte de vitamina C e compostos de ação anti-inflamatória, a atemoia ajuda o organismo a se recuperar, além de ajudar em processos de cicatrização e reduzir a vulnerabilidade a infecções.' },
      // Adicione mais objetos conforme necessário
  ];

  const cardSection = document.getElementById('cardSection');
  const pagination = document.getElementById('pagination');

  function showCards(pageNumber) {
      const startIndex = (pageNumber - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      const visibleCards = cards.slice(startIndex, endIndex);

      cardSection.innerHTML = '';
      visibleCards.forEach(card => {
          const cardElement = document.createElement('div');
          cardElement.classList.add('card');

          const imageElement = document.createElement('img');
          imageElement.src = card.image;
          imageElement.alt = 'Imagem de uma planta';

          const textElement = document.createElement('p');
          textElement.textContent = card.text;

          const AdditionalTextElement = document.createElement('p');
          AdditionalTextElement.textContent = card.additionalText;

          cardElement.appendChild(imageElement);
          cardElement.appendChild(textElement);
          cardElement.appendChild(AdditionalTextElement);
          cardSection.appendChild(cardElement);
      });

      updatePagination(pageNumber);
  }

  function updatePagination(currentPage) {
      const totalPages = Math.ceil(cards.length / itemsPerPage);
      pagination.innerHTML = '';

      for (let i = 1; i <= totalPages; i++) {
          const dotElement = document.createElement('span');
          dotElement.classList.add('dot');
          if (i === currentPage) {
              dotElement.classList.add('active');
          }
          dotElement.textContent = i;

          dotElement.addEventListener('click', function () {
              showCards(i);
          });

          pagination.appendChild(dotElement);
      }
  }

  // Inicialmente, mostra a primeira página
  showCards(1);

  

});



document.addEventListener('DOMContentLoaded', function () {
    // Função para obter o ano atual
    function getCurrentYear() {
        return new Date().getFullYear();
    }

    // Atualiza o ano inicial
    updateYear();

    // Atualiza o ano a cada segundo (pode ser ajustado conforme necessário)
    setInterval(updateYear, 1000);

    // Função para atualizar o ano no elemento span
    function updateYear() {
        const currentYearElement = document.getElementById('currentYear');
        if (currentYearElement) {
            currentYearElement.textContent = getCurrentYear();
        }
    }
});


// contato

document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', function (event) {
            event.preventDefault();

            // Obtendo os dados do formulário
            const formData = new FormData(contactForm);
            const formDataObject = {};
            formData.forEach((value, key) => {
                formDataObject[key] = value;
            });

            // Simulando o envio dos dados para um servidor
            // Em um ambiente real, você deve usar uma chamada AJAX para enviar os dados para o backend
            // Aqui, estamos apenas imprimindo os dados no console como exemplo
            console.log('Dados do formulário:', formDataObject);

            // Limpar o formulário (opcional)
            contactForm.reset();

            // Adicione a lógica para enviar os dados para o seu backend real
            // Aqui é onde você integraria seu código de backend para enviar um e-mail

            // Simulação de mensagem de sucesso (substitua isso pela lógica real)
            alert('Mensagem enviada com sucesso!');
        });
    }
});



// enviar email




// modal 

document.addEventListener('DOMContentLoaded', function () {
    // Exibe o modal quando a página é carregada
    showModal();

    // Função para exibir o modal
    function showModal() {
        const modal = document.getElementById('myModal');
        modal.style.display = 'block';
    }

    // Função para fechar o modal
    window.closeModal = function () {
        const modal = document.getElementById('myModal');
        modal.style.display = 'none';
    };
});






