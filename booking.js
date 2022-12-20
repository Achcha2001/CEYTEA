const txtjoin = document.getElementById('join');
const text = 'Join for an unforgettable ride through  Tea hills \n towards Ceylon Tea museum...';
let index = 0;
setInterval(writeText,80);
function writeText() {
    txtjoin.innerText = text.slice(0,index);
    index++;
    if(index > text.length){
        index = 0;
    }
    
}
const txtpick = document.getElementById('pick');
const text1 =  '   Pick your day?';
let index1 = 0 ;
setInterval(day,150);
function day(){
    txtpick.innerText = text1.slice(3, index1);
    index1++;
    
}
const txtname = document.getElementById('givename');
const txtnum = document.getElementById('givenumber');
const txtmail = document.getElementById('giveemail');
const txtcmail = document.getElementById('givecemail');
const txter = document.getElementById('err');
const txtern=document.getElementById('err1');
const txtere =document.getElementById('err2');
const txterrr = document.getElementById('errr2')
const txterre = document.getElementById('errr3')
const txtcre = document.getElementById('err3')
const btnAdd = document.getElementById('add_order')
const btnplace = document.getElementById('place');
const txtm1 = document.getElementById('m1');
const txtm2 = document.getElementById('m2');
const txtm3 = document.getElementById('m3');
const txtm4 = document.getElementById('m4');
const txtm5 = document.getElementById('m5');
const txtp1 = document.getElementById('p1');
const txtp2 = document.getElementById('p2');
const txtp3 = document.getElementById('p3');
const txtp4 = document.getElementById('p4');
const txtp5 = document.getElementById('p5');
const txtval1 =document.getElementById('val1');
const txtval2 = document.getElementById('val2');
const txtval3 = document.getElementById('val3');
const txtval4 = document.getElementById('val4');
const txtval5 = document.getElementById('val5');
const txtcal = document.getElementById('calender')
const txtoutput = document.getElementById('output')
const txtcurrent = document.getElementById('cur_out')
const txtplace = document.getElementById('place')
const txtsel = document.getElementById('sel')
const clssval = document.getElementsByClassName('val')
const op1 = document.getElementById('one')
const op2 = document.getElementById('two')
const op3 = document.getElementById('three')
const txtfv = document.getElementById('add_fav')
const odrfv = document.getElementById('order_fav')
const txtloyal = document.getElementById('loyalty')
//////////////////////////////////////validation//////////////////////////////////////////////////////////
let message1 = 'full name required'
let message2 = 'Invalid mobile number'
let message3 = 'Invalid e-mail'
let message4 = 'email is not matching'
let message5 = 'Mobile number required'

function error() {
    
    
    if(txtname.value ===''||txtname.value==null){
        txter.innerText =`${message1}`
        
    }if(txtnum.value.length !== 10){
txtern.innerText = message2
    }if(txtnum.value===''){  
        txtern.innerText = `${message5}`
    }
    
    if(txtmail.value===''||txtmail.value== null){
        txtere.innerText = message3
    }if(txtcmail.value!==txtmail.value){
        txtcre.innerText =`${message4}`
    }if(txtcmail.value===''||txtcmail==null){
        txtcre.innerText =`${message3}`
    }
}
    
    
///////////////////////////////////////////button selection////////////////////////////////////////////////
btnAdd.addEventListener ('click',error);

let newval=0;
let init = parseInt(txtval1.innerText) ;
init = 0 ;
function smartselector() {
    
    newval = parseInt(txtval1.innerText);
    newval ++;
    txtval1.innerText = newval;
    
   
    
    
}  
 
