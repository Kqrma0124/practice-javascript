function RPS(){

    const choices = ["gu","choki","pa"];
    
    let handImage = ""

    /*この書き方は、配列を意味する　C言語参照*/ 
    
    // let select = document.createElement("select")
    // let option1 = document.createElement("option")
    // let option2 = document.createElement("option")
    // let option3 = document.createElement("option")
    // const gu ="gu";
    // option1.value=gu;
    // option1.textContent=gu;
    // select.appendChild(option1);

    // option2.value=choki;
    // option2.textContent=choki;
    // select.appendChild(option2);

    // option3.value=pa;
    // option3.textContent=pa;
    // select.appendChild(option3);

    // select.appendChild(select);

    let select = document.createElement("select")
    select.id = "choice"

    choices.forEach(choice => {
    let option =document.createElement("option")
    option.value =choice
    option.textContent = choice;
    option.id = choice;
    select.appendChild(option);
   


    })

    let choiceButton = document.createElement("button")
    choiceButton.textContent="決定"

    gameContainer.appendChild(choiceButton)


    choiceButton.addEventListener("click",function(){
        switch(select.value){
                case "gu":
                    image.src="https://tsukatte.com/wp-content/uploads/2019/03/janken_gu-940x940.png";
                    break;
            
                case "choki":
                    image.src="https://tsukatte.com/wp-content/uploads/2019/03/janken_choki.png";
                    break;
            
                case "pa":
                    image.src="https://tsukatte.com/wp-content/uploads/2019/03/janken_pa-940x940.png";
                    break;
            
                default:
                    break;
            
                }
                
                gameContainer.appendChild(image);
                gameContainer.appendChild(enemyImage);

                let enemyHand = choices[Math.floor(Math.random()*choices.length)];
                
                switch(enemyHand){
                    case "gu":
                        enemyImage.src="https://tsukatte.com/wp-content/uploads/2019/03/janken_gu-940x940.png";
                        break;
                
                    case "choki":
                        enemyImage.src="https://tsukatte.com/wp-content/uploads/2019/03/janken_choki.png";
                        break;
                
                    case "pa":
                        enemyImage.src="https://tsukatte.com/wp-content/uploads/2019/03/janken_pa-940x940.png";
                        break;
                
                    default:
                        break;
                
                    }
                
    })

    


    let image =document.createElement("img")
    image.alt="Choice"
    image.style.width = "100px"
    image.style.height = "100px"
    
    let enemyImage =document.createElement("img")
    enemyImage.alt="Choice"
    enemyImage.style.width = "100px"
    enemyImage.style.height = "100px"

    gameContainer.appendChild(select);

    
    /*forEach は配列やオブジェクトなど複数のデータがあるものに使える。全部やる関数
    配列 forEach(配列の中身 =>{命令}) */


}