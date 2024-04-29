function convertCurrency() {
    var amount = parseFloat(document.getElementById("amount").value);
    var fromCurrency = document.getElementById("from").value;
    var toCurrency = document.getElementById("to").value;

    // Replace the following with your own API endpoint for currency conversion
    var apiUrl = "https://api.exchangerate-api.com/v4/latest/" + fromCurrency;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            var exchangeRate = data.rates[toCurrency];
            var convertedAmount = amount * exchangeRate;
            document.getElementById("result").innerHTML = amount.toFixed(2) + " " + fromCurrency + " = " + convertedAmount.toFixed(2) + " " + toCurrency;
        })
        .catch(error => {
            console.error('Error:', error);
        });
}


