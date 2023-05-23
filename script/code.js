let heightscreen = document.getElementById('height');
let weightscreen =document.getElementById('weight');
let answer = document.getElementById('answer');
let clear = document.getElementById('clear');
let result = document.getElementById('result');
let statement = document.getElementById('statement');


answer.addEventListener('click',()=>{
    //converts height form m to cm
    let height = heightscreen.value;
    let weight = weightscreen.value;
    let BMI= (weight/Math.pow(height/100,2)).toFixed(1);//get the bmi value
    result.innerText = BMI;

    if(BMI <= 18.4){
        statement.innerHTML = ('You are Underweight💀');
    }
    else if((BMI >= 18.5) && (BMI <= 24.9) ){
        statement.innerHTML = ('Your weight is normal🦄');
    }
    else if((BMI >= 25.0) && (BMI <= 39.0)){
        statement.innerHTML = ('You are Overweight🏃🏽‍♀️');
    }
    else if(BMI >= 40 ){
        statement.innerHTML = ('You are Obese🏋🏽‍♀️')
    }
});
//inspired by samkelo
let allclear = document.getElementById('height');
let empty = document.getElementById('weight');

let cls=()=>{
    allclear.value= "";
    empty.value= "";
    statement.innerHTML = "";
    result.innerHTML = "";
}
