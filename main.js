
// Get the elements
const hoursInput = document.getElementById('hours');
const minutesInput = document.getElementById('minutes');
const secondsInput = document.getElementById('seconds');
const startTimerBtn = document.getElementById('startTimerBtn');

let timer;

// Function to play timer sound
function playBeep() {
  const beepSound = new Audio('beep.mp3');
  beepSound.play();
}

// Function to vibrate the device when time reached 0 seconds
function vibrate() {
  navigator.vibrate(1000); // Vibrate for 1 second
}

// Function to start the timer
function startTimer() {
  const hours = parseInt(hoursInput.value);
  const minutes = parseInt(minutesInput.value);
  const seconds = parseInt(secondsInput.value);

  let totalSeconds = hours * 3600 + minutes * 60 + seconds;

  if (totalSeconds <= 0) {
    alert('Please enter a valid time.');
    return;
  }

  startTimerBtn.disabled = true;

  timer = setInterval(() => {
    totalSeconds--;

    if (totalSeconds === 0) {
      clearInterval(timer);
      playBeep();
      vibrate();
      startTimerBtn.disabled = false;
    }

    const displayHours = Math.floor(totalSeconds / 3600);
    const displayMinutes = Math.floor((totalSeconds % 3600) / 60);
    const displaySeconds = totalSeconds % 60;

    hoursInput.value = displayHours;
    minutesInput.value = displayMinutes;
    secondsInput.value = displaySeconds;
  }, 1000);
}

// Event listener for the "Start Timer" btn
startTimerBtn.addEventListener('click', startTimer);
