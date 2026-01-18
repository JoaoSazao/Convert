// Cotação de moedas do dia
const USD = 5.37;
const EUR = 6.24;
const GBP = 7.18;

// Obtendo os elementos do Formulário
const form = document.querySelector('form');
const amountInput = document.getElementById('amount');
const currencySelect = document.getElementById('currency');
const footer = document.querySelector('main footer');

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
        // Aplica a classe que exibe o footer com o resultado
        footer.classList.add('show-result');
    } catch (error) {
        console.log(error);

        // Remove a classe que exibe o footer com o resultado
        footer.classList.remove('show-result');
        alert('Ocorreu um erro ao converter a moeda. Por favor, tente novamente mais tarde');
    }
}

