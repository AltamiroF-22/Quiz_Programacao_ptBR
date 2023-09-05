const data = [
   {
     question: "O que é Vanilla JavaScript?",
     options: [
       "JavaScript puro",
       "Uma biblioteca JavaScript",
       "Um framework JavaScript",
       "Um compilador de JavaScript",
     ],
     answer: "JavaScript puro",
   },
   {
     question: "Com qual instrução declaramos uma constante em JavaScript?",
     options: ["const", "let", "var", "define"],
     answer: "const",
   },
   {
     question: "Qual dos tipos de dado a seguir não existe em JavaScript?",
     options: ["string", "number", "boolean", "float"],
     answer: "float",
   },
   {
     question: "Qual dos métodos a seguir seleciona um elemento?",
     options: ["querySelector", "parseInt", "sort", "reduce"],
     answer: "querySelector",
   },
   {
     question:
       "Qual destas propriedades da a quantidade de elementos de um array?",
     options: ["qty", "length", "items", "index"],
     answer: "length",
   },
   {
    question: "O que é um loop 'for'?",
    options: ["Um carro rápido", "Uma estrutura de controle de fluxo", "Um tipo de dado em JavaScript", "Uma função de console"],
    answer: "Uma estrutura de controle de fluxo",
  },
  {
    question: "O que significa 'HTML'?",
    options: ["Hypertext Markup Language", "High-Level Text Management Language", "Hyperlink and Text Markup Language", "Home Tool for Multi-Language"],
    answer: "Hypertext Markup Language",
  },
  {
    question: "Qual é o operador de igualdade estrita em JavaScript?",
    options: ["===", "==", "=", "!=="],
    answer: "===",
  },
  {
    question: "O que é 'CSS'?",
    options: ["Cascading Style Sheet", "Computer Style Sheet", "Creative Style Sheet", "Cascading System Style"],
    answer: "Cascading Style Sheet",
  },
  {
    question: "Qual é o elemento raiz em um documento HTML?",
    options: ["<html>", "<head>", "<body>", "<root>"],
    answer: "<html>",
  },
  {
    question: "O que é um array em JavaScript?",
    options: ["Um tipo de dado que armazena múltiplos valores", "Um operador lógico", "Uma função para fazer cálculos", "Uma declaração de variável"],
    answer: "Um tipo de dado que armazena múltiplos valores",
  },
  {
    question: "Qual é o resultado da expressão '2 + 2 * 3'?",
    options: ["6", "8", "10", "12"],
    answer: "8",
  },
  {
    question: "O que significa 'HTTP'?",
    options: ["Hypertext Transfer Protocol", "High-Level Text Transmission Protocol", "Hyperlink and Text Transfer Protocol", "Home Tool for Text Handling and Presentation"],
    answer: "Hypertext Transfer Protocol",
  },
  {
    question: "Qual é a finalidade do operador 'typeof' em JavaScript?",
    options: ["Verificar o tipo de uma variável", "Realizar uma operação de multiplicação", "Concatenar strings", "Definir uma função"],
    answer: "Verificar o tipo de uma variável",
  },
  {
    question: "O que é um evento 'click' em JavaScript?",
    options: ["Uma operação matemática", "Uma ação do usuário ao clicar em um elemento", "Uma declaração de variável", "Um loop"],
    answer: "Uma ação do usuário ao clicar em um elemento",
  },
  {
    question: "Qual é o resultado da operação 3 + 5?",
    options: ["7", "8", "9", "10"],
    answer: "8",
  },
  {
    question: "O que é um objeto em JavaScript?",
    options: ["Um tipo de dado primitivo", "Um operador aritmético", "Uma função matemática", "Uma coleção de pares chave-valor"],
    answer: "Uma coleção de pares chave-valor",
  },
  {
    question: "Qual é a sintaxe correta para um comentário de uma única linha em JavaScript?",
    options: ["// Comentário", "/* Comentário */", "<!-- Comentário -->", "/* Comentário //"],
    answer: "// Comentário",
  },
  {
    question: "Qual é a palavra-chave utilizada para declarar uma variável em JavaScript?",
    options: ["var", "variable", "let", "const"],
    answer: "var",
  },
  {
    question: "O que é um loop 'while' em JavaScript?",
    options: ["Um loop que executa um bloco de código até que uma condição seja verdadeira", "Um loop que executa um número fixo de vezes", "Um loop que executa um bloco de código apenas uma vez", "Um loop que nunca termina"],
    answer: "Um loop que executa um bloco de código até que uma condição seja verdadeira",
  },
  {
    question: "Qual é a função do operador '&&' em JavaScript?",
    options: ["Concatenar strings", "Realizar uma operação de adição", "Realizar uma operação de subtração", "Avaliar duas expressões lógicas e retornar verdadeiro se ambas forem verdadeiras"],
    answer: "Avaliar duas expressões lógicas e retornar verdadeiro se ambas forem verdadeiras",
  },
  {
    question: "Qual é o valor padrão de uma variável não inicializada em JavaScript?",
    options: ["0", "null", "undefined", "false"],
    answer: "undefined",
  },
  {
    question: "O que é um evento 'keydown' em JavaScript?",
    options: ["Um evento de clique", "Um evento de pressionar uma tecla", "Um evento de movimento do mouse", "Um evento de duplo clique"],
    answer: "Um evento de pressionar uma tecla",
  },
  {
    question: "Qual é a função do método 'push()' em um array em JavaScript?",
    options: ["Remover um elemento do array", "Adicionar um elemento ao início do array", "Adicionar um elemento ao final do array", "Inverter a ordem dos elementos no array"],
    answer: "Adicionar um elemento ao final do array",
  },
  {
    question: "O que é o DOM em JavaScript?",
    options: ["Um método de criptografia", "Um modelo de objeto de documento", "Uma estrutura de controle de fluxo", "Uma linguagem de programação"],
    answer: "Um modelo de objeto de documento",
  },
  {
    question: "Qual é a função do operador '||' em JavaScript?",
    options: ["Concatenar strings", "Realizar uma operação de multiplicação", "Realizar uma operação de divisão", "Avaliar duas expressões lógicas e retornar verdadeiro se pelo menos uma delas for verdadeira"],
    answer: "Avaliar duas expressões lógicas e retornar verdadeiro se pelo menos uma delas for verdadeira",
  },
  {
    question: "Qual é a finalidade do método 'split()' em JavaScript?",
    options: ["Dividir uma string em um array de substrings", "Unir dois arrays", "Converter um número em uma string", "Remover um elemento de um array"],
    answer: "Dividir uma string em um array de substrings",
  },
  {
    question: "Qual é a função do operador '!=' em JavaScript?",
    options: ["Verificar igualdade estrita", "Verificar desigualdade estrita", "Verificar igualdade solta", "Verificar desigualdade solta"],
    answer: "Verificar desigualdade estrita",
  },
  {
    question: "O que é uma função de callback em JavaScript?",
    options: ["Uma função que retorna um valor", "Uma função que chama outra função", "Uma função que recebe outra função como argumento", "Uma função que realiza operações de matemática avançada"],
    answer: "Uma função que recebe outra função como argumento",
  },
  {
    question: "Qual é o operador de atribuição em JavaScript?",
    options: ["+", "-", "=", "=="],
    answer: "=",
  },
  {
    question: "O que é uma expressão regular em JavaScript?",
    options: ["Uma sequência de números", "Um tipo de dado", "Um padrão de pesquisa de texto", "Um operador lógico"],
    answer: "Um padrão de pesquisa de texto",
  },
  {
    question: "O que é o método 'parseInt()' em JavaScript?",
    options: ["Um método para converter uma string em um número inteiro", "Um método para ordenar um array", "Um método para adicionar elementos a um array", "Um método para criar um objeto"],
    answer: "Um método para converter uma string em um número inteiro",
  },
  {
    question: "Qual é a função do método 'toFixed()' em JavaScript?",
    options: ["Arredondar um número para o número inteiro mais próximo", "Converter um número em uma string", "Remover casas decimais de um número", "Dividir um número por outro"],
    answer: "Converter um número em uma string",
  },
  {
    question: "O que é o operador '===' em JavaScript?",
    options: ["Verificar igualdade estrita", "Verificar desigualdade estrita", "Verificar igualdade solta", "Verificar desigualdade solta"],
    answer: "Verificar igualdade estrita",
  },
  {
    question: "O que é um operador ternário em JavaScript?",
    options: ["Um operador que trabalha com três números", "Um operador lógico", "Um operador que aceita três operandos e retorna um valor com base em uma condição", "Um operador para concatenar strings"],
    answer: "Um operador que aceita três operandos e retorna um valor com base em uma condição",
  },
  {
    question: "Qual é o método usado para remover o último elemento de um array em JavaScript?",
    options: ["pop()", "push()", "shift()", "unshift()"],
    answer: "pop()",
  },
  {
    question: "O que é 'NaN' em JavaScript?",
    options: ["Um número negativo", "Uma abreviação de 'não é um número'", "Uma variável global", "Um valor booleano"],
    answer: "Uma abreviação de 'não é um número'",
  },
  {
    question: "O que é 'JSON' em JavaScript?",
    options: ["Um tipo de dado numérico", "Um formato de troca de dados baseado em texto", "Um operador de incremento", "Uma função matemática"],
    answer: "Um formato de troca de dados baseado em texto",
  },
  {
    question: "Qual é o operador de atribuição composta para adicionar e atribuir em JavaScript?",
    options: ["++", "+=", "--", "-="],
    answer: "+=",
  },
  {
    question: "Qual é a finalidade do método 'map()' em arrays em JavaScript?",
    options: ["Remover um elemento de um array", "Transformar cada elemento do array e criar um novo array com os resultados", "Adicionar elementos a um array", "Classificar os elementos de um array"],
    answer: "Transformar cada elemento do array e criar um novo array com os resultados",
  },
 ];
 
 export default data;