let newval1 =0;
let init2 = parseInt(txtval2.innerText);
init2 = 0;
function smartselector1() { 
     newval1 = parseInt(txtval2.innerText);
    newval1 ++;
    txtval2.innerText = newval1;
    
}
let newval2 =0;
let init3 = parseInt(txtval3.innerText);
init3=0;
function smartselector2() {
     newval2 = parseInt(txtval3.innerText);
    newval2 ++;
    txtval3.innerText = newval2;
    
}
let newval3 =0;
let init4 =parseInt(txtval4.innerText);
init4 = 0;
function smartselector3() {
     newval3 = parseInt(txtval4.innerText);
    newval3++;
    txtval4.innerText = newval3;
    
}let newval4 =0;
let init5 = parseInt(txtval5.innerText);
init5 = 0;
function smartselector4() {
    newval4 = parseInt(txtval5.innerText);
    newval4++;
    txtval5.innerText = newval4;}
txtp1.addEventListener ('click',smartselector);
txtp2.addEventListener('click',smartselector1);
txtp3.addEventListener('click',smartselector2);
txtp4.addEventListener('click',smartselector3);
txtp5.addEventListener('click',smartselector4);


let init1 =parseInt(txtval1.innerText);
 init1 = 0;
function smartdec() {  
   newval = parseInt(txtval1.innerText);  
    newval --;
    txtval1.innerText = newval;
    

}

let init6 =parseInt(txtval2.innerText);
 init6 = 0;
function smartdec1() {
     newval1 = parseInt(txtval2.innerText);
    newval1--;
    txtval2.innerText=newval1;
    
}
let init7 =parseInt(txtval3.innerText);
 init7 = 0;
function smartdec2() {
     newval2 = parseInt(txtval3.innerText)
    newval2--;
    txtval3.innerText = newval2;
} 
let init8 =parseInt(txtval4.innerText);
 init8 = 0;
function smartdec3() {
     newval3 = parseInt(txtval4.innerText)
    newval3--;
    txtval4.innerText = newval3;

    
}
let init9 =parseInt(txtval5.innerText);
 init9 = 0;
function smartdec4() {
     newdec4 = parseInt(txtval5.innerText)
    newval4--;
    txtval5.innerText = newval4;
}
  txtm1.addEventListener('click',smartdec)  ;
  txtm2.addEventListener('click',smartdec1);
  txtm3.addEventListener('click',smartdec2);
  txtm4.addEventListener('click',smartdec3);
  txtm5.addEventListener('click',smartdec4);
///////////////////////////////////////////////Duration////////////////////////////////////////////////////////
let total1;
let duval;
let duval1;
function sel() {
    

if (txtsel.value=="1/2 day") {
    duval = 350
   duval1 = 600


    
}if(txtsel.value =="Full day"){
    duval = 450
    duval1 = 800
}if(txtsel.value=="3hrs"){
    duval =0
    duval1 =0
}
}
btnAdd.addEventListener('click',sel)

////////////////////////////////////////total calculaton//////////////////////////////////////////////////////////
let total=0;
let adultpaas=0;
let childpaas=0;
let fapaas=0;
let fcpaas=0;
let basic=0;

let Mtotal = 0;

parseFloat(total).toFixed(2);
parseFloat(total1).toFixed(2);
parseFloat(Mtotal).toFixed(2);

 function calculate() { 
    adultpaas = 1200;
    childpaas = 700;
    fapaas = 5500;
    fcpaas = 2700;
    
    total = ((adultpaas*newval))+((childpaas*newval1))+((fapaas*newval2))+((fcpaas*newval3));
    total1 = (newval* duval)+(newval1*duval)+(newval2*duval1)+(newval3*duval1)
Mtotal = total1+total;
txtcurrent.innerText = `current total :${total}`
 }
 

 btnAdd.addEventListener('click',calculate);
 
 


function calen() {
 
    txtoutput.innerText = `Reservation Name :${txtname.value} \n   Reserved date : ${txtcal.value}\n Selected duration: ${txtsel.value} \n-----------------------------------------------------------------------------------------------------------------------------------\n Reserved items:- SL Adult :${newval} \t,SL Child:${newval1}\t \t ,Foriegner Adult :${newval2}, Foriegn Child :${newval3} Infant :${newval4}\n-------------------------------------------------------------------------------------------------------------------------------------\n Ticket price:${total}LKR \n Added cost for the duration:${total1} \n Total cost:${Mtotal}LKR `
   
}

