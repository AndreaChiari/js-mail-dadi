console.log('JS OK')

/*
1) creo un array di email
2) cero un prompt nel quale chiedo all'utente la sua e mail
3)verifico se la mail corrisponde nell'elenco
4)stampo un messaggio sull'esito del controllo
*/

const RPGmail = ["mage@gmail.com","warrior@gmail.com","thief@gmail.com","healer@gmail.com" ];

const questionMail = prompt('Hello hero ! please enter your E-mail');

if(questionMail === RPGmail){
    document.getElementById("authorize").innerText=('ACCESS ALLOWED ! WELCOME TO THIS LAND !')
    h1.classList.add("text-success");

}else if (questionMail !== RPGmail){
    document.getElementById("authorize").innerText=('ACCESS DENIED ! GO HOME OUTLANDER !')
    h1.classList.add("text-danger");
}
