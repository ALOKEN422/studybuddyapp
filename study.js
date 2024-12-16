// Task Scheduler
const taskInput = document.getElementById("task-input");
const addTaskButton = document.getElementById("add-task");
const taskList = document.getElementById("task-list");

addTaskButton.addEventListener("click", () => {
  const taskText = taskInput.value.trim();
  if (taskText) {
    const listItem = document.createElement("li");
    listItem.textContent = taskText;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "X";
    deleteButton.style.marginLeft = "10px";
    deleteButton.style.background = "#d90429";
    deleteButton.style.color = "#ffffff";
    deleteButton.style.border = "none";
    deleteButton.style.cursor = "pointer";
    deleteButton.onclick = () => listItem.remove();

    listItem.appendChild(deleteButton);
    taskList.appendChild(listItem);
    taskInput.value = "";
  }
});

// Timer
let timerInterval;
let secondsElapsed = 0;

const timerDisplay = document.getElementById("timer-display");
const startTimerButton = document.getElementById("start-timer");
const stopTimerButton = document.getElementById("stop-timer");
const resetTimerButton = document.getElementById("reset-timer");

startTimerButton.addEventListener("click", () => {
  clearInterval(timerInterval);
  timerInterval = setInterval(() => {
    secondsElapsed++;
    const hrs = String(Math.floor(secondsElapsed / 3600)).padStart(2, "0");
    const mins = String(Math.floor((secondsElapsed % 3600) / 60)).padStart(2, "0");
    const secs = String(secondsElapsed % 60).padStart(2, "0");
    timerDisplay.textContent = `${hrs}:${mins}:${secs}`;
  }, 1000);
});

stopTimerButton.addEventListener("click", () => {
  clearInterval(timerInterval);
});

resetTimerButton.addEventListener("click", () => {
  clearInterval(timerInterval);
  secondsElapsed = 0;
  timerDisplay.textContent = "00:00:00";
});

// Study Tips
const tips = [
  "Break your study time into focused 25-minute intervals.",
  "Create a distraction-free environment.",
  "Set specific goals for each study session.",
  "Review your notes regularly.",
  "Practice active recall and testing.",
  "You can do it",
  "don't rush, just take your time",
  "Hello! its Studdy Buddy!",

];

const showTipButton = document.getElementById("show-tip");
const studyTipDisplay = document.getElementById("study-tip");

showTipButton.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * tips.length);
  studyTipDisplay.textContent = tips[randomIndex];
});
