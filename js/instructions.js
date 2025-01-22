const instructionsButton = document.getElementById('instructions-button');
const instructions = document.getElementById('instructions');



const playGameEl = document.querySelector("#play-btn");


const playBtn = () => {

    window.location.href = "index1.html";

}



playGameEl.addEventListener('click', playBtn);


instructionsButton.addEventListener('click', () => {
    if (instructions.style.display === 'none') {
        instructions.style.display = 'block';
        instructionsButton.textContent = 'Close';
    } else {
        instructions.style.display = 'none';
        instructionsButton.textContent = 'Instructions';
    }
});
