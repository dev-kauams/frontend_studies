// ==========================================
// AULA 02: Tomando Decisões (O Porteiro)
// ==========================================

const idadeDoUsuario = 17;
const temCarteirinhaVip = true;

console.log("--- TENTATIVA DE ENTRADA NA BALADA ---");

/*
  ESTRUTURA IF / ELSE (Se / Senão)
  
  if (condição for verdadeira) {
     faça isso aqui;
  } else {
     faça aquilo lá;
  }
*/

// O símbolo >= significa "Maior ou Igual"
if (idadeDoUsuario >= 18) {
    console.log("Pode entrar. Bebida liberada.");
} else {
    console.log("Barrado! Você é menor de idade.");
}

/*
  OPERADORES LÓGICOS (As ferramentas de decisão)
  && (E) -> As DUAS coisas precisam ser verdadeiras.
  || (OU) -> Pelo menos UMA coisa precisa ser verdadeira.
  !  (NÃO) -> Inverte a lógica (True vira False).
*/

// Exemplo com && (AND): Precisa ter 18 ANOS "E" ser VIP.
if (idadeDoUsuario >= 18 && temCarteirinhaVip) {
    console.log("Acesso à área VIP liberado!");
} else {
    // Se ele for maior de 18 mas não for VIP, cai aqui.
    // Se ele for VIP mas for menor de 18, cai aqui também.
    console.log("Sem acesso à área VIP.");
}

// ==========================================
// 🚀 MISSÃO:
// Crie uma variável 'bateria' com um número.
// Se bateria for menor que 10, mostre "Conecte o carregador!".
// Senão, mostre "Bateria suficiente".
// ==========================================