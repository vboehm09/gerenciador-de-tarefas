//Etapa 1
let tarefas = ['Estudar JavaScript', 'Fazer exercícios de matemática', 'Lavar a louça', 'Comprar mercado', 'Ir à academia', 'Ler um livro', 'Fazer revisão para o teste', 'Limpar o quarto', 'Estudar para concurso', 'Organizar o computador'];

tarefas.push(`Ir ao médico`, `Comprar pão`);

console.log(`Com as tarefas novas:`, tarefas);

//Etapa 2
let ultimaTarefaRemovida = tarefas.pop();

console.log(`Tarefa removida: ${ultimaTarefaRemovida}`);

console.log(`Depois de remover a tarefa: ${tarefas}`);

