//Mein erstes JavaScript

const message =[
    "Bist du dir sicher?",
    "Willst du das wirklich tun?",
    "Bist du dir wirklich sicher?",
    "Bitte nicht...",
    "Überleg es dir nochmal!",
    "Wenn du nein sagst, dann bin ich traurig :(",
    "Ich werde traurig",
    "Ich werde sehr traurig :(",
    "Ok ich frage nicht mehr",
    "Spass, sag JA! ❤️",
];

let messageIndex = 0;

function handleNoclick(){
const nobutton = document.querySelector(".no-button");  //Brücke zwischen HTML und JavaScript
const yesbutton = document.querySelector(".yes-button");
nobutton.textContent = message[messageIndex];
messageIndex = (messageIndex + 1) % message.length;
const currentsize = parseFloat(getComputedStyle(yesbutton).fontSize); // Aktuelle Schriftgröße des Ja-Buttons, bsp.: 16px -> 16 damit wir damit rechnen können
const newsize = currentsize * 1.5;

if(currentsize < 1000){
    yesbutton.style.fontSize = newsize + "px";
}
}

function handleYesclick(){
    window.location.href = "yes_page.html";
}