// Función de conversión de número a romano
function convertToRoman(num) {
    const romanNumerals = [
        { value: 1000, symbol: 'M' },
        { value: 900, symbol: 'CM' },
        { value: 500, symbol: 'D' },
        { value: 400, symbol: 'CD' },
        { value: 100, symbol: 'C' },
        { value: 90, symbol: 'XC' },
        { value: 50, symbol: 'L' },
        { value: 40, symbol: 'XL' },
        { value: 10, symbol: 'X' },
        { value: 9, symbol: 'IX' },
        { value: 5, symbol: 'V' },
        { value: 4, symbol: 'IV' },
        { value: 1, symbol: 'I' },
    ];
    
    let roman = '';
    
    romanNumerals.forEach(item => {
        while (num >= item.value) {
            roman += item.symbol;
            num -= item.value;
        }
    });
    
    return roman;
}

// Obtener elementos
const numberInput = document.getElementById('number');
const convertButton = document.getElementById('convert-btn');
const outputDiv = document.getElementById('output');

// Agregar evento al botón
convertButton.addEventListener('click', () => {
    const number = parseInt(numberInput.value);

    if (numberInput.value === '') {
        outputDiv.textContent = 'Por favor ingresa un número válido';
    } else if (isNaN(number)) {
        outputDiv.textContent = 'Por favor ingresa un número válido';
    } else if (number < 1) {
        outputDiv.textContent = 'Por favor ingresa un número mayor o igual a 1';
    } else if (number >= 4000) {
        outputDiv.textContent = 'Por favor ingresa un número menor o igual a 3999';
    } else {
        outputDiv.textContent = convertToRoman(number);
    }
});
