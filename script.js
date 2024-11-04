function addEntry() {
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const country = document.getElementById('country').value;
    const scoreValue = parseInt(document.getElementById('score').value, 10) || 0;
    const date = new Date().toLocaleDateString();

    const entryContainer = document.createElement('div');
    entryContainer.classList.add('entry');

    entryContainer.innerHTML = `
        <span><strong>${firstName} ${lastName}</strong></span>
        <span>Date: ${date}</span>
        <span>Country: ${country}</span>
        <span>Score: <span class="score">${scoreValue}</span></span>
        <button onclick="updateScore(this, 5)">+5</button>
        <button onclick="updateScore(this, -5)">-5</button>
        <button onclick="deleteEntry(this)">Delete</button>
    `;

    document.getElementById('entries').appendChild(entryContainer);
    sortEntries();

    // Clear input fields
    document.getElementById('first-name').value = '';
    document.getElementById('last-name').value = '';
    document.getElementById('score').value = '';
}

function updateScore(button, change) {
    const scoreSpan = button.parentElement.querySelector('.score');
    let currentScore = parseInt(scoreSpan.textContent, 10);
    currentScore += change;
    scoreSpan.textContent = currentScore;
    sortEntries();
}

function deleteEntry(button) {
    const entry = button.parentElement;
    entry.remove();
}

function sortEntries() {
    const entriesContainer = document.getElementById('entries');
    const entries = Array.from(entriesContainer.getElementsByClassName('entry'));

    entries.sort((a, b) => {
        const scoreA = parseInt(a.querySelector('.score').textContent, 10);
        const scoreB = parseInt(b.querySelector('.score').textContent, 10);
        return scoreB - scoreA;
    });

    entriesContainer.innerHTML = '';
    entries.forEach(entry => entriesContainer.appendChild(entry));
}