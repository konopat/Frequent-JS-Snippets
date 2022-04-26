var display = document.getElementById("count");

function startCountDown(count, delay) {
  var timer = setInterval(function() {
    if (count>0) {
      display.textContent = count;
      console.log(count);
      count--;
    } else if (count == 0) {
      display.textContent = 0;
      console.log("Finished!");
      clearInterval(timer);
    }
  }, delay);
}
