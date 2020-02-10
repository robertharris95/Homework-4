var timeEl = document.querySelector(".time");
var start = document.getElementById('start');
var quiz = document.getElementById('quiz');
var score = document.getElementById('score');
var username= document.getElementById("name");
var usernamein = document.getElementById("usernamein");
var question = document.getElementById("question");
var answerA = document.getElementById("A");
var answerB = document.getElementById("B");
var answerC = document.getElementById("C");
var answerD = document.getElementById("D");
var usernameout = document.getElementById("username")
var scoreout = document.getElementById("points")
var usernameform =document.getElementById("usernameform")
var correct = ["define", "indexify", "At the bottom of the Body","Application Programming Interface", "function", "DOM Manipulation", "Invoke it", "Object", "+", "All of the above"];
var useranswers = [] ;
var i = 0;

// Quiz materials
    var exam = [
        { q: "Which of these is NOT a way to define a variable?",
            a: 
                {a:"var",
                b:"const",
                c:"let", 
                d:"define"} },
        { q: "Which of these is NOT a real method defined in JavaScript?",
            a: 
                {a:"addEventListener",
                b:"toUpperCase",
                c:"stringify",
                d:"indexify"} },
        { q: "Where should you link your Javascript document in your HTML?", 
            a:
                {a:"In the Header",
                b:"At the top of the page",
                c:"At the bottom of the Body",
                d:" After the closing HTML tag"} },
        { q: "What does API Stand for?",
            a:
                {a:"Advanced Protocol Interface",
                b:"Application Programming Interface",
                c:"Apple Pies International",
                d:"Anonymous Personal Internet"} },
        { q: "_____ starts every function definition.", 
            a:
                {a:"function",
                b:"define",
                c:"run",
                d:"Javascript"} },
        { q: "When you edit what you see in browser using Javascript, it is called...", 
            a:
                {a:"Website Restructuring",
                b:"Javascript Alchemy",
                c:"Voodoo",
                d:"DOM Manipulation"} },
        { q: "If you want to run a function you can't only define it, you also need to...", 
            a:
                {a:"Summon it",
                b:"Add a Run function",
                c:"Invoke it",
                d:"Add it to the CSS"} },
        { q: "Pretty much everything in Javascript is a...", 
            a:
                {a:"Variable",
                b:"Object",
                c:"Style Sheet",
                d:"Headache"} },
        { q:"To concatenate 2 strings, you need only to use a..." , 
            a: 
                {a:"+",
                b:"~",
                c:"@",
                d:"="} },
        { q: "An array can be composed of...", 
            a:
                {a:"Arrays",
                b:"Strings",
                c:"Numbers",
                d:"All of the above"}  },];






// Username reveal
    start.addEventListener("click", input());


// Function to start Username input 
    function input() {
        
        if(usernamein.value.length !== 0){
        // Quiz start 
        startQuiz();
        }

        else if (usernamein.value.length == 0){
            // Make Username input visible
            username.style.visibility = "visible";
            // input();
        }
    };


// Function to start the quiz and run it
    function startQuiz(){
        // Make Username input invisible
        username.style.visibility = "hidden"
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

            if(secondsLeft === 0 || i==10) {
            clearInterval(timerInterval);
            highscore();
            }
        }, 1000);
     
        // Ask Questions in order 
        for( i =0; i<11;i){
            question.textContent = exam[i].q;
            answerA.textContent = exam[i].a.a;
            answerB.textContent = exam[i].a.b;
            answerC.textContent = exam[i].a.c;
            answerD.textContent = exam[i].a.d;
            console.log(question.textContent);

            // Buttons on Answers send responses to useranswers array 
            answerA.addEventListener("click", function(e){
                e.preventDefault();
                useranswers.push(answerA.textContent);
                console.log(useranswers);
            });
            answerB.addEventListener("click", function(e){
                e.preventDefault();
                useranswers.push(answerB.textContent);
                console.log(useranswers);
            });
            answerC.addEventListener("click", function(e){
            e.preventDefault();
                useranswers.push(answerC.textContent);
                console.log(useranswers);
            });

            answerD.addEventListener("click", function(e){
                e.preventDefault();
                useranswers.push(answerD.textContent);
                console.log(useranswers);
            });
            
            if(useranswers[i].length == 0){
        break;
            }

            else{
                i++;
            }
        }
    }
        setTime();
    };





 // To send you to the score page and run it
    function highscore(){
        // Make Quiz invisible
        quiz.style.display = "none";

        // Make Score Page visible
        score.style.visibility = "visible";
        var total = 0

        for(let j =0; j<11; j++){

            if(correct[j] == useranswers[j]){
                total++;
            };

        }

        // To store scores for later 
        localStorage.setItem("User", usernamein.value);
        localStorage.setItem("finalScore", total.value);

        // To display scores 
        scoreout.textContent = localStorage.getItem("finalScore");
         usernameout.textContent = localStorage.getItem("User");
         


    };

   console.log(exam)