/* Exercício 2 - Expansão de cardápio
Uma lanchonete digital possui um menu com pratos principais. O chef pediu que fossem adicionados dois novos itens no final da lista para a próxima semana. Os itens são: "hambúrguer artesanal" e "wrap de frango". Atualize o cardápio.*/ 

let cardapio = [
    "pizza de calabresa",
    "lasanha",
    "sushi",
    "salada Caesar",
    "pastel",
    "yakisoba",
    "feijoada"
  ];

cardapio.push(`hambúrguer artesanal`, `wrap de frango`)

console.table(cardapio)