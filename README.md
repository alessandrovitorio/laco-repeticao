# 🔄 Laços de Repetição em JavaScript

Uma parte central da lógica de programação é saber repetir ações sem reescrever código: é aí que entram os laços de repetição. Este documento explica por que existem, onde aplicamos, traz analogias criativas, exemplos reais e detalha while, for e do...while, com comparativos e critérios práticos para escolher qual usar.

---

## ✨ Por que eles existem?

- **Evitar repetição de código** → ninguém merece copiar e colar 100 vezes a mesma linha.  
- **Automatizar tarefas** → o computador é ótimo em repetir ações de forma rápida e precisa.  
- **Modelar a realidade** → muitas situações do dia a dia são repetitivas (contar, validar, percorrer listas).  

💡 **Analogia criativa**: imagine que você precisa lavar uma pilha de pratos. Você não escreve "lavar prato 1", "lavar prato 2"... até o último.  
Você pensa:  
> *“Enquanto houver pratos na pia, continue lavando.”*  

Isso é exatamente a lógica de um `while`.

---

## 📍 Onde aplicamos?

- Percorrer arrays e listas.  
- Pedir uma entrada até estar correta.  
- Processar páginas de uma API até não haver mais dados.  
- Criar loops de jogos (atualização de estado e renderização).  
- Calcular médias, totais ou estatísticas de grandes conjuntos de dados.  

---

## 🧩 Conceitos fundamentais

Todo laço tem 3 partes principais:

1. **Inicialização** → onde começa.  
2. **Condição** → até quando deve repetir.  
3. **Atualização** → como mudar a variável de controle para se aproximar do fim.  

---

# 🌀 O `while`

### Conceito
O `while` executa um bloco **enquanto a condição for verdadeira**.  
Se a condição começar falsa, o bloco **não executa nenhuma vez**.

### Sintaxe
```javascript
while (condicao) {
  // código que será repetido
}
