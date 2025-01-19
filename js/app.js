/*--------------------------------Constants----------------------------------------------------------*/ 
const wordsBank=["JAVA" ,"PYTHON","JAVASCRIPT","CSS","HTML","RUBY"];
const maxAttepmts=4;
const  hangmanImages = ["images/image0.png","images/image1.png", "images/image2.png", "images/image3.png", "images/image4.png"];




/*---------------------------------Veriables----------------------------------------------------------*/ 
let guessWord =[];
let attemptsCount=0;
let imageIndex=0;
let currentWord="";
/*-------------------------------------Cached Elements---------------------------------------------------*/ 
const displayWord =document.querySelector("#word-board");
const messageElement= document.querySelector("#message");
const letterBtns=document.querySelectorAll(".letter");
const imageElement=document.querySelector("img");
const attemptsElement = document.querySelector("#attempts");


/*---------------------------------------------Functions----------------------------------------------------*/
const UpdateDisplayWord=()=>{
displayWord.textContent= "_ ".repeat(currentWord.length);


    


}

const updateImageIndex =()=>{

imageElement.src=hangmanImages[imageIndex];



}



const init =()=>{
randomIndex=Math.floor(Math.random() * wordsBank.length);
console.log(randomIndex);
currentWord+=wordsBank[randomIndex];
// console.log(currentWord);
imageIndex=0;
attemptsCount=0;
UpdateDisplayWord();
updateImageIndex();




}

init()






/*-------------------------------Event Listener----------------------------------------------------------*/ 