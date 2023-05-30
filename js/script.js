//costante timer
const timer= 30

//variabile collegata al dom
let numbersDom = document.getElementById('random-numbers');
numbersDom.innerHTML='';

let userDom = document.getElementById('user-numbers');
userDom.innerHTML='';

let result = document.getElementById('result');
result.innerHtml=''
 
//genero numeri casuali
function randomNumber (min, max){
    return Math.floor(Math.random()* (max - min + 1)+ min)
}

//creo array vuoto e lo riempio di 5 numeri casuali
let numbersArray=[];
for(let i=0; i<5; i++){
    numbersArray.push(randomNumber(1,100));
}

//posiziono i valori dell'array in contenitori singoli
let numberDiv;
let userNumbers;
let rightNumbers= 0;

//riempimento array numeri casuali
for(let i=0; i<numbersArray.length;i++){
    numberDiv = document.createElement('div');
    numberDiv.classList.add('number');
    numberDiv.classList.add('flex');
    numberDiv.innerText=numbersArray[i];
    numbersDom.appendChild(numberDiv)
    
    //timeout per far scomparire le caselle prima dell'arrivo dei prompt
    setTimeout(function(){
        numbersDom.classList.remove('flex');
        numbersDom.classList.add('none');
    },timer*1000)

    //timeout con controllo numeri corretti
    let userDiv;
    setTimeout(function(){
       userNumbers= (parseInt(prompt('inserisci un numero')))
       console.log(userNumbers)
       if(numbersArray.includes(userNumbers)){
           rightNumbers++
           
           userDiv= document.createElement('div');
           userDiv.classList.add('correct-number');
           userDiv.classList.add('flex');
           userDiv.innerText = userNumbers;
           userDom.appendChild(userDiv);
        }
    },timer*1050)
}

//timeout messaggio finale
 setTimeout(function(){
    result.classList.remove('none')
    result.classList.add('block')
    result.append(`hai indovinato ${rightNumbers} elementi`);

},timer*1050)

