
function calculateBMI(){
    var height= (document.getElementById('height').value)/100;
    var weight= (document.getElementById('weight').value);
    var bmi= weight / (height * height);
    document.getElementById('result').innerHTML="Your BMI is " + bmi.toFixed('2');

    if(bmi <= 17){
        document.getElementById('message').innerHTML="Underweight";
    }
    else if(bmi >=17.1 && bmi<=20){
        document.getElementById('message').innerHTML="Good Health";
    }
    else if(bmi >=20.1 && bmi<=25){
        document.getElementById('message').innerHTML="Overweight";
    }
    else{
        document.getElementById('message').innerHTML="Not Good";
    }
}
