//Count code
var button = document.getElementById('counter');
var cpunter = 0;

button.onclick = function () {
    
    //make a request to the counter end point
    
    //Capture the response and store it a variable
    
    //Render the variable in the correct span
    counter = counter +1;
    var span = document.getElementById('count');
    span.innerHTML = counter.toString();
    
};