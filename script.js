var timeEl = document.querySelector(".time");
var start = document.getElementById('start');
var submit = document.getElementById('submit');
var quiz = document.getElementById('quiz');
var score = document.getElementById('score');
var username= document.getElementById("name");
var usernamein = document.getElementById("usernamein");
var question = document.getElementById("question");
var answerA = document.getElementById("A");
var answerB = document.getElementById("B");
var answerC = document.getElementById("C");
var answerD = document.getElementById("D");
var usernameform =document.getElementById("usernameform")
var correct = ["define", "indexify", "At the bottom of the Body","Application Programming Interface", "function", "DOM Manipulation", "Invoke it", "Object", "+", "All of the above"];
var useranswers = [] ;

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
    start.addEventListener("click", function(e){;


// Function to start the quiz and run it

        // Make Username input invisible
        username.style.display = "none"
        // Make Quiz visible
        quiz.style.display = "block";
        // Hide Start Button
        start.style.display = "none";

        // Start the timer 
        var secondsLeft = 60;

        function setTime() {
        var timerInterval = setInterval(function() {
            secondsLeft--;
            timeEl.textContent = secondsLeft ;

            if(secondsLeft === 0 || i==10) {
            clearInterval(timerInterval);
            input();
            }
        }, 1000)};
     




        // Ask Questions in order 
        for( i =0; i<11;){
            question.textContent = exam[i].q;
            answerA.textContent = exam[i].a.a;
            answerB.textContent = exam[i].a.b;
            answerC.textContent = exam[i].a.c;
            answerD.textContent = exam[i].a.d;

            // Buttons on Answers send responses to useranswers array 
            answerA.addEventListener("click", function(e){
                buttonpress = true
                e.preventDefault();
                useranswers.push(answerA.textContent);
                console.log(useranswers);
                // Next Question 
                i++;
                question.textContent = exam[i].q;
                answerA.textContent = exam[i].a.a;
                answerB.textContent = exam[i].a.b;
                answerC.textContent = exam[i].a.c;
                answerD.textContent = exam[i].a.d;
            });

            answerB.addEventListener("click", function(e){
                buttonpress = true
                e.preventDefault();
                useranswers.push(answerB.textContent);
                console.log(useranswers);
                // Next Question 
                i++;
                question.textContent = exam[i].q;
                answerA.textContent = exam[i].a.a;
                answerB.textContent = exam[i].a.b;
                answerC.textContent = exam[i].a.c;
                answerD.textContent = exam[i].a.d;
            });

            answerC.addEventListener("click", function(e){
                 buttonpress = true
                e.preventDefault();
                useranswers.push(answerC.textContent);
                console.log(useranswers);
                // Next Question 
                i++;
                question.textContent = exam[i].q;
                answerA.textContent = exam[i].a.a;
                answerB.textContent = exam[i].a.b;
                answerC.textContent = exam[i].a.c;
                answerD.textContent = exam[i].a.d;
            });

            answerD.addEventListener("click", function(e){
                 buttonpress = true
                e.preventDefault();
                useranswers.push(answerD.textContent);
                console.log(useranswers);
                // Next Question 
                i++;
                question.textContent = exam[i].q;
                answerA.textContent = exam[i].a.a;
                answerB.textContent = exam[i].a.b;
                answerC.textContent = exam[i].a.c;
                answerD.textContent = exam[i].a.d;
            });
            break;
    }
        setTime();
    
    });


    // Make the Username input visible 
    function input(){
        // Make Username input visible
        username.style.display = "block"
        // Make Quiz invisible
        quiz.style.display = "none";

        // function for the submit button 
        submit.addEventListener("click", function(e){
         e.preventDefault();
            // Take value and put it into local storage 
            var userArray = []
            userArray.push(usernamein.value)
            localStorage.setItem("Name", userArray);
            highscore();
        });


    };


    // // Display the High Score Page 
    function highscore(){
        // compare users answer array to the correct answer array 
            var final = 0
            for(let j = 0; j<correct.length; j++){
            // if they are correct, plus one point
                if(correct[j] == useranswers[j]){
                    final++
                };
            };
            
             var finalArray = []
             finalArray.push(final)
             

        // Push final score to local storage
        localStorage.setItem("Score", finalArray);

        var usernameout = document.getElementById("username")
        var scoreout = document.getElementById("points")
        // Display everyone's scores and names in the high score table
        usernameout.textContent = localStorage.getItem("Name")
        scoreout.textContent = localStorage.getItem("Score")
        // Make Username input invisible
        username.style.display = "none";
        // Make high score page visible
        score.style.display = "block";

    };