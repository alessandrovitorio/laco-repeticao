// ===================================================
// EXEMPLOS PRÁTICOS DE LAÇOS DE REPETIÇÃO EM JAVASCRIPT
// ===================================================

console.log("=== EXEMPLOS DE LAÇOS DE REPETIÇÃO ===\n");

// ===================================================
// 1. LAÇO FOR - Exemplo básico
// ===================================================
console.log("1. LAÇO FOR - Contando de 1 a 5:");
for (let i = 1; i <= 5; i++) {
    console.log(`Número: ${i}`);
}
console.log();

// ===================================================
// 2. LAÇO WHILE - Exemplo com condição dinâmica
// ===================================================
console.log("2. LAÇO WHILE - Contador decrescente:");
let contador = 5;
while (contador > 0) {
    console.log(`Contador: ${contador}`);
    contador--;
}
console.log();

// ===================================================
// 3. LAÇO DO...WHILE - Execução garantida
// ===================================================
console.log("3. LAÇO DO...WHILE - Menu simulado:");
let opcao;
let tentativa = 0;
do {
    tentativa++;
    // Simulando entrada do usuário
    opcao = tentativa === 1 ? 0 : tentativa === 2 ? -1 : 3;
    console.log(`Tentativa ${tentativa}: Opção escolhida = ${opcao}`);
    
    if (opcao < 1 || opcao > 3) {
        console.log("Opção inválida! Tente novamente.");
    }
} while (opcao < 1 || opcao > 3);
console.log(`Opção válida escolhida: ${opcao}\n`);

// ===================================================
// 4. LAÇO FOR...IN - Iterando propriedades de objeto
// ===================================================
console.log("4. LAÇO FOR...IN - Propriedades de objeto:");
const pessoa = {
    nome: "João Silva",
    idade: 30,
    cidade: "São Paulo",
    profissao: "Desenvolvedor"
};

for (let propriedade in pessoa) {
    console.log(`${propriedade}: ${pessoa[propriedade]}`);
}
console.log();

// ===================================================
// 5. LAÇO FOR...OF - Iterando elementos de array
// ===================================================
console.log("5. LAÇO FOR...OF - Frutas favoritas:");
const frutas = ["maçã", "banana", "laranja", "uva", "manga"];
for (let fruta of frutas) {
    console.log(`🍎 ${fruta}`);
}
console.log();

// ===================================================
// 6. MÉTODO FOREACH - Processamento funcional
// ===================================================
console.log("6. MÉTODO FOREACH - Números e seus quadrados:");
const numeros = [1, 2, 3, 4, 5];
numeros.forEach((numero, indice) => {
    console.log(`Posição ${indice}: ${numero} → ${numero}² = ${numero * numero}`);
});
console.log();

// ===================================================
// EXEMPLO PRÁTICO 1: Calculadora de Fatorial
// ===================================================
console.log("=== EXEMPLO PRÁTICO 1: FATORIAL ===");

function fatorialFor(n) {
    let resultado = 1;
    for (let i = 1; i <= n; i++) {
        resultado *= i;
    }
    return resultado;
}

function fatorialWhile(n) {
    let resultado = 1;
    let i = 1;
    while (i <= n) {
        resultado *= i;
        i++;
    }
    return resultado;
}

const numero = 6;
console.log(`Fatorial de ${numero} (usando for): ${fatorialFor(numero)}`);
console.log(`Fatorial de ${numero} (usando while): ${fatorialWhile(numero)}\n`);

// ===================================================
// EXEMPLO PRÁTICO 2: Processamento de Dados
// ===================================================
console.log("=== EXEMPLO PRÁTICO 2: PROCESSAMENTO DE DADOS ===");

const estudantes = [
    {nome: "Ana", notas: [8.5, 9.0, 7.5, 8.0]},
    {nome: "Bruno", notas: [6.0, 8.5, 9.0, 7.0]},
    {nome: "Carlos", notas: [9.0, 9.5, 8.5, 9.0]},
    {nome: "Diana", notas: [7.0, 8.0, 8.5, 7.5]}
];

// Usando for...of para calcular médias
for (let estudante of estudantes) {
    let soma = 0;
    for (let nota of estudante.notas) {
        soma += nota;
    }
    let media = soma / estudante.notas.length;
    let situacao = media >= 7.0 ? "APROVADO" : "REPROVADO";
    console.log(`${estudante.nome}: Média ${media.toFixed(2)} - ${situacao}`);
}
console.log();

// ===================================================
// EXEMPLO PRÁTICO 3: Busca em Array
// ===================================================
console.log("=== EXEMPLO PRÁTICO 3: BUSCA LINEAR ===");

