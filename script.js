const perguntas = [
  { 
    pergunta: "Qual é o maior estado dos Estados Unidos em área territorial?",
    respostas: [
      "Texas",
      "Alasca",
      "Califórnia",
    ],
    correta: 1,
  },
  { 
    pergunta: "Qual cidade é conhecida como 'A Cidade Eterna'?",
    respostas: [
      "Paris",
      "Roma",
      "Atenas",
    ],
    correta: 1,
  },
  { 
    pergunta: "Qual é a capital da Austrália?",
    respostas: [
      "Melbourne",
      "Sydney",
      "Camberra",
    ],
    correta: 2,
  },
  { 
    pergunta: "Qual é o maior deserto do mundo?",
    respostas: [
      "Deserto do Saara",
      "Deserto de Gobi",
      "Deserto de Atacama",
    ],
    correta: 0,
  },
  { 
    pergunta: "Qual é a cidade mais populosa do mundo?",
    respostas: [
      "Pequim, China",
      "Tóquio, Japão",
      "Nova Delhi, Índia",
    ],
    correta: 1,
  },
  { 
    pergunta: "Qual é o maior rio do mundo em volume de água?",
    respostas: [
      "Rio Nilo",
      "Rio Amazonas",
      "Rio Yangtze",
    ],
    correta: 1,
  },
  { 
    pergunta: "Qual país é conhecido como 'A Terra do Sol Nascente'?",
    respostas: [
      "China",
      "Índia",
      "Japão",
    ],
    correta: 2,
  },
  { 
    pergunta: "Qual é o monumento mais visitado da França?",
    respostas: [
      "Torre Eiffel",
      "Arco do Triunfo",
      "Museu do Louvre",
    ],
    correta: 0,
  },
  { 
    pergunta: "Em que país podemos visitar a Grande Muralha?",
    respostas: [
      "Japão",
      "Índia",
      "China",
    ],
    correta: 2,
  },
  { 
    pergunta: "Qual é o ponto mais alto da Terra?",
    respostas: [
      "Monte Kilimanjaro",
      "Monte Everest",
      "Monte Fuji",
    ],
    correta: 1,
  },
];

// a função (querySelector) seleciona literalmente o elemento na DOM (Document Object Model)
const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')

// a função (newSet) atribui um valor sem considerar o valor anterior em uma nova variavel
const corretas = new Set()
const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector('#acertos span')
mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
for (const item of perguntas) {
// a função (cloneNode) é um loop ou repetição de um bloco de código
  const quizItem = template.content.cloneNode(true)
  quizItem.querySelector('h3').textContent = item.pergunta

// for(para) a variavel(let = resposta) do item(respostas)
  for (let resposta of item.respostas) 
      {
// aqui todo o conteúdo de repetição(cloneNode) é guardado na variavel(dt)

    const dt = quizItem.querySelector('dl dt').cloneNode(true)
// a função (textContent) atribui um novo valor ao elemento
    dt.querySelector('span').textContent = resposta
// aqui o elemento(span) recebe o conteúdo da variavel(resposta)
    dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
// a função (indexOf) pesquisa o índice de um elemento

// selecionar a opção de resposta correta do [array = conjunto de elementos] {resposta}
    dt.querySelector('input').value = item.respostas.indexOf(resposta)
    dt.querySelector('input').onchange = (event) => {
// 'operador lógico de comparação ==' retorna um valor (boolean 'verdadeiro ou falso')
      const estaCorreta = event.target.value == item.correta

      corretas.delete(item)
// função if (se) o valor estiver correto entrará no escopo, senão depende de outro escopo
      if (estaCorreta) {
        corretas.add(item)
      }

  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
    }
  quizItem.querySelector('dl').appendChild(dt)
        }
  quizItem.querySelector('dl dt').remove()


// adiciona a pergunta na tela
  quiz.appendChild(quizItem)
}