// ===================================================
// EXEMPLOS AVANÇADOS - ALGORITMOS E ESTRUTURAS DE DADOS
// ===================================================

console.log("=== ALGORITMOS E ESTRUTURAS DE DADOS COM LAÇOS ===\n");

// ===================================================
// 1. ALGORITMOS DE ORDENAÇÃO
// ===================================================

// Bubble Sort
function bubbleSort(array) {
    console.log("🔄 Executando Bubble Sort...");
    const arr = [...array];
    const n = arr.length;
    let trocas = 0;
    
    for (let i = 0; i < n - 1; i++) {
        let trocouNaPassagem = false;
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // Troca os elementos
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                trocas++;
                trocouNaPassagem = true;
            }
        }
        // Otimização: se não houve troca, o array já está ordenado
        if (!trocouNaPassagem) break;
    }
    
    console.log(`   Número de trocas: ${trocas}`);
    return arr;
}

// Selection Sort
function selectionSort(array) {
    console.log("🔄 Executando Selection Sort...");
    const arr = [...array];
    const n = arr.length;
    let comparacoes = 0;
    
    for (let i = 0; i < n - 1; i++) {
        let menorIndice = i;
        
        for (let j = i + 1; j < n; j++) {
            comparacoes++;
            if (arr[j] < arr[menorIndice]) {
                menorIndice = j;
            }
        }
        
        if (menorIndice !== i) {
            [arr[i], arr[menorIndice]] = [arr[menorIndice], arr[i]];
        }
    }
    
    console.log(`   Número de comparações: ${comparacoes}`);
    return arr;
}

// Insertion Sort
function insertionSort(array) {
    console.log("🔄 Executando Insertion Sort...");
    const arr = [...array];
    let deslocamentos = 0;
    
    for (let i = 1; i < arr.length; i++) {
        let chave = arr[i];
        let j = i - 1;
        
        while (j >= 0 && arr[j] > chave) {
            arr[j + 1] = arr[j];
            j--;
            deslocamentos++;
        }
        arr[j + 1] = chave;
    }
    
    console.log(`   Número de deslocamentos: ${deslocamentos}`);
    return arr;
}

// Testando algoritmos de ordenação
console.log("=== COMPARAÇÃO DE ALGORITMOS DE ORDENAÇÃO ===");
const arrayDesordenado = [64, 34, 25, 12, 22, 11, 90, 5, 77, 30];
console.log("Array original:", arrayDesordenado);
console.log();

console.log("Resultado Bubble Sort:", bubbleSort(arrayDesordenado));
console.log("Resultado Selection Sort:", selectionSort(arrayDesordenado));
console.log("Resultado Insertion Sort:", insertionSort(arrayDesordenado));
console.log();

// ===================================================
// 2. ALGORITMOS DE BUSCA
// ===================================================

// Busca Linear com estatísticas
function buscaLinearAvancada(array, elemento) {
    let comparacoes = 0;
    let posicaoEncontrada = -1;
    
    for (let i = 0; i < array.length; i++) {
        comparacoes++;
        if (array[i] === elemento) {
            posicaoEncontrada = i;
            break;
        }
    }
    
    return {
        encontrado: posicaoEncontrada !== -1,
        posicao: posicaoEncontrada,
        comparacoes: comparacoes
    };
}

// Busca Binária (requer array ordenado)
function buscaBinaria(array, elemento) {
    let inicio = 0;
    let fim = array.length - 1;
    let comparacoes = 0;
    
    while (inicio <= fim) {
        comparacoes++;
        let meio = Math.floor((inicio + fim) / 2);
        
        if (array[meio] === elemento) {
            return {
                encontrado: true,
                posicao: meio,
                comparacoes: comparacoes
            };
        }
        
        if (array[meio] < elemento) {
            inicio = meio + 1;
        } else {
            fim = meio - 1;
        }
    }
    
    return {
        encontrado: false,
        posicao: -1,
        comparacoes: comparacoes
    };
}

