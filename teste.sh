#!/bin/bash

# Script de teste para verificar todos os exemplos de laços de repetição

echo "🧪 Executando testes dos exemplos de laços de repetição em JavaScript..."
echo "=" | tr -c '\n' '=' | head -c 70
echo ""

# Teste 1: Exemplos básicos
echo "📋 Testando exemplos básicos..."
if node exemplos.js > /dev/null 2>&1; then
    echo "✅ Exemplos básicos executados com sucesso!"
else
    echo "❌ Falha nos exemplos básicos!"
    exit 1
fi

# Teste 2: Exemplos avançados
echo "📋 Testando exemplos avançados..."
if node exemplos-avancados.js > /dev/null 2>&1; then
    echo "✅ Exemplos avançados executados com sucesso!"
else
    echo "❌ Falha nos exemplos avançados!"
    exit 1
fi

# Teste 3: Verificar estrutura dos arquivos
echo "📋 Verificando estrutura dos arquivos..."

if [ -f "README.md" ]; then
    echo "✅ README.md encontrado"
else
    echo "❌ README.md não encontrado"
    exit 1
fi

if [ -f "exemplos.js" ]; then
    echo "✅ exemplos.js encontrado"
else
    echo "❌ exemplos.js não encontrado"
    exit 1
fi

if [ -f "exemplos-avancados.js" ]; then
    echo "✅ exemplos-avancados.js encontrado"
else
    echo "❌ exemplos-avancados.js não encontrado"
    exit 1
fi

if [ -f "demonstracao.html" ]; then
    echo "✅ demonstracao.html encontrado"
else
    echo "❌ demonstracao.html não encontrado"
    exit 1
fi

# Teste 4: Verificar conteúdo do README
echo "📋 Verificando conteúdo do README..."
if grep -q "Laços de Repetição em JavaScript" README.md; then
    echo "✅ Título correto no README"
else
    echo "❌ Título não encontrado no README"
    exit 1
fi

if grep -q "Fluxogramas" README.md; then
    echo "✅ Seção de fluxogramas presente"
else
    echo "❌ Seção de fluxogramas não encontrada"
    exit 1
fi

if grep -q "Exemplos Práticos" README.md; then
    echo "✅ Seção de exemplos práticos presente"
else
    echo "❌ Seção de exemplos práticos não encontrada"
    exit 1
fi

# Teste 5: Contar linhas de código
echo "📋 Estatísticas dos arquivos criados..."
echo "   README.md: $(wc -l < README.md) linhas"
echo "   exemplos.js: $(wc -l < exemplos.js) linhas"
echo "   exemplos-avancados.js: $(wc -l < exemplos-avancados.js) linhas"
echo "   demonstracao.html: $(wc -l < demonstracao.html) linhas"

# Teste 6: Verificar sintaxe JavaScript
echo "📋 Verificando sintaxe JavaScript..."
if node -c exemplos.js; then
    echo "✅ Sintaxe válida em exemplos.js"
else
    echo "❌ Erro de sintaxe em exemplos.js"
    exit 1
fi

if node -c exemplos-avancados.js; then
    echo "✅ Sintaxe válida em exemplos-avancados.js"
else
    echo "❌ Erro de sintaxe em exemplos-avancados.js"
    exit 1
fi

echo ""
echo "🎉 Todos os testes passaram com sucesso!"
echo "📚 Documentação completa sobre laços de repetição criada!"
echo ""
echo "Arquivos criados:"
echo "  - README.md: Documentação completa e detalhada"
echo "  - exemplos.js: Exemplos práticos básicos"
echo "  - exemplos-avancados.js: Algoritmos e estruturas de dados"
echo "  - demonstracao.html: Demonstração interativa no browser"
echo "  - teste.sh: Script de verificação e testes"