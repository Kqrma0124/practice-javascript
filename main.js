const gameSelecter = document.getElementById('game-selector');
const gameContainer = document.getElementById('game-container');

gameSelecter.addEventListener("change",function(){

    gameContainer.innerHTML = "";

    switch(gameSelecter.value){
        case"none":
        gameContainer.textContent="ゲームを選ぶことここに表示されます"
            break;

        case"clik-counter":
           ClickCounterGame();
            break;

        case"namber-guess":
        NumberGuessGame();
            break;
    }
})

function NumberGuessGame(){
    const randoumNumber = Math.floor(Math.randoum()*100)+1;

    let message = document.createElement("p");

let input = document.createElement("input");
nput.type="Number";
input.max=100;
input.min=1;
input.placeholder="好きな数字を入れてください(1~100)"

button.textContent = "予想"
let button = document.createElement("button");



button.textContent = "予想"

button.addEventListener("click",function(){
    const userGuess = parseInt(input.value);
    if(userGuess === randoumNumber){
        message.textContent="正解!"
    }else if(userGuess > randomNumber){
        message.textContent = "値が高い！"
    }else {
        message.textContent = "値が小さい！"
    }
})



message.textContent = "文字"

    gameContainer.appendChild(input);
    gameContainer.appendChild(button);
    gameContainer.appendChild(message);

}

function ClickCounterGame(){

    let count = 0 ;
   
    
    let counter = document.createElement("p");

    let button1 = document.createElement("button");
    button1.textContent = "+1ボタン";


 let button2 = document.createElement("button");
    button2.textContent = "+10ボタン";
  
    let button3 = document.createElement("button");
    button3.textContent = "+100ボタン";
   

    button1.addEventListener("click",function(){
        count++;
        counter.textContent = count;
    })

    button2.addEventListener("click",function(){
        count = count +10;
        counter.textContent = count;
    })

    button3.addEventListener("click",function(){
        count = count +100;
        counter.textContent = count;
    })
    gameContainer.appendChild(button1);  
    gameContainer.appendChild(button2);    
    gameContainer.appendChild(button3);  
    gameContainer.appendChild(counter);
}

