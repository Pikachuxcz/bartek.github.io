// This function speaks any text that is passed into it
function speak(textToSay) {
    const message = new SpeechSynthesisUtterance(textToSay);
    message.pitch = 1.2;
    message.rate = 1.0;
    window.speechSynthesis.speak(message);
}

// This function runs when the user selects a word from the dropdown
function showWord() {
    const menu = document.getElementById("wordSelect");
    const sentenceBox = document.getElementById("sentenceDisplay");

    // Check that the user selected a real word, not the first instruction option
    if (menu.selectedIndex > 0) {
        const selectedOption = menu.options[menu.selectedIndex];

        // Get the hidden sentence from the data-sentence attribute
        const sentence = selectedOption.dataset.sentence;

        // Display the sentence inside the textarea
        sentenceBox.value = sentence;

        // Automatically speak the selected word
        speak(selectedOption.value);
    } else {
        sentenceBox.value = "";
    }
}

// This function speaks the currently selected word
function speakWord() {
    const menu = document.getElementById("wordSelect");

    // Only speak if the user selected a real word
    if (menu.selectedIndex > 0) {
        const selectedOption = menu.options[menu.selectedIndex];
        speak(selectedOption.value);
    } else {
        alert("Please select a word first.");
    }
}

// This function speaks the sentence shown in the textarea
function speakSentence() {
    const sentenceBox = document.getElementById("sentenceDisplay");

    // Only speak if a sentence is displayed
    if (sentenceBox.value !== "") {
        speak(sentenceBox.value);
    } else {
        alert("Please select a word first.");
    }
}
