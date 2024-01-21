// index.js

// Access the global logs array
const logs = JSON.parse(localStorage.getItem('logs')) || [];

function displayLogs() {
    const logList = document.getElementById('log-list');
    logList.innerHTML = '';

    logs.forEach((log, index) => {
        const logEntry = document.createElement('article');
        logEntry.innerHTML = `
            <h2>${log.title}</h2>
            <p>${log.content}</p>
            <p><em>${log.dateTime}</em></p>
            <button class="delete-button" onclick="deleteLog(${index})">X</button>
        `;
        logList.appendChild(logEntry);
    });
}

function deleteLog(index) {
    // Remove the log at the specified index
    logs.splice(index, 1);

    // Update localStorage with the modified logs array
    localStorage.setItem('logs', JSON.stringify(logs));

    // Redisplay the updated logs
    displayLogs();
}

function redirectToAddPage() {
    window.location.href = 'add.html';
}

// Call displayLogs when the page loads
window.onload = function() {
    displayLogs();
};
