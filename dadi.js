console.log('JS OK')

/* ESERCIZIO 1

-Genero un numero random da 1 - 6
-Assegno i numeri ad ogni sfidante
-stampo in pagina i tiri
-Creo una condizione che mi porti a definire il vincitore 
-stampo in pagina il risultato
*/

button.addEventListener("click",function(){

//    genero un numero random da 1 a 6 per ogni giocatore

    const randomNumber1=Math.floor(Math.random()*6)+1;
    const randomNumber2=Math.floor(Math.random()*6)+1;

//    assegno i numeri ad ogni sfidante

    const number1=("PLAYER 1 : " + randomNumber1);
    const number2=("PLAYER 2 : " + randomNumber2);
    console.log(number1 , number2);

 //   stampo in pagina i tiri

    document.getElementById("player1").innerText = (number1);  
    document.getElementById("player2").innerText = (number2); 

 //   applico una condizionale che indica il vincitore

    if(randomNumber1 > randomNumber2 ){
        document.getElementById("result").innerText = ("THE WINNER IS: PLAYER 1 !!!" );
        
    }else if(randomNumber1 === randomNumber2){
        document.getElementById("result").innerText = ("DRAW!!! REROLL PLEASE!" );
    
    }else if(randomNumber1 < randomNumber2 ){
        document.getElementById("result").innerText = ("THE WINNER IS: PLAYER 2 !!!" );
        
    }

})



