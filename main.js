const gameSelector=document.getElementById("game-select")
const gameContainer=document.getElementById("game-container")

gameSelector.addEventListener('change',function(){
    gameContainer.innerHTML='';
    switch(gameSelector.value){
        case'number-guess':
        NUmberGuessGame();
        break;

        case'clicker':
        ClickCounterGame()
        break;
    }
    
});


 function ClickCounterGame(){
     let count = 0;
     const gameContainer=document.getElementById("game-container");

    let button1 = document.createElement("button");
    button1.textContent="+1ボタン" 

    let button2 = document.createElement("button")
    button2.textContent="10ボタン"

    let button3 = document.createElement("button")
    button3.textContent="リセット"

    let counter = document.createElement("p");
    counter.textContent = count;

    button1.addEventListener("click",function(){
     if(count<100){
     count++;
 
     }

         counter.textContent=count;
     })
     button2.addEventListener("click",function(){
         if(count<=90){
        
             count = count + 10;
         }
             counter.textContent=count;
     
     })
     button3.addEventListener("click",function(){
       count = 0;
       counter.textContent=count;
     })
     gameContainer.appendChild(button1);
     gameContainer.appendChild(button2);
     gameContainer.appendChild(button3);
     gameContainer.appendChild(counter);
     }
    




    function NUmberGuessGame(){
    const gameContainer = document.getElementById("game-container");

    const ramdomNumber = Math.floor(Math.random()*100)+1;

    let message =document.createElement("p");

    let input = document.createElement("input");
    
    input.type = 'number';
    
    input.placeholder="好きな数字を入力してください(1-100)"

    gameContainer.appendChild(message);
    gameContainer.appendChild(input);


    let button = document.createElement("button")
    button.textContent="確認"

    button.addEventListener("click",function(){

        const val= parseInt(input.value);

        if(ramdomNumber == val){
            message.textContent="正解"
        }

        else  if(ramdomNumber<val){
        message.textContent="大きい"
        }
        
        else{
            message.textContent="小さい"
        }
        count++;
        countDisplay.textContent= `試行回数: ${count}`;
    })

    gameContainer.appendChild(button);

    let count=0;

    const countDisplay=document.createElement("countDisplay");
    countDisplay.textContent= `試行回数: ${count}`;    
    gameContainer.appendChild(countDisplay);

    //``「バッククォート」で囲うと特殊な文字列だと認識できる
    //今回であれば＄{}で囲われている部分をプログラムの中の変数として判別する
    //countDisplay.textContent= `試行回数: ${count}`;クリックイベントに追加
    
}



