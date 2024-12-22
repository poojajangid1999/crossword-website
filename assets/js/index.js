document.getElementById('search').addEventListener('click', function (e) {
    const clue = document.getElementById('clue').value.trim();
    const wordLength = document.getElementById('length').value;
    if (!clue || wordLength <= 0) {
        e.preventDefault();
        alert('Please enter a valid clue and word length.');
        return;
    }
    const resultBox = document.querySelector('.result-box');
    if (resultBox) {
        resultBox.classList.remove('display-none');
    }
});


document.getElementById('Reset').addEventListener('click', function () {
    document.getElementById('clue').value = '';
    document.getElementById('length').value = '';
    document.querySelector('.result-box').classList.add('display-none');
});


