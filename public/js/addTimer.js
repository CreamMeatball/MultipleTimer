
var addTimerIndex = 4;

// Define the addTimer function
function addTimer() {
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

    // Append the new timer div to the body
    document.body.appendChild(timerDiv);
}