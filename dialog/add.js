    // add.js

    // Declare logs as a global variable
    const logs = JSON.parse(localStorage.getItem('logs')) || [];

    function saveToAddList() {
        const titleInput = document.getElementById('log-title');
        const contentInput = document.getElementById('log-content');

        // Get the current date and time
        const currentDate = new Date();
        const formattedDateTime = `${currentDate.getFullYear()}-${padZero(currentDate.getMonth() + 1)}-${padZero(currentDate.getDate())} ${padZero(currentDate.getHours())}:${padZero(currentDate.getMinutes())}:${padZero(currentDate.getSeconds())}`;

        const newLog = {
            title: titleInput.value,
            content: contentInput.value,
            dateTime: formattedDateTime
        };

        // Use the global logs array
        logs.push(newLog);

        // Store the logs array in localStorage
        localStorage.setItem('logs', JSON.stringify(logs));

        window.location.href = 'index.html';
    }

    function padZero(number) {
        return number < 10 ? '0' + number : number;
    }