btnAdd.addEventListener('click',calen);
////////////////////calvalidating\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
function valcal() {
    if(txtcal.value==''){
        txtoutput.innerText = '';
        alert('Please select a date');
    }
   
    
}
btnAdd.addEventListener('click',valcal)
////////////////////////////button val\\\\\\\\\\\\\\\\\\\\\\\\\\
function valbut() {
    if(txtoutput.innerText==''){
        alert('please click add to order button first')
    }
    
}
txtplace.addEventListener('click',valbut)


txtm1.addEventListener('click',calculate)
txtp1.addEventListener('click',calculate)

txtm2.addEventListener('click',calculate)
txtp2.addEventListener('click',calculate)
txtm3.addEventListener('click',calculate)
    txtp4.addEventListener('click',calculate)
    txtm4.addEventListener('click',calculate)
////////////////////////////////////////place to order///////////////////////////////////////////////////
 
    function aler() {
        alert("Order placed successfully")
        txtoutput.innerText = clearTimeout;
        txtoutput.innerText = `Reservation successful`
       
        txtval1.innerText = '0';
        txtval2.innerText = '0';
        txtval3.innerText = '0';
        txtval4.innerText = '0';
        txtval5.innerText = '0';
        txtname.value ='';
        txtnum.value = '';
        txtmail.value ='';
        txtcmail.value='';
        
    }

    txtplace.addEventListener('click',aler)
function clearcurrent() {
    txtcurrent.innerText = clearTimeout;
    txtcurrent.innerText = 0;
    
}
btnAdd.addEventListener('click',clearcurrent)

    //////////////////////////////////////addtofav\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
    function addtofav() {
        JSON.stringify(txtval1.innerText,txtval2.innerText,txtval3.innerText,txtval4.innerText,txtval5.innerText)
        
        localStorage.setItem("fav",txtval1.innerText)
        localStorage.setItem("fav1",txtval2.innerText)
        localStorage.setItem("fav2",txtval3.innerText)
        localStorage.setItem("fav3",txtval4.innerText)
        localStorage.setItem("fav4",txtval5.innerText)
        localStorage.setItem("cost",txtcurrent.innerText)
    }
    txtfv.addEventListener('click',addtofav)
    ///////////////////orderfav\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
function orderfav() {
    let fav = localStorage.getItem("fav")
    let fav1 = localStorage.getItem("fav1")
    let fav2 = localStorage.getItem("fav2")
    let fav3 = localStorage.getItem("fav3")
    let fav4 = localStorage.getItem("fav4")
    let cost = localStorage.getItem("cost")
    txtval1.innerText= fav;
    txtval2.innerText=fav1;
    txtval3.innerText=fav2;
    txtval4.innerText=fav3;
    txtval1.innerText=fav4;
    txtcurrent.innerText=cost;
    
    
}
odrfv.addEventListener('click',orderfav)
/////////////////////////////////////////////////loyal\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\



   // if((JSON.parse(localStorage.getItem("loy")))==null){
    //else loyality = JSON.parse(localStorage.getItem("loy"))
      
    let setloy;
    let eq;
    let a,a1,a2,a3,a4;
    let loytot;
function setloyality() {
    
    
    a = newval;
    a1 = newval1;
    a2 = newval2;
    a3 = newval3;
    a4 = newval4;
        
        eq = a+a1+a2+a3+a4;
    loytot = eq*15;
        localStorage.setItem("joy",JSON.stringify(loytot))
    
    }


txtplace.addEventListener('click',setloyality)

function displayloyal() {
    let gt;
        
        if(loytot > 45 ){
           gt= localStorage.getItem("joy")
        }else{
            gt = 0;
        }
        alert(`You have earned ${gt} loyalty points`)


    
    
}
txtloyal.addEventListener('click',displayloyal)
/////////////////////////////////////////////////////////purchasepage/////////////////////////////////////////////////////
