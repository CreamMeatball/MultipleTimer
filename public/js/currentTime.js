function clock() {
    // Get the current time
    const currentTime = new Date();

    // Format the time as desired (e.g., HH:MM:SS)
    const formattedTime = currentTime.toLocaleTimeString();

    // Find the div element with the id "current-time"
    const currentTimeDiv = document.getElementById("current-time");

    // Set the innerHTML of the div to the formatted time
    currentTimeDiv.innerHTML = formattedTime;

    // Call the clock function again after 1 second
    setTimeout(clock, 1000);
}

window.onload = clock;