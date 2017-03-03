

var tax20;
var tax40;
var netSalary;


var taxFree = 10000;


var grosSalary = document.getElementById("calculate");
grosSalary.addEventListener("click", salaryCalculation,false);



function salaryCalculation(){
    
    var salary = parseInt(document.getElementById("salaryInput").value);
    document.getElementById("demo").innerHTML = "Gross Salary  " + salary;
    
    if(salary >32000 && salary <150000)
     
        {
           
            tax40 = (salary * 0.4);
            document.getElementById("demo1").innerHTML = "Tax at 40% " + tax40;
           
            netSalary = salary - tax40;
            document.getElementById("demo2").innerHTML = "net salary" + netSalary ;
            
     }
    else(salary< 32000)
        
        {
        tax20 = (salary * 0.2);
        document.getElementById("demo1").innerHTML = "Tax at 20% " + tax20;
            
         netSalary = salary - tax20;
        document.getElementById("demo2").innerHTML = "net salary" + netSalary ;
        }
    
    
    
}




 

/*var taxFree = document.getElementById("calculate");
grosSalary.addEventListener("click", salaryCalculation,false);*/

