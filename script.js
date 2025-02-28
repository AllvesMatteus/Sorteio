document.getElementById('generateButton').addEventListener('click', function() {
    let countdown = 5;
    const resultDiv = document.getElementById('result');
    
    const countdownInterval = setInterval(function() {
        if (countdown > 0) {
            resultDiv.textContent = `CONTAGEM REGRESSIVA: ${countdown}`;
            countdown--;
        } else {
            clearInterval(countdownInterval);
            const randomNumber = Math.floor(Math.random() * 100) + 1;
            resultDiv.textContent = `NÚMERO SORTEADO: ${randomNumber}`;
            const numberList = document.getElementById('numberList');
            const listItem = document.createElement('li');
            listItem.textContent = randomNumber;
            numberList.appendChild(listItem);
        }
    }, 1000);
});

document.getElementById('clearButton').addEventListener('click', function() {
    document.getElementById('numberList').innerHTML = '';
    document.getElementById('result').textContent = '';
});
