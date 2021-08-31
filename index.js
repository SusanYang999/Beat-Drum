var numberOfDrumButtons=document.querySelectorAll(".drum").length;

for(var i=0;i<numberOfDrumButtons;i++){

    document.querySelectorAll(".drum")[i].addEventListener("click",handleClick);
     function handleClick(){

    var letterOfButton=this.innerHTML;
    makeSound(letterOfButton);
    buttonAnimation(letterOfButton);

}
}

document.addEventListener("keydown",handleKeyBoard);
function handleKeyBoard(event){
      makeSound(event.key);
      buttonAnimation(event.key);
}



function makeSound(key){

switch (key) {
case "a":
var audio1=new Audio("sounds/tom-1.mp3");
audio1.play();
break;

case "s":
var audio2 = new Audio("sounds/tom-2.mp3");
audio2.play();
break;

case "d":
var audio3 = new Audio("sounds/tom-3.mp3");
audio3.play();
break;

case "f":
var audio4 = new Audio("sounds/tom-4.mp3");
audio4.play();
break;

case "g":
var audio5 = new Audio("sounds/crash.mp3");
audio5.play();
break;

case "h":
var audio6 = new Audio("sounds/kick-bass.mp3");
audio6.play();
break;

case "j":
var audio7 = new Audio("sounds/snare.mp3");
audio7.play();
break;

default:console.log(key);

}

}

function buttonAnimation(currentKey){

var activeButton=document.querySelector("."+currentKey);
activeButton.classList.add("pressed");
setTimeout(function(){activeButton.classList.remove("pressed")},200);
}
