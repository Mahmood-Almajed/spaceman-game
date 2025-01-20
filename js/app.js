/*--------------------------------Constants----------------------------------------------------------*/ 
const wordsBank=["JAVA" ,"PYTHON","JAVASCRIPT","CSS","HTML","RUBY"];
const maxAttepmts=4;
const  hangmanImages = ["images/image0.png","images/image1.png", "images/image2.png", "images/image3.png", "images/image4.png"];




/*---------------------------------Veriables----------------------------------------------------------*/ 
let guessWord =[];
let attemptsCount=0;
let imageIndex=0;
let currentWord="";
let word;
let underScore=[];
/*-------------------------------------Cached Elements---------------------------------------------------*/ 
const displayWord =document.querySelector("#word-board");
const messageElement= document.querySelector("#message");
const letterBtns=document.querySelectorAll(".letter");
const imageElement=document.querySelector("img");
const attemptsElement = document.querySelector("#attempts");


/*---------------------------------------------Functions----------------------------------------------------*/
const initiateDisplayWord=()=>{
displayWord.textContent= "_ ".repeat(currentWord.length);



}


// updateDisplayWord =(letter)=>{

// displayWord.textContent.replace("_ ",letter)



// }



const updateImageIndex =()=>{

imageElement.src=hangmanImages[imageIndex];



}

const updateAttempt =()=>{
attemptsElement.textContent=`Attempts:  ${maxAttepmts-attemptsCount}`;



}


const updateMessage =(message)=>{

messageElement.textContent=message;



}





const btnDisabled=()=>{
    letterBtns.forEach((btn)=>{

        btn.classList.add("disabled");


    })


}




const btnEnbaled=()=>{
    letterBtns.forEach((btn)=>{

        btn.classList.remove("disabled");


    })


}


const handleBtnClick=(event)=>{

let clickedLetter=event.target.textContent;
let isCorrectGuess=false;

word.forEach((w,index)=>{

    if(w===clickedLetter && w.includes("_ ")){
     w[index]=clickedLetter;
     isCorrectGuess=true;
     //need to be completed
    }
  
}





)}












const init =()=>{
randomIndex=Math.floor(Math.random() * wordsBank.length);
console.log(randomIndex);
currentWord+=wordsBank[randomIndex];
console.log(currentWord);
word =currentWord.split("");
console.log(word)
imageIndex=0;
attemptsCount=0;
initiateDisplayWord();
updateImageIndex();
updateAttempt();
btnEnbaled();
updateMessage("");



}

init();






/*-------------------------------Event Listener----------------------------------------------------------*/ 


letterBtns.forEach((button)=>{

button.addEventListener("click",handleBtnClick);


})