var addTimerIndex;

window.onload = function() {
    addTimerIndex = document.getElementById('timer-container').childElementCount + 1;
};

// Define the addTimer function
function addTimer(timerIndex, timerName, initialTimeValue) {
    console.log(addTimerIndex);
    // Create a new timer div
    const timerDiv = document.createElement('div');
    timerDiv.className = 'timer';

    if (arguments.length === 0) {
        // Get the time setting input element
        const timeSetting = document.getElementById('time-setting');
        // Get the time setting input value
        const timeSettingValue = timeSetting.value;

        console.log("Before add timer, addTimerIndex: " + addTimerIndex);

        // Add the HTML for the timer
        timerDiv.innerHTML = `
            <input type="text" placeholder="Timer  ` + addTimerIndex + `" value="" style="width: 200px"></input>
            <span id="timer` + addTimerIndex + `">` + timeSettingValue + `</span>
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
        console.log("After add timer, addTimerIndex: " + addTimerIndex);

    } else if(timerIndex && timerName && initialTimeValue) {
        // Add the HTML for the timer
        if(timerName=='' || !timerName) {
            timerName = 'Timer ' + timerIndex;
            console.log("timerName is not existed. Default timer name :" + timerName);
        }

        console.log("timerIndex: " + timerIndex);

        timerDiv.innerHTML = `
            <input type="text" placeholder="Timer  ` + timerIndex + `" value="` + timerName + `" style="width: 200px"></input>
            <span id="timer` + timerIndex + `">` + initialTimeValue + `</span>
            <div class="timer-buttons">
            <button onclick="increaseMinutes(this, 5)">+5</button>
            <button onclick="decreaseMinutes(this, 5)">-5</button>
            <button onclick="increaseMinutes(this, 1)">+1</button>
            <button onclick="decreaseMinutes(this, 1)">-1</button>
            <button id="timer` + timerIndex + `startbutton" onclick="startTimer(this)">Play</button>
            <button id="timer` + timerIndex + `stopbutton" onclick="stopTimer(this)">Stop</button>
            </div>
        `;
        addTimerIndex = timerIndex + 1;
        console.log("After add timer, addTimerIndex: " + addTimerIndex);
    }

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