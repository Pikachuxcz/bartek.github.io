let solarData = [];
let currentTopic = null;
let deferredPrompt;

// Load the JSON data and fill the dropdown menu
fetch("solar-data.json")
    .then(response => response.json())
    .then(data => {
        solarData = data.topics;
        populateMenu();
    });

// Add each topic from the JSON file into the dropdown
function populateMenu() {
    const menu = document.getElementById("topicMenu");

    solarData.forEach((topic, index) => {
        const option = document.createElement("option");
        option.value = index;
        option.textContent = topic.title;
        menu.appendChild(option);
    });
}

// Display the selected topic
document.getElementById("topicMenu").addEventListener("change", function () {
    const selectedIndex = this.value;

    if (selectedIndex !== "") {
        currentTopic = solarData[selectedIndex];

        document.getElementById("topicTitle").textContent = currentTopic.title;
        document.getElementById("planetImage").textContent = currentTopic.image;
        document.getElementById("topicDescription").textContent = currentTopic.description;
    }
});

// Speak the current topic description
document.getElementById("speakButton").addEventListener("click", function () {
    if (currentTopic) {
        const message = new SpeechSynthesisUtterance(
            currentTopic.title + ". " + currentTopic.description
        );

        message.rate = 1;
        message.pitch = 1;
        window.speechSynthesis.speak(message);
    } else {
        alert("Please select a topic first.");
    }
});

// Register the service worker for offline use
if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("service-worker.js")
        .then(() => console.log("Service worker registered"))
        .catch(error => console.log("Service worker error:", error));
}

// Custom install button logic
window.addEventListener("beforeinstallprompt", function (event) {
    event.preventDefault();
    deferredPrompt = event;

    const installButton = document.getElementById("installButton");
    installButton.hidden = false;

    installButton.addEventListener("click", function () {
        installButton.hidden = true;
        deferredPrompt.prompt();

        deferredPrompt.userChoice.then(() => {
            deferredPrompt = null;
        });
    });
});
