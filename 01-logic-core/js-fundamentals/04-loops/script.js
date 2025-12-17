// ==========================================
// AULA 04: Repetição (Loops)
// ==========================================

const listaDeTarefas = ["Estudar HTML", "Praticar CSS", "Dominar JS", "Beber Água"];

console.log("--- INICIANDO ROTINA ---");

/*
  O FOR LOOP CLÁSSICO
  Ele precisa de 3 instruções separadas por ponto-e-vírgula (;):
  1. Onde começa? (let i = 0) -> Começa no índice 0
  2. Quando para? (i < lista.length) -> Enquanto i for menor que o tamanho da lista
  3. O passo?     (i++) -> Aumenta 1 a cada volta (i = i + 1)
*/

for (let i = 0; i < listaDeTarefas.length; i++) {
    // Na primeira volta, i é 0.
    // Na segunda volta, i é 1.
    // E assim por diante...
    console.log(`Tarefa número ${i}: ${listaDeTarefas[i]}`);
}

/*
  O FOR...OF (O Jeito Moderno e Mais Fácil)
  Leia assim: "Para cada (tarefa) DE (listaDeTarefas)..."
  Ele faz tudo o que o de cima faz, mas automático.
*/
console.log("\n--- USANDO FOR..OF (Mais bonito) ---");

for (const tarefa of listaDeTarefas) {
    console.log("Fazendo agora:", tarefa);
}

// ==========================================
// 🚀 MISSÃO:
// Crie um array com 5 números.
// Faça um loop que mostre esses números multiplicados por 2.
// ==========================================