let inputone=document.querySelector('.firstInput')
let inputonebtn=document.querySelector('.btn1')
let error=document.querySelector('.error')
let inputonebox=document.querySelector('.box1')

let inputtwo=document.querySelector('.secondInput')
let inputtwobtn=document.querySelector('.btn2')
let errortwo=document.querySelector('.error2')
let inputtwobox=document.querySelector('.box2')

let inputthree=document.querySelector('.thirdInput')
let inputthreebtn=document.querySelector('.btn3')
let inputthreebox=document.querySelector('.box3')
let chance=document.querySelector('.chance')
let count= 5;


inputonebtn.addEventListener('click',function(){
    if(inputone.value==''){
        error.innerHTML='PLEASE ENTER YOUR NAME FIRST'
    }else{
        inputtwobox.style.display='block'
        inputonebox.style.display='none'
        console.log(inputone.value);
        
    }
})
inputtwobtn.addEventListener('click',function(){
   if(inputtwo.value<1 || inputtwo.value>10){
    errortwo.innerHTML='ERROR'
   }else{
     console.log(inputtwo.value);
     if(inputtwo.value-20){
      console.log('It is a number')
      inputthreebox.style.display='block'
      chance.innerHTML=count
      inputtwobox.style.display='none'
     }else{
      console.log('Not a number')
     }
   }
  
})
  inputthreebtn.addEventListener('click',function(){
    if(inputtwo.value==inputthree.value){
      console.log('PLAYER-2 WINS')
    }else{
      console.log('PLAYER-1 WINS')
      count--;
      chance.innerHTML=count;
      if(count==0){
        count=0;
        chance.innerHTML='GAME OVER'
      }
    }
  })