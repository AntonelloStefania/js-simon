//costante timer
const timer= 30

//variabile collegata al dom
let numbersDom = document.getElementById('random-numbers');
numbersDom.innerHTML='';

let userDom = document.getElementById('user-numbers');
userDom.innerHTML=''
 
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
for(let i=0; i<numbersArray.length;i++){
    numberDiv = document.createElement('div');
    numberDiv.classList.add('number');
    numberDiv.classList.add('flex');
    numberDiv.innerText=numbersArray[i];
    numbersDom.appendChild(numberDiv)
    
    setTimeout(function(){
        numbersDom.classList.remove('flex');
        numbersDom.classList.add('none');
    },3*1000)

let userDiv;
    setTimeout(function(){
       userNumbers= (parseInt(prompt('inserisci un numero')))
       console.log(userNumbers)
       if(numbersArray.includes(userNumbers)){
           userDiv= document.createElement('div');
           userDiv.classList.add('correct-number');
           userDiv.classList.add('flex');
           userDiv.innerText = userNumbers;
           userDom.appendChild(userDiv);
       }
    },3*1200)

}




// let bombsCells= document.getElementById('grid').children
// for(let i=0; i< bombsCells.length; i++){
//     let number = parseInt(bombsCells[i].innerText);

//     if(bombArray.includes(number)){
//        bombsCells[i].classList.add('bomb')
//     }
// }


//funzione che gestisce il cambio classi

