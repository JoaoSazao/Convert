// Cotação de moedas do dia
const USD = 5.37;
const EUR = 6.24;
const GBP = 7.18;

// Obtendo os elementos do Formulário
const form = document.querySelector('form');
const amountInput = document.getElementById('amount');
const currencySelect = document.getElementById('currency');
const footer = document.querySelector('main footer');
const description = document.getElementById('description');
const result = document.getElementById('result');

// Manipula o valor inserido no input
amountInput.addEventListener('input', () => {

    // Expressão regular para encontrar caracteres que não sejam dígitos, caso encontre, substitui por vazio
    const hasCharacterRegex = /\D+/g;
    amountInput.value = amountInput.value.replace(hasCharacterRegex, '');

});


// Captando o evento de submit do formulário
form.onsubmit = (event) => {
    // Previne o comportamento padrão do formulário
    event.preventDefault();

    switch (currencySelect.value) {
        case 'USD':
            convertCurrency(amountInput.value, USD, '$');
            break;

        case 'EUR':
            convertCurrency(amountInput.value, EUR, '€');
            break;

        case 'GBP':
            convertCurrency(amountInput.value, GBP, '£');
            break;
    }
}

// Função para converter a moeda
function convertCurrency(amount, price, symbol) {
    try {

        // Exibindo a cotação da moeda selecionada
        description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`;

        // Calculando o valor total da conversão
        let total = amount * price;

        if (isNaN(total)) {
            throw new Error('Valor inválido para conversão');
        }

        // Fromatando o valor total para o padrão brasileiro
        total = formatCurrencyBRL(total).replace('R$', ''); // Removendo o símbolo de Real para exibir apenas o valor

        // Exibindo o resultado da conversão no footer
        result.textContent = `${total} Reais`;

        // Aplica a classe que exibe o footer com o resultado
        footer.classList.add('show-result');

    } catch (error) {
        console.log(error);

        // Remove a classe que exibe o footer com o resultado
        footer.classList.remove('show-result');
        alert('Ocorreu um erro ao converter a moeda. Por favor, tente novamente mais tarde');
    }
}

// Formata a moeda para o padrão brasileiro
function formatCurrencyBRL(value) {
    return Number(value).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
    });
}
