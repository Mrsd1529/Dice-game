var randomNumber1 = Math.floor(Math.random()*6)+1

var randomDiceImage1 = "dice" + randomNumber1 + ".png"

var randomImageSource1 =randomDiceImage1

var image1 = document.querySelectorAll("img")[0]

image1.setAttribute("src", randomImageSource1)



var randomNumber2 = Math.floor(Math.random()*6)+1

var randomDiceImage2 = "dice" + randomNumber2 + ".png"

var randomImageSource2 = randomDiceImage2

var image1 = document.querySelectorAll("img")[1]

image1.setAttribute("src", randomImageSource2)

    if(randomNumber2==randomNumber1){
        document.querySelector("h2").innerHTML= "Its a Tie!!"
    }
    else if(randomNumber1>randomNumber2){
        document.querySelector("h2").innerHTML="Player 1 is a Winner!!"
    }
    
    else{
        document.querySelector("h2").innerHTML="Player 2 is a Winner!!"
        
    }

    function clickme(){
        window.location.reload()
    }