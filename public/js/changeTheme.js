function changeTheme(theme) {
    var body = document.body;
    var currentTheme = document.getElementById('current-theme');

    if (theme === 'white') {
        body.style.backgroundColor = 'white';
        body.style.color = 'black';
        var timer = document.getElementsByClassName('timer');
        for (var i = 0; i < timer.length; i++) {
            timer[i].style.backgroundColor = 'white';
            timer[i].style.color = 'black';
            timer[i].style.borderColor = 'black';
            timer[i].querySelector('input').style.backgroundColor = 'white';
            timer[i].querySelector('input').style.color = 'black';
        }
        var titleName = document.getElementById('title-name');
        titleName.style.background = 'white';
        titleName.style.color = 'black';

        currentTheme.innerHTML = 'Theme: white';
    } else if (theme === 'black') {
        body.style.backgroundColor = 'black';
        body.style.color = 'white';
        var timer = document.getElementsByClassName('timer');
        for (var i = 0; i < timer.length; i++) {
            timer[i].style.backgroundColor = 'black';
            timer[i].style.color = 'white';
            timer[i].style.borderColor = 'white';
            timer[i].querySelector('input').style.backgroundColor = 'black';
            timer[i].querySelector('input').style.color = 'white';
        }
        var titleName = document.getElementById('title-name');
        titleName.style.background = 'black';
        titleName.style.color = 'white';

        currentTheme.innerHTML = 'Theme: black';
    }
}