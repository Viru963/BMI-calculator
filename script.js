const form = document.querySelector('form');
form.addEventListener('submit',((val) => {
    val.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value); 
    const result = document.querySelector('#results') ;
    const guide = document.querySelector('#guide');
    const reset = document.querySelector('#reset');
    reset.addEventListener( 'click' , ()=>{
        result.innerHTML="Enter your height and weight"} );
        reset.addEventListener( 'click' , ()=>{
            guide.innerHTML=""} );

    if(isNaN(height) || height === "" || height < 0) {
        result.innerHTML="Invalid Height!";}
     else if (isNaN(weight)|| weight === ""|| weight < 0){
         result.innerHTML= "Invalid Weight!" ;
     }else{
        var bmi = (weight / ((height * height) / 10000)).toFixed(2);
        result.innerHTML= `Your BMI is ${bmi}`;
     };

    if(bmi<18.6){
      guide.innerHTML=`Underweight, you are at a risk for various health conditions such as osteoporosis, anaemia, and mental health disorders.`;
    }else if(bmi>=18.6 && bmi<=24.9){
        guide.innerHTML=`You are in the normal weight range.`;
    }else{
        guide.innerHTML= " having too much weight for your health " ;   
    }
    
}))