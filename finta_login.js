console.log('JS OK')

/*
1) creo un array di email
2) prendo la mail dall'input 
3) verifico se la mail corrisponde nell'elenco
4) stampo un messaggio sull'esito del controllo
*/

const RPGmail = ["mage@gmail.com","warrior@gmail.com","thief@gmail.com","healer@gmail.com"];
const button = document.getElementById('button');

const authorize = document.getElementById('authorize');

button.addEventListener("click",function(){
    
    let permission = false;
    const input = document.getElementById('email').value;
  
    for(let i = 0; !permission && i < RPGmail.length; i++){
    
        const singlemail=RPGmail[i];
        console.log(RPGmail.length);

        console.log("Giro:" + i + " - Mail utente:" + input + " - Mail ciclo:" + singlemail);

        if(input === singlemail){
           permission = true;
        }
}
authorize.innerText = permission ? 'Welcome' : 'no';

});
   
    


