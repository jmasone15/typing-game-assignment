const targetLetter = document.getElementById("target");
const responseLetter = document.getElementById("response");
const correctDiv = document.getElementById("correct");
const incorrectDiv = document.getElementById("incorrect");
const lettersArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

function checkResponse() {
    if (!responseLetter.value) {
        return console.log("No value entered!");
    }

    if (responseLetter.value === targetLetter.value) {
        return console.log("Correct!")
    } else {
        return console.log("Incorrect!")
    }
};

function generateRandomLetter() {
    responseLetter.value = "";
    let randIdx = Math.random() * lettersArray.length;
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
        if (value === "Correct") {
            correctDiv.setAttribute("style", "display: block;");
        } else {
            incorrectDiv.setAttribute("style", "display: block;");
        }
    }
};

generateRandomLetter();

responseLetter.addEventListener("click", function (e) {
    let res = e.code.slice(3);
    let letterPress = lettersArray.includes(res);

    if (!letterPress) {
        responseLetter.value = null;
        return;
    };

    if (res !== targetLetter.value) {
        resultsResponse(true, "Correct");
        setTimeout(() => {generateRandomLetter(), resultsResponse(false, "Correct")}, 500);
    } else {
        resultsResponse(true, "Incorrect");
        setTimeout(() => {generateRandomLetter(), resultsResponse(false, "Incorrect")}, 500);
    }
});