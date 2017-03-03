


window.onload = function(){
   
    var alphabets = ['a', 'b', 'c', 'd','e', 'f', 'g', 'h','i','j', 'k','l','m','n' ,'o', 'p',
                    'q','r','s','t','u','v','w','x','y','z'];
    var word;
    var guess;
    var guesses;
    var chosenCat;
    var categories;
    var anotherCategory;
    //var hint;
   
    
    //var buttons =function(){
   // myButtons = document.getElementById('buttons');
        //letters = document.createElement('ul');
        
        //for(var i = 0; i< alphabets.length; i++)
        //{
         // console.log(alphabets[i]);           
       // }
        
        
    //}
    
    
    var selectCat = function(){
        
        
        if(chosenCat === categories[0]){
            
            categoryName.innerHTML = "Capital cities";
        }
        
        else if(chosenCat === categories[1]){
            
            categoryName.innerHTML = "Movies";
        }
        else{
            
            categoryName.innerHTML = "Food";
        }
    }
    
    var play = function(){
        
        
    }
    
     buttons();
    selectCat();
    play();
    
    hint.onclick = function(){
        alert("hi");
        
    }
    
    document.getElementById('reset').onclick = function(){
     correct.parentNode.removeChild(correct);
    letters.parentNode.removeChild(letters);   
    showClue.innerHTML = "";
        play();
    }
   
}