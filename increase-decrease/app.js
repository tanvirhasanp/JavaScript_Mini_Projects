 
 const counting= document.getElementById('counting')
 const plusBtn= document.getElementById('plusBtn')
 const minusBtn= document.getElementById('minusBtn')

 let counter = 0;

 function updateFunc(value){
    counter= counter+value
   if(counter>= 10){
    plusBtn.setAttribute('disabled', true)
   }
   else{
    plusBtn.removeAttribute('disabled',false)
   }
    counting.innerText= counter

    //for minus
    if(counter<=0){
        minusBtn.setAttribute('disabled',true)
    }
    else{
        minusBtn.removeAttribute('disabled',false)
    }
    counting.innerText= counter 
 }



plusBtn.addEventListener('click', () =>{
    updateFunc(1)

})

minusBtn.addEventListener('click', () =>{
   updateFunc(-1)
})
