// Display result
var display = document.getElementById("count");

// The function is waiting count like number to be counted from and delay in milliseconds
function startCountDown(count, delay) {
  var timer = setInterval(function() { // Declaring a timer
    if (count>0) {
      // This will work until it reaches zero
      display.textContent = count; // Displaying the current number
      console.log(count); // Checking the value in the console
      count--; // Decrease the number for the next iteration
    } else if (count == 0) {
      // It will happen when it reaches zero
      display.textContent = 0; // Displaying zero
      console.log("Finished!"); // Checking the value in the console
      clearInterval(timer); // Stopping the timer
    }
  }, delay); // Declaring the timer delay
}
