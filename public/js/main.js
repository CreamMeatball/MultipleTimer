var timers = [];

function startTimer(e) {
    var timerId = e.parentElement.parentElement.querySelector('span').id.replace('timer', '');
    clearInterval(timers[timerId]);
    timers[timerId] = setInterval(function() {
        var timerElement = document.getElementById('timer' + timerId);
        var time = timerElement.innerHTML.split(':');
        var minutes = parseInt(time[0]);
        var seconds = parseInt(time[1]);

        if (minutes === 0 && seconds === 0) {
            clearInterval(timers[timerId]);

            // Change the timer color to red
            timerElement.parentElement.style.backgroundColor = 'red';
            timerElement.parentElement.style.color = 'white';
            timerElement.parentElement.querySelector('input').style.backgroundColor = 'red';
            timerElement.parentElement.querySelector('input').style.color = 'white';
            return;
        }

        if (seconds === 0) {
            minutes--;
            seconds = 59;
        } else {
            seconds--;
        }

        timerElement.innerHTML = padZero(minutes) + ':' + padZero(seconds);
    }, 1000);

    // Change the timer color to theme color
    var currentTheme = document.getElementById('current-theme').innerText;
    var theme = currentTheme.split(': ')[1]; // 'theme : white' 또는 'theme : black'에서 테마 이름을 가져옵니다.
    var oppositeTheme = theme === 'white' ? 'black' : 'white';

    var timerElement = document.getElementById('timer' + timerId);

    timerElement.parentElement.style.backgroundColor = theme;
    timerElement.parentElement.style.color = oppositeTheme;
    timerElement.parentElement.querySelector('input').style.backgroundColor = theme;
    timerElement.parentElement.querySelector('input').style.color = oppositeTheme;
}

function stopTimer(e) {
    var timerId = e.parentElement.parentElement.querySelector('span').id.replace('timer', '');
    clearInterval(timers[timerId]);
}

function increaseMinutes(e, minutes) {
    var timerId = e.parentElement.parentElement.querySelector('span').id.replace('timer', '');
    var timerElement = document.getElementById('timer' + timerId);
    var time = timerElement.innerHTML.split(':');
    var currentMinutes = parseInt(time[0]);
    var currentSeconds = parseInt(time[1]);

    var newMinutes = currentMinutes + minutes;
    timerElement.innerHTML = padZero(newMinutes) + ':' + padZero(currentSeconds);
}

function decreaseMinutes(e, minutes) {
    var timerId = e.parentElement.parentElement.querySelector('span').id.replace('timer', '');
    var timerElement = document.getElementById('timer' + timerId);
    var time = timerElement.innerHTML.split(':');
    var currentMinutes = parseInt(time[0]);
    var currentSeconds = parseInt(time[1]);

    var newMinutes = currentMinutes - minutes;
    if (newMinutes < 0) {
        newMinutes = 0;
    }
    timerElement.innerHTML = padZero(newMinutes) + ':' + padZero(currentSeconds);
}

function startAllTimers() {
    var timerContainer = document.getElementById('timer-container');
    var timers = timerContainer.querySelectorAll('.timer');
    var numberOfTimers = timers.length;
    console.log(numberOfTimers);
    for (var i = 1; i <= numberOfTimers; i++) {
        // var timerId = document.getElementById('timer' + i);
        var startButton = document.getElementById('timer' + i + 'startbutton');
        startTimer(startButton);
    }
}

function stopAllTimers() {
    var timerContainer = document.getElementById('timer-container');
    var timers = timerContainer.querySelectorAll('.timer');
    var numberOfTimers = timers.length;
    for (var i = 1; i <= numberOfTimers; i++) {
        // var timerId = document.getElementById('timer' + i);
        var stopButton = document.getElementById('timer' + i + 'stopbutton');
        stopTimer(stopButton);
    }
}

function padZero(number) {
    return number.toString().padStart(2, '0');
}