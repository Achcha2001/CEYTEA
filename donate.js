const prchname = document.getElementById('field1');
const prchcvv = document.getElementById('cvv');
const prchnum = document.getElementById('cardnum');
const prer1 = document.getElementById('er1');
const prer2 = document.getElementById('er2');
const prer3 = document.getElementById('er3');
const btncon = document.getElementById('con');


let pmessage1 = 'Full name required'
let pmessage2 = 'Not a valid cvv'
let pmessage3 = 'cvv number required'
let pmessage4 = 'Card number required'
let pmessage5 = 'Not a valid card number'
 function perror() {
    if(prchname.value===''||prchname.value ==null){
        prer1.innerText = `${pmessage1}`;
    }if(prchcvv.value==''||prchcvv.value ==null){
        prer2.innerText = `${pmessage3}`
    }if(prchcvv.value.length !== 3){
        prer2.innerText = `${pmessage2}`
    }if(prchnum.value==''){
        prer3.innerText = pmessage4;
    }if(prchnum.value.length !== 16){
        prer3.innerText = pmessage5;
    }


    
 }
 btncon.addEventListener('click',perror)