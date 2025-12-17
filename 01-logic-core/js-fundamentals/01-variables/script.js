// ==========================================
// AULA 01: Onde guardamos as coisas?
// ==========================================

/* 1. CONST (Constante)
  Imagine uma caixa lacrada com supercola.
  Uma vez que você coloca algo dentro, não pode trocar o que tem lá.
  USE ISSO EM 95% DAS VEZES.
*/
const meuNome = "Kauã";
// meuNome = "João"; // ERRO! O computador vai gritar: "Ei, essa caixa tá lacrada!"

/* 2. LET (Permite mudança)
  Imagine uma caixa aberta. Você pode tirar o que tem dentro e colocar outra coisa.
  Use apenas quando souber que o valor VAI mudar (ex: placar de jogo, contador).
*/
let vidaDoPersonagem = 100;
console.log("Vida inicial:", vidaDoPersonagem);

vidaDoPersonagem = 80; // O personagem tomou dano, trocamos o valor.
console.log("Vida após o dano:", vidaDoPersonagem);

/*
  3. TIPOS DE DADOS (O que cabe na caixa?)
*/
const texto = "Isso é uma String (Texto)";
const numero = 42; // Number (Pode ser inteiro ou quebrado tipo 10.5)
const boolean = true; // Verdadeiro ou Falso (Lógica pura: 0 ou 1)

// ==========================================
// 🚀 MISSÃO:
// Crie uma const com o nome do seu PC e um let com a temperatura dele.
// Mude a temperatura depois e mostre no console.
// ==========================================