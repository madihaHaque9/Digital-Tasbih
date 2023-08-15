const subhanAllahDisplay=document.getElementById('subhanAllahDisplay')
const  subhanAllahIncrimentBtn=document.getElementById('subhanAllahIncrimentBtn')
const   subhanAllahDecrimentBtn=document.getElementById('subhanAllahDecrimentBtn')

const alhamdulillahDisplay=document.getElementById('alhamdulillahDisplay')
const  alhamdulillahIncrimentBtn=document.getElementById('alhamdulillahIncrimentBtn')
const   alhamdulillahDecrimentBtn=document.getElementById('alhamdulillahDecrimentBtn')

const allahAkberDisplay=document.getElementById('allahAkberDisplay')
const  allahAkberIncrimentBtn=document.getElementById('allahAkberIncrimentBtn')
const   allahAkberDecrimentBtn=document.getElementById('allahAkberDecrimentBtn')

const resetBtn=document.getElementById('resetBtn')

let subhanAllahInitialValue=0;
let alhamdulillahInitialValue=0;
let allahuakberInitialValue=0;

subhanAllahIncrimentBtn.addEventListener('click',function(){
    if(subhanAllahInitialValue===33){
        return alert('You have completed this tasbih')
    }
    subhanAllahInitialValue+=1;
   subhanAllahDisplay.innerText=subhanAllahInitialValue
})
subhanAllahDecrimentBtn.addEventListener('click',function(){

    if(subhanAllahInitialValue===0){
        return alert('You cant add negative value')
    }
    subhanAllahInitialValue-=1;
   subhanAllahDisplay.innerText=subhanAllahInitialValue

})
alhamdulillahIncrimentBtn.addEventListener('click',function(){
    if(alhamdulillahInitialValue===33){
        return alert('You have completed this tasbih')
    }
    alhamdulillahInitialValue+=1;
   alhamdulillahDisplay.innerText=alhamdulillahInitialValue
})
alhamdulillahDecrimentBtn.addEventListener('click',function(){

    if(alhamdulillahInitialValue===0){
        return alert('You cant add negative value')
    }
    alhamdulillahInitialValue-=1;
   alhamdulillahDisplay.innerText=alhamdulillahInitialValue

})
allahAkberIncrimentBtn.addEventListener('click',function(){
    if(allahuakberInitialValue===33){
        return alert('You have completed this tasbih')
    }
   allahuakberInitialValue+=1;
   allahAkberDisplay.innerText=allahuakberInitialValue
})
allahAkberDecrimentBtn.addEventListener('click',function(){

    if(allahuakberInitialValue===0){
        return alert('You cant add negative value')
    }
    allahuakberInitialValue-=1;
  allahAkberDisplay.innerText=allahuakberInitialValue

})
resetBtn.addEventListener('click',function(){
    subhanAllahDisplay.innerText=0;
    alhamdulillahDisplay.innerText=0;
    allahAkberDisplay.innerText=0;
})