let startTime;
let timerInterval;
let finalTime;
function start(){

    document.getElementById("start-btn").style.display ="none";

    document.getElementById("cards.container").style.display="block";

    startTime = new Date().getTime();
    document.getElementById("points-id").innerHTML = "Attempts: 0";
    document.getElementById("points-id").style.display ="inline-block";
    document.getElementById("timer").style.display="inline-block";
    timerInterval = setInterval(updateTimer, 10);
}
function updateTimer(){
    let elapsedMilli = new Date().getTime() - startTime;
    let elapsedTenths = Math.floor((elapsedMilli/100)%10);
    let elapsedSeconds = Math.floor(elapsedMilli/1000);
    elapsedSeconds=elapsedSeconds %60;
    finalTime = (elapsedSeconds<10 ? "0":"")+ elapsedSeconds+ "."+ elapsedTenths+ (elapsedMilli%10);
    let timeString = "Time: "+finalTime;
    document.getElementById("timer").innerHTML = timeString;
}

function stopTimer(){
    clearInterval(timerInterval);
}

let skinColours = [
    "green.png",
    "red.png",
    "yellow.png"
];

let eyes = [
    "closed.png",
    "laughing.png",
    "long.png",
    "normal.png",
    "rolling.png",
    "winking.png"
];

let mouths = [
    "open.png",
    "sad.png",
    "smiling.png",
    "straight.png",
    "surprise.png",
    "teeth.png"
];

let isStart = true;
function generateAvatars() {
    const avatarElements = document.querySelectorAll(".card");
    for (let i = 0; i < avatarElements.length; i++) {
        let skinColourIndex = Math.floor(Math.random() * skinColours.length);
        let eyesIndex = Math.floor(Math.random() * eyes.length);
        let mouthIndex = Math.floor(Math.random() * mouths.length);

        let skinColourImg = avatarElements[i].querySelector(".skin-colour");
        skinColourImg.setAttribute("src", "emoji assets/skin/" + skinColours[skinColourIndex]);

        let eyesImg = avatarElements[i].querySelector(".eyes");
        eyesImg.setAttribute("src", "emoji assets/eyes/" + eyes[eyesIndex]);

        let mouthImg = avatarElements[i].querySelector(".mouth");
        mouthImg.setAttribute("src", "emoji assets/mouth/" + mouths[mouthIndex]);

    }


    let cardClones = document.querySelectorAll(".card");

    for (let i = 0; i < cardClones.length; i++) {
        let parentDiv = cardClones[i].parentNode;
        let clonedDiv = cardClones[i].cloneNode(true);
        parentDiv.appendChild((clonedDiv))
    }
    let cards = document.querySelectorAll(".card");

    for (let i = 0; i < cards.length; i++) {
        cards[i].addEventListener("click", flipCard);
    }


    let container = document.getElementById("cards.container");
    let divs = container.children;

    let divsArray = [];
    for (let i = 0; i < divs.length; i++) {
        divsArray.push(divs[i]);
    }

    //shuffle the divs within the "cards.container" div so that it is random each time the page is loaded
    for (let i = divsArray.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = divsArray[i];
        divsArray[i] = divsArray[j];
        divsArray[j] = temp;
    }

    for (let i = 0; i < divsArray.length; i++) {
        container.appendChild(divsArray[i]);
    }
}
let flippedCards=[];
let winCounter = 0;
let pointsCounter = 0;
let finalScore = 0;

function flipCard() {
    if (this.classList.contains("flipped")){
        return;
    }

    this.classList.add("flipped");
    flippedCards.push(this);

    if (flippedCards.length===2) {
       checkForMatch()
    }
}

function checkForMatch() {

    let firstBack = flippedCards[0];
    let secondBack = flippedCards[1];
    pointsCounter+=1
    let pointsString = "Attempts: "+pointsCounter;
    document.getElementById("points-id").innerHTML = pointsString;
    if (isLost()){
        const loseMessage= document.getElementById("lose-message");
        loseMessage.style.display="block";
        stopTimer();
    }
    if (firstBack.innerHTML === secondBack.innerHTML) {
        winCounter+=1;
        if (isWon()){
            stopTimer();
            finalScore = Number(finalTime)+Number(pointsCounter);
            finalScore = Math.round(finalScore*100)/100;
            document.getElementById("score-id").innerHTML=String("You took "+pointsCounter+" attempts");
            document.getElementById("time-id").innerHTML=String("Your time was: "+finalTime);
            document.getElementById("final-id").innerHTML=String("Final score: "+finalScore);
            const winMessage = document.getElementById("win-message");
            winMessage.style.display="block";
        }
        disableCards();
    } else {
        unflipCards();
    }
}
function disableCards() {
    flippedCards[0].removeEventListener("click", flipCard);
    flippedCards[1].removeEventListener("click", flipCard);
    resetCards();
}

function unflipCards() {
    setTimeout(function() {
        flippedCards[0].classList.remove("flipped");
        flippedCards[1].classList.remove("flipped");
        resetCards();
    }, 300);
}

function resetCards() {
    flippedCards=[];
}

function isWon(){
    if (winCounter===5){
        return true;
    }
}
function isLost(){
    if (pointsCounter=== 20){
        let container = document.getElementById("cards.container");
        let divs = container.children;
        console.log(divs);
        for (let i = 0; i < divs.length; i++) {
            divs[i].style.scale="1.0";
            divs[i].style.cursor="default";
            divs[i].removeEventListener("click", flipCard);
        }
        return true;
    }

}

function replay(){
    const winMessage = document.getElementById("win-message");
    winMessage.style.display="none";
    location.reload();
}

if (isStart===true){
    generateAvatars();
}
function getCookie(name){
    let value = "; " + document.cookie;
    let parts = value.split("; "+ name + "=");
    if (parts.length === 2) return parts.pop().split(";").shift();
}
function submit(){
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "http://localhost:63342/Coursework/php_scripts/score.php");
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    let username = getCookie('uname');
    let score = finalScore;
    let data = 'username= '+encodeURIComponent(username)+'&score= '+encodeURIComponent(score);
    xhr.onreadystatechange = function(){
        if(xhr.readyState === XMLHttpRequest.DONE){
            console.log(xhr.responseText);
        }
    };
    xhr.send(data);
}
