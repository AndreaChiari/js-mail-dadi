console.log('JS OK')

/*
1) creo un array di email
2) prendo la mail dall'input 
3) verifico se la mail corrisponde nell'elenco
4) stampo un messaggio sull'esito del controllo
*/

const RPGmail = ["mage@gmail.com","warrior@gmail.com","thief@gmail.com","healer@gmail.com"];
const button = document.getElementById('button');
const input = document.getElementById('email');
const authorize = document.getElementById('authorize');

button.addEventListener("click",function(){
    
    let permission = false;
    const inputMail = document.getElementById('input');
    for(let i = 0; !permission && i < RPGmail.length; i++){
    
        const singlemail=RPGmail[i];
        console.log(RPGmail.length);

        if(inputMail === singlemail){
           permission = true;
        }
}
authorize.innerText = permission ? 'Welcome' : 'no';

});
   
    