function buscaLinear(array, elemento) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === elemento) {
            return i;
        }
    }
    return -1;
}

const cores = ["vermelho", "azul", "verde", "amarelo", "roxo"];
const corProcurada = "verde";
const posicao = buscaLinear(cores, corProcurada);

if (posicao !== -1) {
    console.log(`Cor "${corProcurada}" encontrada na posição ${posicao}`);
} else {
    console.log(`Cor "${corProcurada}" não encontrada`);
}
console.log();

// ===================================================
// EXEMPLO PRÁTICO 4: Geração de Padrões
// ===================================================
console.log("=== EXEMPLO PRÁTICO 4: PIRÂMIDE DE ESTRELAS ===");

function gerarPiramide(altura) {
    for (let i = 1; i <= altura; i++) {
        let linha = "";
        
        // Espaços em branco
        for (let j = 1; j <= altura - i; j++) {
            linha += " ";
        }
        
        // Estrelas
        for (let k = 1; k <= (2 * i - 1); k++) {
            linha += "*";
        }
        
        console.log(linha);
    }
}

gerarPiramide(7);
console.log();

// ===================================================
// EXEMPLO PRÁTICO 5: Validação de Dados
// ===================================================
console.log("=== EXEMPLO PRÁTICO 5: VALIDAÇÃO DE EMAIL ===");

function validarEmails(emails) {
    const emailsInvalidos = [];
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    for (let i = 0; i < emails.length; i++) {
        if (!regex.test(emails[i])) {
            emailsInvalidos.push({
                indice: i,
                email: emails[i],
                erro: "Formato inválido"
            });
        }
    }
    
    return emailsInvalidos;
}

const listaEmails = [
    "joao@email.com",
    "maria@gmail.com",
    "pedro.silva",
    "ana@yahoo.com.br",
    "@dominio.com",
    "carlos@empresa.org"
];

console.log("Verificando emails:");
listaEmails.forEach((email, indice) => {
    console.log(`${indice + 1}. ${email}`);
});

const erros = validarEmails(listaEmails);
if (erros.length > 0) {
    console.log("\nEmails com formato inválido:");
    erros.forEach(erro => {
        console.log(`❌ Posição ${erro.indice + 1}: ${erro.email} - ${erro.erro}`);
    });
} else {
    console.log("\n✅ Todos os emails são válidos!");
}
console.log();

// ===================================================
// EXEMPLO PRÁTICO 6: Estatísticas de Vendas
// ===================================================
console.log("=== EXEMPLO PRÁTICO 6: ANÁLISE DE VENDAS ===");

const vendas = [
    {produto: "Notebook", valor: 2500, mes: "Janeiro", vendedor: "Ana"},
    {produto: "Mouse", valor: 50, mes: "Janeiro", vendedor: "Bruno"},
    {produto: "Teclado", valor: 150, mes: "Fevereiro", vendedor: "Ana"},
    {produto: "Monitor", valor: 800, mes: "Janeiro", vendedor: "Carlos"},
    {produto: "Webcam", valor: 200, mes: "Fevereiro", vendedor: "Bruno"},
    {produto: "Smartphone", valor: 1200, mes: "Março", vendedor: "Ana"}
];

// Análise por mês
const vendasPorMes = {};
for (let venda of vendas) {
    if (!vendasPorMes[venda.mes]) {
        vendasPorMes[venda.mes] = 0;
    }
    vendasPorMes[venda.mes] += venda.valor;
}

console.log("Vendas por mês:");
for (let mes in vendasPorMes) {
    console.log(`${mes}: R$ ${vendasPorMes[mes].toLocaleString('pt-BR')}`);
}

// Análise por vendedor
const vendasPorVendedor = {};
vendas.forEach(venda => {
    if (!vendasPorVendedor[venda.vendedor]) {
        vendasPorVendedor[venda.vendedor] = [];
    }
    vendasPorVendedor[venda.vendedor].push(venda);
});

console.log("\nPerformance dos vendedores:");
for (let vendedor in vendasPorVendedor) {
    const totalVendas = vendasPorVendedor[vendedor].reduce((total, venda) => total + venda.valor, 0);
    const quantidadeVendas = vendasPorVendedor[vendedor].length;
    const mediaVenda = totalVendas / quantidadeVendas;
    
    console.log(`${vendedor}: ${quantidadeVendas} vendas, Total: R$ ${totalVendas.toLocaleString('pt-BR')}, Média: R$ ${mediaVenda.toFixed(2)}`);
}

console.log("\n=== FIM DOS EXEMPLOS ===");