const amountInput = document.getElementById('amount');
const currencySelect = document.getElementById('currency');

// Manipula o valor inserido no input
amountInput.addEventListener('input', () => {

    // Expressão regular para encontrar caracteres que não sejam dígitos, caso encontre, substitui por vazio
    const hasCharacterRegex = /\D+/g;
    amountInput.value = amountInput.value.replace(hasCharacterRegex, '');

});

