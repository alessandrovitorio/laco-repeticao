# 🔄 Laços de Repetição em JavaScript

Uma parte central da lógica de programação é saber repetir ações sem reescrever código: é aí que entram os laços de repetição. Este documento explica por que existem, onde aplicamos, traz analogias criativas, exemplos reais e detalha while, for e do...while, com comparativos e critérios práticos para escolher qual usar.

---

## ✨ Por que os laços existem?

- **Evitar repetição** → ao invés de escrever `console.log("Olá")` dez vezes, usamos um loop.  
- **Automatizar tarefas** → se você precisa contar até 100, o computador faz isso em milésimos de segundo.  
- **Pensar logicamente** → loops ensinam a enxergar problemas como ciclos: *“faça até... enquanto...”*.  

💡 **Analogia do mundo real:**  
Imagine que você precisa subir 10 degraus.  
Você não pensa: “levantar o pé direito no 1º degrau, levantar o pé direito no 2º degrau...”  
Você pensa:  
> *“Enquanto não cheguei no último degrau, vou continuar subindo.”*

Isso é exatamente a ideia de um laço de repetição.

---

## 📍 Onde aplicamos?

- Contar de um número até outro.  
- Mostrar mensagens repetidas.  
- Criar uma tabuada simples.  
- Fazer uma contagem regressiva.  
- Repetir até que o usuário digite a resposta certa.  

---

# 🌀 O `while`

### Conceito
O `while` significa **“enquanto”**.  
Ele repete o bloco **enquanto a condição for verdadeira**.  
Se a condição começar falsa, o código **não executa nenhuma vez**.

### Sintaxe
```javascript
while (condicao) {
  // código repetido
}
