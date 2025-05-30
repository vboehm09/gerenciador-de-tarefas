/*Exercício 3 - Último produto com defeito
Em um sistema de controle de qualidade, foi identificado que o último item da lista de produção apresenta defeito. Remova esse item da lista*/

let producao = [
    "mousepad",
    "placa de vídeo",
    "fonte de alimentação",
    "HD externo",
    "notebook gamer",
    "roteador"
  ];
  
producao.pop();
console.log(`O último item foi removido: ${producao}`);
