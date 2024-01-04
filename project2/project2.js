const form=document.querySelector('form');
form.addEventListener('submit',function(e){
    e.preventDefault();
    const height=parseInt(document.querySelector("#height").value);
    const weight=parseInt(document.querySelector("#weight").value);
    const result=document.querySelector("#results");
    const bmi=(weight / ((height * height) / 10000)).toFixed(2);
    result.innerHTML=`<span>${bmi}</span>`;
    const detail=document.querySelector("#details");
    if(bmi<18.6){
        detail.innerText="Underweight";
    }
    else if(bmi>=18.6 && bmi<=24.9){
        detail.innerText="Normal";
    }
    else if(bmi>24.9){
        detail.innerText="Overweight";
    }
});