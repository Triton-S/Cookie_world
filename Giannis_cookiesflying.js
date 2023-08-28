var count = 0;
var alertShown = false; // Flag to track if the alert has been shown
var button = document.getElementById("btn");
var result = document.getElementById("result");
    button.onclick = function() {
        count++;
        result.innerHTML = count;
             if (count === 10 && !alertShown){
                 alert("You have eaten enough cookies so you can move on to play ping pong!!!");
                 alertShown = true; // Set the flag to true after showing the alert
                 
                 document.getElementById('myDiv').style.display = "block";
                 }
          }