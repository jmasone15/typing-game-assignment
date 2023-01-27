const targetLetter = document.getElementById("target");
const responseLetter = document.getElementById("response");
const correctDiv = document.getElementById("correct");
const incorrectDiv = document.getElementById("incorrect");
const lettersArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// Check response function not needed

function generateRandomLetter() {
    responseLetter.value = "";
    // Math.floor is needed to round the index value up to a whole number.
    let randIdx = Math.floor(Math.random() * lettersArray.length);
    targetLetter.value = lettersArray[randIdx];
};

function resultsResponse(show, value) {
    if (show) {
        if (value === "Correct") {
            correctDiv.setAttribute("style", "");
        } else {
            incorrectDiv.setAttribute("style", "");
        }
    } else {
        // Display None will hide the correct/incorrect
        if (value === "Correct") {
            correctDiv.setAttribute("style", "display: none;");
        } else {
            incorrectDiv.setAttribute("style", "display: none;");
        }
    }
};

generateRandomLetter();

// Event listener should be on keydown not click
responseLetter.addEventListener("keydown", function (e) {
    let res = e.code.slice(3);
    let letterPress = lettersArray.includes(res);

    if (!letterPress) {
        responseLetter.value = null;
        return;
    };

    // We should check if response is === to the target
    if (res === targetLetter.value) {
        resultsResponse(true, "Correct");
        setTimeout(() => { generateRandomLetter(), resultsResponse(false, "Correct") }, 500);
    } else {
        resultsResponse(true, "Incorrect");
        setTimeout(() => { generateRandomLetter(), resultsResponse(false, "Incorrect") }, 500);
    }
});

// This allows the input field to be highlighted on page load
responseLetter.focus()