/*--------------------------------Constants----------------------------------------------------------*/
const wordsBank = ["JAVA", "PYTHON", "JAVASCRIPT", "CSS", "HTML", "RUBY", "KOTLIN", "SWIFT", "GO", "TYPESCRIPT", "SQL", "PERL", "DART", "PASCAL", "PROLOG", "REACT", "EXPRESS", "NODE", "MONGODB"];
const maxAttepmts = 6;
const hangmanImages = ["images/image0.png", "images/image1.png", "images/image2.png", "images/image3.png", "images/image4.png", "images/image5.png", "images/image6.png"];




/*---------------------------------Veriables----------------------------------------------------------*/
let attemptsCount = 0;
let imageIndex = 0;
let currentWord = "";
let word = [];
let underScore = [];
/*-------------------------------------Cached Elements---------------------------------------------------*/
const displayWord = document.querySelector("#word-board");
const messageElement = document.querySelector("#message");
const letterBtns = document.querySelectorAll(".letter");
const imageElement = document.querySelector("img");
const attemptsElement = document.querySelector("#attempts");
const letterSingleBtn = document.querySelector(".letter");
const playAgainEl = document.querySelector("#play-again");



/*---------------------------------------------Functions----------------------------------------------------*/
const initiateDisplayWord = () => {
    displayWord.textContent = "_".repeat(currentWord.length);



}


updateDisplayWord = (letter) => {

    displayWord.textContent = letter;



}



const updateImageIndex = () => {

    imageElement.src = hangmanImages[imageIndex];



}

const updateWinImageIndex = () => {

    imageElement.src = "chill-guy.gif";



}

const updateAttempt = () => {
    attemptsElement.textContent = `Attempts left:  ${maxAttepmts - attemptsCount}`;



}


const updateMessage = (message) => {

    messageElement.textContent = message;



}





const btnDisabled = () => {
    letterBtns.forEach((btn) => {

        btn.disabled = true;


    })
}

const finalWord = () => {

    displayWord.textContent = currentWord;



}




const btnEnbaled = () => {
    letterBtns.forEach((btn) => {

        btn.disabled = false;


    })


}


const handleBtnClick = (event) => {


    let clickedLetter = event.target.textContent;
    let isCorrectGuess = false;

    word.forEach((w, index) => {

        if (w === clickedLetter) {
            w[index] = clickedLetter;
            isCorrectGuess = true;
            console.log(w);
            underScore[index] = clickedLetter;
            updateDisplayWord(underScore);
            console.log(underScore)
        }
    })
    if (isCorrectGuess) {
        if (!underScore.includes("_")) {
            updateMessage(`Gongrats You won!! the word was ${currentWord}`);
            updateWinImageIndex();
            event.target.disabled = true;
            playAgainEl.style.display = "block";


        }

    }

    else {
        attemptsCount++;
        imageIndex++;
        updateAttempt();
        updateImageIndex();
        updateMessage(`Game over 0 attempts left , the word was ${currentWord}`);




        if (attemptsCount < maxAttepmts) {
            updateMessage(`╰（‵□′）╯ Try again!`);
        }
        else {
            btnDisabled();
            finalWord();
            playAgainEl.style.display = "block";

        }






    }







    event.target.disabled = true;
    event.target.style.backgroundColor = "gray";




}













const init = () => {
    randomIndex = Math.floor(Math.random() * wordsBank.length);

    console.log(randomIndex);
    currentWord = "";
    currentWord += wordsBank[randomIndex];
    console.log(currentWord);

    word = currentWord.split("");
    console.log(word);

    imageIndex = 0;
    attemptsCount = 0;

    initiateDisplayWord();

    underScore = displayWord.textContent.split("")

    updateImageIndex();
    updateAttempt();
    btnEnbaled();
    updateMessage("Hint: Programming language & frameworks");
    playAgainEl.style.display = "none";



}

init();


const playAgainBtn = () => {
    letterBtns.forEach((button) => {

        button.style.backgroundColor = "#007cffb8";
    })

    init();


}



/*-------------------------------Event Listener----------------------------------------------------------*/


letterBtns.forEach((button) => {

    button.addEventListener("click", handleBtnClick);


})

playAgainEl.addEventListener("click", playAgainBtn);