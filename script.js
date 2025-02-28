document.getElementById('generateButton').addEventListener('click', function() {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    document.getElementById('result').textContent = `Número sorteado: ${randomNumber}`;
    const numberList = document.getElementById('numberList');
    const listItem = document.createElement('li');
    listItem.textContent = randomNumber;
    numberList.appendChild(listItem);
});

document.getElementById('clearButton').addEventListener('click', function() {
    document.getElementById('numberList').innerHTML = '';
    document.getElementById('result').textContent = '';
});
