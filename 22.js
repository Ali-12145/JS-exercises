let timeLeft = 60; // 60 seconds = 1 minute

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
}

function updateTimer() {
    console.log(formatTime(timeLeft));

    if (timeLeft === 0) {
        clearInterval(timerInterval);
        console.log('Countdown completed!');
    } else {
        timeLeft--;
    }
}

const timerInterval = setInterval(updateTimer, 1000);

// Initial call to log the starting time
updateTimer();