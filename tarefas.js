//Etapa 1
let tarefas = ['Estudar JavaScript', 'Fazer exercícios de matemática', 'Lavar a louça', 'Comprar mercado', 'Ir à academia', 'Ler um livro', 'Fazer revisão para o teste', 'Limpar o quarto', 'Estudar para concurso', 'Organizar o computador'];

tarefas.push(`Ir ao médico`, `Comprar pão`);

console.log(`Com as tarefas novas:`, tarefas);

//Etapa 2
let ultimaTarefaRemovida = tarefas.pop();

console.log(`Tarefa removida: ${ultimaTarefaRemovida}`);

console.log(`Depois de remover a tarefa: ${tarefas}`);

//Etapa 3

tarefas.unshift(`Assistir um filme`);

console.log(`Depois de adicionar uma nova tarefa ${tarefas}`);

//Etapa 4 

tarefas.shift();

console.log(`Com a primeira tarefa removida: ${tarefas}`);

//Etapa 5

console.log(`Nas tarefas inclui Ir à academia?: ${tarefas.includes("Ir à academia")} `);

//Etapa 6

console.log(`Tarefas com string: ${tarefas.join(', ')}`);

//Etapa 7 

console.log(`Parte da tarefa (índices 2 a 4): ${tarefas.slice(2, 5)}`);

//Etapa 8

console.table(tarefas);
let tarefasRemovidas = tarefas.splice(3, 1, "Passear com o pet");
console.table(tarefasRemovidas);
console.table(tarefas);

//Etapa 9 

let tarefasNovas = ["Comprar roupa", "Arrumar cama", "Lavar roupa"];

console.log(`Tarefas combinadas: ${tarefas.concat(tarefasNovas).join(',')}`);

//Etapa 10

let palavraNova = "Fazer:"
let arrayModificado = tarefas.map(elemento => palavraNova + elemento);
const stringFinal = arrayModificado.join(', ');
console.log(stringFinal);

//Etapa 11 

let tarefasFiltradas = tarefas.filter(tarefa => tarefa.length > 15);
console.log("Tarefas filtradas (tarefas com mais de 15 caracteres:)", tarefasFiltradas);