// Testando algoritmos de busca
console.log("=== COMPARAÇÃO DE ALGORITMOS DE BUSCA ===");
const arrayOrdenado = [5, 11, 12, 22, 25, 30, 34, 64, 77, 90];
const elementoBuscado = 25;

console.log("Array ordenado:", arrayOrdenado);
console.log(`Buscando elemento: ${elementoBuscado}\n`);

const resultadoLinear = buscaLinearAvancada(arrayOrdenado, elementoBuscado);
console.log("Busca Linear:");
console.log(`   Encontrado: ${resultadoLinear.encontrado}`);
console.log(`   Posição: ${resultadoLinear.posicao}`);
console.log(`   Comparações: ${resultadoLinear.comparacoes}`);

const resultadoBinario = buscaBinaria(arrayOrdenado, elementoBuscado);
console.log("Busca Binária:");
console.log(`   Encontrado: ${resultadoBinario.encontrado}`);
console.log(`   Posição: ${resultadoBinario.posicao}`);
console.log(`   Comparações: ${resultadoBinario.comparacoes}`);
console.log();

// ===================================================
// 3. ESTRUTURAS DE DADOS PERSONALIZADAS
// ===================================================

// Lista Ligada Simples
class No {
    constructor(dado) {
        this.dado = dado;
        this.proximo = null;
    }
}

class ListaLigada {
    constructor() {
        this.cabeca = null;
        this.tamanho = 0;
    }
    
    adicionar(dado) {
        const novoNo = new No(dado);
        
        if (!this.cabeca) {
            this.cabeca = novoNo;
        } else {
            let atual = this.cabeca;
            while (atual.proximo) {
                atual = atual.proximo;
            }
            atual.proximo = novoNo;
        }
        this.tamanho++;
    }
    
    remover(dado) {
        if (!this.cabeca) return false;
        
        if (this.cabeca.dado === dado) {
            this.cabeca = this.cabeca.proximo;
            this.tamanho--;
            return true;
        }
        
        let atual = this.cabeca;
        while (atual.proximo && atual.proximo.dado !== dado) {
            atual = atual.proximo;
        }
        
        if (atual.proximo) {
            atual.proximo = atual.proximo.proximo;
            this.tamanho--;
            return true;
        }
        
        return false;
    }
    
    buscar(dado) {
        let atual = this.cabeca;
        let posicao = 0;
        
        while (atual) {
            if (atual.dado === dado) {
                return posicao;
            }
            atual = atual.proximo;
            posicao++;
        }
        
        return -1;
    }
    
    listar() {
        const elementos = [];
        let atual = this.cabeca;
        
        while (atual) {
            elementos.push(atual.dado);
            atual = atual.proximo;
        }
        
        return elementos;
    }
    
    inverter() {
        let anterior = null;
        let atual = this.cabeca;
        let proximo = null;
        
        while (atual) {
            proximo = atual.proximo;
            atual.proximo = anterior;
            anterior = atual;
            atual = proximo;
        }
        
        this.cabeca = anterior;
    }
}

// Testando Lista Ligada
console.log("=== ESTRUTURA DE DADOS: LISTA LIGADA ===");
const lista = new ListaLigada();

// Adicionando elementos
const elementos = [10, 20, 30, 40, 50];
elementos.forEach(elemento => lista.adicionar(elemento));

console.log("Lista original:", lista.listar());
console.log("Tamanho:", lista.tamanho);

// Buscando elementos
console.log("Posição do elemento 30:", lista.buscar(30));
console.log("Posição do elemento 100:", lista.buscar(100));

// Removendo elemento
lista.remover(20);
console.log("Após remover 20:", lista.listar());

// Invertendo lista
lista.inverter();
console.log("Lista invertida:", lista.listar());
console.log();

// ===================================================
// 4. ALGORITMOS DE MATEMÁTICA COMPUTACIONAL
// ===================================================

