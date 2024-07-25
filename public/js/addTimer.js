var addTimerIndex;

window.onload = function() {
    addTimerIndex = document.getElementById('timer-container').childElementCount + 1;
};

// Define the addTimer function
function addTimer() {
    console.log(addTimerIndex);
    // Create a new timer div
    const timerDiv = document.createElement('div');
    timerDiv.className = 'timer';

    // Add the HTML for the timer
    timerDiv.innerHTML = `
        <label>Timer ` + addTimerIndex + `:</label>
        <span id="timer` + addTimerIndex + `">200:00</span>
        <button onclick="increaseMinutes(this, 5)">+5</button>
        <button onclick="decreaseMinutes(this, 5)">-5</button>
        <button onclick="increaseMinutes(this, 1)">+1</button>
        <button onclick="decreaseMinutes(this, 1)">-1</button>
        <button onclick="startTimer(this)">Play</button>
        <button onclick="stopTimer(this)">Stop</button>
    `;

    addTimerIndex++;

    // Get the timer container
    const timerContainer = document.getElementById('timer-container');

    // Append the new timer div to the timer container
    timerContainer.appendChild(timerDiv);
}

function deleteTimer() {
    const timerContainer = document.getElementById('timer-container');
    const lastTimer = timerContainer.lastChild;
    if (lastTimer) {
        timerContainer.removeChild(lastTimer);
        addTimerIndex--;
    }
    console.log(addTimerIndex);
}