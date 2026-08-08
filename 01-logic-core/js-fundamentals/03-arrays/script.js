// ==========================================
// AULA 03: Listas (Arrays)
// ==========================================

// Criando uma lista. Usamos colchetes [ ].
const inventario = ["Espada", "Escudo", "Poção de Vida", "Mapa"];

/*
  COMO ACESSAR OS ITENS?
  A contagem na programação SEMPRE começa no ZERO.
  0 = Espada
  1 = Escudo
  2 = Poção...
*/

console.log("Item na mão direita:", inventario[0]); // Espada
console.log("Item na mão esquerda:", inventario[1]); // Escudo

// Verificando o tamanho da mochila
console.log("Total de itens:", inventario.length); // Vai mostrar 4

/*
  MANIPULANDO A LISTA (O básico)
*/

// PUSH: Empurra um item novo para o FINAL da lista.
inventario.push("Chave do Boss");
console.log("Inventário atualizado:", inventario);

// POP: Remove o ÚLTIMO item da lista (A chave sumiu).
inventario.pop();

// ==========================================
// 🚀 MISSÃO:
// Crie uma lista com suas 3 tecnologias favoritas.
// Use o console.log para mostrar apenas a SEGUNDA tecnologia da lista.
// ==========================================