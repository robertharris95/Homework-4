var timeEl = document.querySelector(".time");
var start = document.getElementById('start');
var quiz = document.getElementById('quiz');


// Timer and Quiz reveal
start.addEventListener("click",
    function(e){
        e.preventDefault()
            // Make Quiz visible
            quiz.style.visibility = "visible";
            // Hide Start Button
            start.style.visibility = "hidden";
        
            // Start the timer 
            var secondsLeft = 60;

            function setTime() {
            var timerInterval = setInterval(function() {
                secondsLeft--;
                timeEl.textContent = secondsLeft ;

                if(secondsLeft === 0) {
                clearInterval(timerInterval);
                }

            }, 1000);
        }

        setTime();
    });

