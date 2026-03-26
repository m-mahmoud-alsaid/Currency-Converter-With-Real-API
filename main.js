let amount = document.getElementById('amount');
let convertButton = document.getElementById('convert');
let fromCurrency = document.getElementById('from-currency');
let toCurrency = document.getElementById('to-currency');
let resultField = document.getElementById('result');

// Fetch Currency From Real API
async function getCurrency() {
    // Set Base Currency
    let response = await fetch(`https://v6.exchangerate-api.com/v6/99af222e4ba6ea958584c40d/latest/${fromCurrency.value}`);
    let data = await response.json();
    let curr = data.conversion_rates;
    return curr;
}

// Convert Currency 
async function convertCurrency() {
    let curr = await getCurrency();
    if (!isNaN(amount.value)) {
        let rate = toCurrency.value;
        let result = (amount.value * curr[rate]).toFixed(2);
        resultField.textContent = `${fromCurrency.value} TO ${rate} = ${result}`;
    }
    else {
        resultField.textContent = 'There is no amount';
    }
}

// Event 
convertButton.onclick = () => {
    convertCurrency();
};