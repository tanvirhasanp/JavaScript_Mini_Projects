let height= document.getElementById("height");
let weight= document.getElementById("weight");
let btn= document.getElementById("btn");
let score= document.getElementById("score");
let result= document.getElementById("result");
let h3= document.getElementById("h3");

btn.addEventListener('click',()=>{
     let heightValue= height.value/100;
     let weightValue= weight.value; 
 
     let calculateBMI= weightValue/heightValue**2;
     
     score.innerText= calculateBMI.toFixed(2);

    if(calculateBMI < 18.5){
        score.style.backgroundColor= "yellow"; 
        h3.innerText= "Underweight";
        h3.style.display= "inline-block";
        h3.style.color= "yellow";
    }
     else if(calculateBMI <= 24.9){
        score.style.backgroundColor= "green"; 
        h3.innerText= "Normal weight";
                h3.style.display= "inline-block";
                h3.style.color= "green";

    }
    else if(calculateBMI <= 29.9){
        score.style.backgroundColor= "#c0392b";
        h3.innerText= "Overweight";
                h3.style.display= "inline-block";
                h3.style.color= "#c0392b";

    }
    else if(calculateBMI >= 30){
        score.style.backgroundColor= "red";
        h3.innerText= "Dangerous";
                h3.style.display= "inline-block";
                h3.style.color= "red";

    }   

    result.style.display= "block";

    score.style.width= "80px";
    score.style.padding= "10px";

     height.value= "";
     weight.value= "";
})


// Prevent form submission
btn.addEventListener('click',(e)=>{  
    e.preventDefault();
})