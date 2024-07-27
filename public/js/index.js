window.addEventListener('beforeunload', function(event) {
    event.preventDefault();
    alert('Warning: You may lose your data if you leave this page!');
});