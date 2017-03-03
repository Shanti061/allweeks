


var BMI;
var calculate;


document.getElementById("info").innerHTML = "Please enter the information below to know your BMI Calculation. ";
document.getElementById("userHeight1").innerHTML = "Meter";
document.getElementById("userWeight1").innerHTML ="Kg";

var input1 = document.getElementById("userHeight1").innerHTML ;
var input2 = document.getElementById("userWeight1").innerHTML;

var ButtonClick = document.getElementById("Calculate").addEventListener("click", calculateBMI, false);
var ButtonClick2 = document.getElementById("Reset").addEventListener("click", reset, false);

var ButtonClick1 = document.getElementById("changeUnit").addEventListener("click", changeBMI, false);

/*var radioButtonClick = document.getElementById("childRadio").addEventListener("click", childBMI, false);
var radioButtonClick1 = document.getElementById("adultRadio").addEventListener("checked", calculateBMI, false);*/

document.getElementById("info1").innerHTML = "Normal BMI range: 18.5kg/m2 - 25 kg/m2 ";
/*document.getElementById("info1").style.color = "black";
document.getElementById("info1").style.fontSize="20px";*/




function calculateBMI () {

var height1 = parseFloat(document.getElementById("userHeight").value);
var weight1 = parseFloat(document.getElementById("userWeight").value);
    //metric calculation, height in meter, weight in kg
if(input1 === "Meter" && input2 === "Kg")
    {
  var BMI = (weight1 / (height1 * height1) );
      //to show the value inside the textbox for the result
   document.getElementById("result").value= BMI;
     }
    
    else{
        BMI = ((weight1 * 703)/(height1 * height1)) ;
        document.getElementById("result").value= BMI;
        }
    
    resultInfo(BMI);
    
}


function changeBMI(){
    
    if(input1 === "Meter" && input2 === "Kg")
    {
    document.getElementById("userHeight1").innerHTML= "Inches";
    document.getElementById("userWeight1").innerHTML= "Pound";
    
    input1 = document.getElementById("userHeight1").innerHTML ;
    input2 = document.getElementById("userWeight1").innerHTML;
    
    }
    else
    {
        document.getElementById("userHeight1").innerHTML= "Meter";
        document.getElementById("userWeight1").innerHTML= "Kg";
       
        
        input1 = document.getElementById("userHeight1").innerHTML ;
        input2 = document.getElementById("userWeight1").innerHTML;
    }
    
}

function resultInfo(BMI)
{
    if(BMI<16)
        {
            document.getElementById("BMIResult").innerHTML = "You are severly thin!";
        }
    else if(BMI >16 && BMI < 17)
        {
            document.getElementById("BMIResult").innerHTML = "Moderate thinness!";
        }
    
    else if(BMI >17 && BMI < 18.5)
        {
            document.getElementById("BMIResult").innerHTML = "Mild thinness!";
        }
    else if(BMI >18.5 && BMI < 25)
        {
            document.getElementById("BMIResult").innerHTML = "Normal weight!";
        }
    else if(BMI >25 && BMI < 30)
        {
            document.getElementById("BMIResult").innerHTML = "Over Weight!";
        }
    else if(BMI >30 && BMI < 35)
        {
            document.getElementById("BMIResult").innerHTML = "Obese Class I";
        }
    else if(BMI >35 && BMI < 40)
        {
            document.getElementById("BMIResult").innerHTML = "Obese Class II";
        }
    else if(BMI > 40)
        {
            document.getElementById("BMIResult").innerHTML = "Obese Class III";
        }
    
    else 
        {
            document.getElementById("BMIResult").innerHTML = "Please enter  the above fields to get your BMI calculation.";
        }
    
}

/*function childBMI(){
var height1 = parseFloat(document.getElementById("userHeight").value);
var weight1 = parseFloat(document.getElementById("userWeight").value);
var BMI = ( (weight1 *703) / (height1 * height1) ); 
    if(){
        
    }
    else{
         document.getElementById("BMIResult").innerHTML = "Please enter  the above fields to get your BMI calculation.";
    }
}*/


function reset(){
  /* document.getElementById("RadioButtonClick").value ='';
    document.getElementById("RadioButtonClick1").value ="" ;*/
  document.getElementById("userHeight").value = "";  
  document.getElementById("userWeight").value = "";    
    document.getElementById("result").value = "";
    document.getElementById("BMIResult").innerHTML="";
    
}
//Severe Thinness	< 16
//Moderate Thinness	16 - 17
//Mild Thinness	17 - 18.5
//Normal	18.5 - 25
//Overweight	25 - 30
//Obese Class I	30 - 35
//Obese Class II	35 - 40
//Obese Class III	> 40

//
//Normal BMI weight range for the height: 128.9lbs - 174.2 lbs
//Ponderal Index: 12.91 kg/m3