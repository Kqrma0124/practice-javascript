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

        case"number-guess":
            NumberGuessGame();
            break;

        case"RPS":
            RPS();
            break;
    }
})







