// Log a message to the console to ensure the script is linked correctly
console.log('JavaScript file is linked correctly.');

const startButton = document.getElementById("startButton");
const progressText = document.getElementById("progressText");
let progressPercentage = 0;

function beginProgress() {
	const progressInterval = setInterval(function() {
		progressPercentage++;
		progressText.textContent = "progress: " + progressPercentage + "%";

		if (progressPercentage === 100) {
			clearInterval(progressInterval);
			progressText.textContent = "progress: 100%";
			reset();
		}
	}, 1000); // 1 second
	progressText.textContent = "progress: 0%";
}

function start() {

	beginProgress();
	startButton.style.display = "none";

}

function reset() {
	progressPercentage = 0;
	startButton.style.display = "block";

}

//startButton.addEventListener('click', beginProgress);
startButton.addEventListener('click', start);