// Sequência de Fibonacci
function fibonacciIterativo(n) {
    console.log(`🔢 Calculando Fibonacci de ${n} (iterativo):`);
    
    if (n <= 1) return n;
    
    let sequencia = [0, 1];
    let a = 0, b = 1;
    
    for (let i = 2; i <= n; i++) {
        let proximo = a + b;
        sequencia.push(proximo);
        a = b;
        b = proximo;
    }
    
    console.log(`   Sequência: ${sequencia.slice(-10).join(', ')}...`);
    return b;
}

// Números Primos usando Crivo de Eratóstenes
function crivoEratostenes(limite) {
    console.log(`🔍 Encontrando números primos até ${limite}:`);
    
    const ehPrimo = new Array(limite + 1).fill(true);
    ehPrimo[0] = ehPrimo[1] = false;
    
    for (let i = 2; i * i <= limite; i++) {
        if (ehPrimo[i]) {
            for (let j = i * i; j <= limite; j += i) {
                ehPrimo[j] = false;
            }
        }
    }
    
    const primos = [];
    for (let i = 2; i <= limite; i++) {
        if (ehPrimo[i]) {
            primos.push(i);
        }
    }
    
    console.log(`   Primeiros 10 primos: ${primos.slice(0, 10).join(', ')}`);
    console.log(`   Total de primos encontrados: ${primos.length}`);
    return primos;
}

// Máximo Divisor Comum (MDC) usando Algoritmo de Euclides
function mdc(a, b) {
    console.log(`📐 Calculando MDC de ${a} e ${b}:`);
    let passos = [];
    
    while (b !== 0) {
        passos.push(`${a} = ${Math.floor(a/b)} × ${b} + ${a % b}`);
        let temp = b;
        b = a % b;
        a = temp;
    }
    
    passos.forEach((passo, i) => console.log(`   Passo ${i + 1}: ${passo}`));
    console.log(`   Resultado: ${a}`);
    return a;
}

// Testando algoritmos matemáticos
console.log("=== ALGORITMOS MATEMÁTICOS ===");

// Fibonacci
const fib15 = fibonacciIterativo(15);
console.log(`Fibonacci(15) = ${fib15}\n`);

// Números primos
const primosAte50 = crivoEratostenes(50);
console.log();

// MDC
const resultadoMDC = mdc(48, 18);
console.log();

// ===================================================
// 5. PROCESSAMENTO DE TEXTO E STRINGS
// ===================================================

// Análise de frequência de caracteres
function analisarFrequencia(texto) {
    console.log("📊 Análise de frequência de caracteres:");
    console.log(`Texto: "${texto}"\n`);
    
    const frequencia = {};
    const textoLimpo = texto.toLowerCase().replace(/[^a-záàâãéêíóôõúç]/g, '');
    
    // Contando caracteres
    for (let char of textoLimpo) {
        frequencia[char] = (frequencia[char] || 0) + 1;
    }
    
    // Convertendo para array e ordenando por frequência
    const frequenciaOrdenada = Object.entries(frequencia)
        .sort((a, b) => b[1] - a[1]);
    
    console.log("Frequência por caractere:");
    frequenciaOrdenada.forEach(([char, freq]) => {
        const barra = '█'.repeat(Math.floor(freq * 3));
        console.log(`   ${char}: ${freq} ${barra}`);
    });
    
    return frequencia;
}

