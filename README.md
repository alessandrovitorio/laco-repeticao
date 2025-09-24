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
````

### Exemplo 1: contar de 1 a 5

```javascript
let numero = 1;

while (numero <= 5) {
  console.log(numero);
  numero = numero + 1; // soma 1 a cada repetição
}
```

### Exemplo 2: pedir até digitar 0

```javascript
let valor = -1;

while (valor !== 0) {
  valor = Number(prompt("Digite um número (0 para sair):"));
}
```

---

# 🔁 O `for`

### Conceito

O `for` é outra forma de escrever um laço.
Ele já coloca **início, condição e atualização** na mesma linha.

### Sintaxe

```javascript
for (inicializacao; condicao; atualizacao) {
  // código repetido
}
```

### Exemplo: contar de 1 a 5

```javascript
for (let numero = 1; numero <= 5; numero = numero + 1) {
  console.log(numero);
}
```

### Exemplo: tabuada do 3

```javascript
for (let i = 1; i <= 10; i = i + 1) {
  console.log("3 x " + i + " = " + (3 * i));
}
```

---

# 🔂 O `do...while`

### Conceito

O `do...while` garante que o código vai **rodar pelo menos uma vez**,
mesmo que a condição seja falsa desde o começo.

### Sintaxe

```javascript
do {
  // executa primeiro
} while (condicao);
```

### Exemplo: pedir senha

```javascript
let senha;

do {
  senha = prompt("Digite a senha:");
} while (senha !== "1234");

console.log("Acesso liberado!");
```

---

# 📊 Comparativo rápido

| Estrutura      | Executa ao menos uma vez? | Melhor quando...                      |
| -------------- | ------------------------- | ------------------------------------- |
| **while**      | ❌ Não                     | Não sabemos quantas vezes vai repetir |
| **for**        | ❌ Não                     | Já sabemos quantas vezes vai repetir  |
| **do...while** | ✅ Sim                     | Precisa rodar pelo menos uma vez      |

---

# 🎯 Como escolher?

* **Use `while`** quando **não sabe quantas vezes** vai repetir.
* **Use `for`** quando **já sabe quantas vezes** vai repetir.
* **Use `do...while`** quando precisa rodar o código **pelo menos uma vez**.

---

# 🕹️ Exercícios sugeridos

1. Usando `while`, mostre os números de 1 a 10.
2. Usando `for`, mostre a tabuada do número 5.
3. Usando `while`, crie uma contagem regressiva de 10 até 1 e ao final escreva `"🚀 Decolar!"`.
4. Usando `do...while`, peça ao usuário um número até que ele digite `0`.

```

---

