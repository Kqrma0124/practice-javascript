function NumberGuessGame(){
    const randoumNumber = Math.floor(Math.randoum()*100)+1;

    let message = document.createElement("p");

let input = document.createElement("input");
input.type="Number";
input.max=100;
input.min=1;
input.placeholder="好きな数字を入れてください(1~100)"


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