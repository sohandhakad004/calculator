var screen = document.querySelector("#screen");
var screenValue='';
 btns = document.querySelectorAll("button");

for(item of btns){
    item.addEventListener(`click`, (e)=>{
        buttonText = e.target.innerText;
        // console.log(buttonText)
        if(buttonText=='X'){
            buttonText='*';
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if(buttonText=='C'){
            screenValue = '';
            screen.value = screenValue;
        }
        else if(buttonText=='='){
            screen.value = eval(screenValue);
        }
        else{
            screenValue += buttonText;
            screen.value = screenValue; 
        }


    })
}
var main = document.querySelector("#main")
main.addEventListener("click",function(){
    btns.style.backgroundColor ="red";

});