// Busca de padrões (algoritmo KMP simplificado)
function buscarPadrao(texto, padrao) {
    console.log(`🔍 Buscando padrão "${padrao}" no texto:`);
    console.log(`"${texto}"\n`);
    
    const ocorrencias = [];
    
    for (let i = 0; i <= texto.length - padrao.length; i++) {
        let encontrou = true;
        
        for (let j = 0; j < padrao.length; j++) {
            if (texto[i + j] !== padrao[j]) {
                encontrou = false;
                break;
            }
        }
        
        if (encontrou) {
            ocorrencias.push(i);
        }
    }
    
    if (ocorrencias.length > 0) {
        console.log(`Padrão encontrado nas posições: ${ocorrencias.join(', ')}`);
        ocorrencias.forEach(pos => {
            const inicio = Math.max(0, pos - 10);
            const fim = Math.min(texto.length, pos + padrao.length + 10);
            const contexto = texto.substring(inicio, fim);
            const marcador = ' '.repeat(pos - inicio) + '^'.repeat(padrao.length);
            console.log(`   ...${contexto}...`);
            console.log(`   ...${marcador}...`);
        });
    } else {
        console.log("Padrão não encontrado.");
    }
    
    return ocorrencias;
}

// Testando processamento de texto
console.log("=== PROCESSAMENTO DE TEXTO ===");

const textoExemplo = "A programação com JavaScript é muito interessante e JavaScript é versátil";
analisarFrequencia(textoExemplo);
console.log();

buscarPadrao(textoExemplo, "JavaScript");
console.log();

// ===================================================
// 6. SIMULAÇÕES E JOGOS
// ===================================================

// Simulação de Jogo da Vida de Conway (versão simplificada)
class JogoDaVida {
    constructor(largura, altura) {
        this.largura = largura;
        this.altura = altura;
        this.grade = this.criarGrade();
        this.geracao = 0;
    }
    
    criarGrade() {
        const grade = [];
        for (let i = 0; i < this.altura; i++) {
            grade[i] = [];
            for (let j = 0; j < this.largura; j++) {
                grade[i][j] = Math.random() < 0.3 ? 1 : 0;
            }
        }
        return grade;
    }
    
    contarVizinhos(x, y) {
        let count = 0;
        for (let i = -1; i <= 1; i++) {
            for (let j = -1; j <= 1; j++) {
                if (i === 0 && j === 0) continue;
                
                const nx = x + i;
                const ny = y + j;
                
                if (nx >= 0 && nx < this.altura && ny >= 0 && ny < this.largura) {
                    count += this.grade[nx][ny];
                }
            }
        }
        return count;
    }
    
    proximaGeracao() {
        const novaGrade = [];
        
        for (let i = 0; i < this.altura; i++) {
            novaGrade[i] = [];
            for (let j = 0; j < this.largura; j++) {
                const vizinhos = this.contarVizinhos(i, j);
                const celulaAtual = this.grade[i][j];
                
                if (celulaAtual === 1) {
                    // Célula viva
                    novaGrade[i][j] = (vizinhos === 2 || vizinhos === 3) ? 1 : 0;
                } else {
                    // Célula morta
                    novaGrade[i][j] = (vizinhos === 3) ? 1 : 0;
                }
            }
        }
        
        this.grade = novaGrade;
        this.geracao++;
    }
    
    exibir() {
        console.log(`Geração ${this.geracao}:`);
        for (let i = 0; i < this.altura; i++) {
            let linha = "";
            for (let j = 0; j < this.largura; j++) {
                linha += this.grade[i][j] === 1 ? "██" : "  ";
            }
            console.log(linha);
        }
        console.log();
    }
    
    contarCelulasVivas() {
        let count = 0;
        for (let i = 0; i < this.altura; i++) {
            for (let j = 0; j < this.largura; j++) {
                count += this.grade[i][j];
            }
        }
        return count;
    }
}

// Simulando o Jogo da Vida
console.log("=== SIMULAÇÃO: JOGO DA VIDA DE CONWAY ===");
const jogo = new JogoDaVida(10, 8);

for (let i = 0; i < 5; i++) {
    jogo.exibir();
    console.log(`Células vivas: ${jogo.contarCelulasVivas()}`);
    console.log("─".repeat(25));
    jogo.proximaGeracao();
}

console.log("=== FIM DOS EXEMPLOS AVANÇADOS ===");