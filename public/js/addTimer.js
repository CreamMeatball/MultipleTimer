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

    // Get the initial time input element
    const initialTime = document.getElementById('initial-time');
    // Get the initial time input value
    const initialTimeValue = initialTime.value;

    // Add the HTML for the timer
    timerDiv.innerHTML = `
        <input type="text" placeholder="Timer  ` + addTimerIndex + `" style="width: 200px"></input>
        <span id="timer` + addTimerIndex + `">` + initialTimeValue + `</span>
        <div class="timer-buttons">
        <button onclick="increaseMinutes(this, 5)">+5</button>
        <button onclick="decreaseMinutes(this, 5)">-5</button>
        <button onclick="increaseMinutes(this, 1)">+1</button>
        <button onclick="decreaseMinutes(this, 1)">-1</button>
        <button id="timer` + addTimerIndex + `startbutton" onclick="startTimer(this)">Play</button>
        <button id="timer` + addTimerIndex + `stopbutton" onclick="stopTimer(this)">Stop</button>
        </div>
    `;

    addTimerIndex++;

    // Get the timer container
    const timerContainer = document.getElementById('timer-container');

    // Append the new timer div to the timer container
    timerContainer.appendChild(timerDiv);

    var currentTheme = document.getElementById('current-theme').innerText;
    var theme = currentTheme.split(': ')[1]; // 'theme : white' 또는 'theme : black'에서 테마 이름을 가져옵니다.
    changeTheme(theme);
}

function deleteTimer() {
    const timerContainer = document.getElementById('timer-container');
    const lastTimer = timerContainer.lastChild;
    if (lastTimer) {
        stopTimer(lastTimer.querySelector('button'));
        timerContainer.removeChild(lastTimer);
        addTimerIndex--;
    }
    console.log(addTimerIndex);
}