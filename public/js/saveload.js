
function saveload() {

// '저장' 버튼에 이벤트 핸들러 추가
document.getElementById('save-button').addEventListener('click', function() {
    
    // 기존 세이브 데이터 삭제
    localStorage.clear();

    // Get the value of the input field with id "title-name"
    var titleName = document.getElementById('title-name').value;
    // Get the value of the input field with id "time-setting"
    var timeSetting = document.getElementById('time-setting').value;
    // Get the value of the element with id "current-theme"
    var currentTheme = document.getElementById('current-theme').innerHTML;
    // Remove the text "Theme: " from the currentTheme value
    currentTheme = currentTheme.replace('Theme: ', '');

    // Save titleName and timeSetting in localStorage
    localStorage.setItem('titleName', titleName);
    localStorage.setItem('timeSetting', timeSetting);
    localStorage.setItem('currentTheme', currentTheme);

    // 타이머 컨테이너에서 모든 타이머 요소를 가져옵니다.
    var timerContainer = document.getElementById('timer-container');
    var timers = timerContainer.getElementsByClassName('timer');

    // 각 타이머에 대해
    for (var i = 0; i < timers.length; i++) {
        var timer = timers[i];

        // 타이머 정보를 가져옵니다.
        var timerInfo = {
            timerNumber: i + 1,
            timerName : timer.getElementsByTagName('input')[0].value ? timer.getElementsByTagName('input')[0].value : 'Timer ' + (i + 1),
            initialTime: timer.getElementsByTagName('span')[0].innerText
        };

        // 타이머 정보를 localStorage에 저장합니다.
        var timerInfoJson = JSON.stringify(timerInfo);
        localStorage.setItem('timer' + (i + 1), timerInfoJson);
    }
    console.log("Data Saved");
});

document.getElementById('load-button').addEventListener('click', function() {
    // 페이지가 로드될 때마다 localStorage에서 타이머 정보를 가져옵니다.
    var timerContainer = document.getElementById('timer-container');

    // Load titleName, timeSetting, and currentTheme from localStorage
    var titleName = localStorage.getItem('titleName');
    var timeSetting = localStorage.getItem('timeSetting');
    var currentTheme = localStorage.getItem('currentTheme');

    // Set the value of the input field with id "title-name"
    document.getElementById('title-name').value = titleName;
    // Set the value of the input field with id "time-setting"
    document.getElementById('time-setting').value = timeSetting;
    // Set the innerHTML of the element with id "current-theme"
    document.getElementById('current-theme').innerHTML = 'Theme: ' + currentTheme;

    // 먼저 모든 기존 타이머를 삭제합니다.
    while (timerContainer.firstChild) {
        timerContainer.removeChild(timerContainer.lastChild);
    }

    for (var i = 1; i <= localStorage.length; i++) {
        var timerInfoJson = localStorage.getItem('timer' + i);
        if (timerInfoJson) {
            var timerInfo = JSON.parse(timerInfoJson);
            addTimer(timerInfo.timerNumber, timerInfo.timerName, timerInfo.initialTime);
        }
    }
    console.log("localStorage.length: " + localStorage.length);
    console.log("Data loaded");
});
    
}

window.addEventListener("load", saveload);