// This is my JS for password exercise

var access = "shanti";
var correctPass= [];
var i = 0;

document.getElementById("myButton").addEventListener("click", checkPassword, false);
function checkPassword() {
    
    var userPassword = document.getElementById("userP").value;
    if(userPassword !== access && userPassword !== "")
        {
          document.getElementById("myMessages").innerHTML = "WRONG PASSWORD, 2 attempt left"
          
        for (i = 0; i <= 3; i++) {
        if (j === 3) {
            break Loop2;
        }
            document.getElementById("myMessages").innerHTML = text += j + " ";
        }
          
          
          
          /* if(userPassword != access && userPassword != ""){
              
              document.getElementById("myMessages").innerHTML = "WRONG PASSWORD, 1 attempt left"
          }
            else if(userPassword != access && userPassword != ""){
               document.getElementById("myMessages").innerHTML = "WRONG PASSWORD, 0 attempt left" 
            }
            else{
                document.getElementById("myMessages").innerHTML = "locked" 
            }*/
          
        }
     else if(userPassword === access)
     {
     document.getElementById("myMessages").innerHTML = "IT WORKS!!"
        
    }
    
    else 
        {
          document.getElementById("myMessages").innerHTML = "PLEASE, ENTER SOMETHING"
        }
}




