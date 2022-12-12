console.log('JS OK')

/*
1) creo un array di email
2) prendo la mail dall'input 
3) verifico se la mail corrisponde nell'elenco
4) stampo un messaggio sull'esito del controllo
*/

const button = document.getElementById('button');
const RPGmail = ["mage@gmail.com","warrior@gmail.com","thief@gmail.com","healer@gmail.com"];

button.addEventListener("click",function(){
    const inputMail = document.getElementById('input');
    
    for(let i=0; i < RPGmail.length; i++){
        const singlemail=RPGmail[i];
        console.log(RPGmail.length);

        if(inputMail === singlemail[i]){
            document.getElementById("authorize").innerText=('ACCESS ALLOWED ! WELCOME TO THIS LAND !')
            document.getElementById("authorize").classList.add("text-success");
            
        }else if (inputMail !== singlemail[i]){
        document.getElementById("authorize").innerText=('ACCESS DENIED ! GO HOME OUTLANDER !')
        document.getElementById("authorize").classList.add("text-danger");
    }}})
   
    


