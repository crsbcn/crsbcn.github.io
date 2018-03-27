$(document).ready(function () {
    var index = 0;
    var countdownTimer = {
        time: 30,
        reset: function () {
            this.time = 30;
            $('.timer').html('<h3>' + this.time + ' seconds remaining</h3>');
        },
        start: function () {
            counter = setInterval(countdownTimer.count, 1000);
        },
        stop: function () {
            clearInterval(counter);
        },
        count: function () {
            countdownTimer.time--;
            console.log(countdownTimer.time);
            //				$('.timer').html(countdownTimer.time);
            if (countdownTimer.time >= 0) {
                $('.timer').html('<h3>' + countdownTimer.time + ' seconds remaining</h3>');
            }
            else {
                index++;
                answerWrong();
                countdownTimer.reset();
                if (index < questionArray.length) {
                    loadQuestion(index);
                } else {
                    $(".answerchoice").hide();
                    showScore();
                }
            }
        }
    };

    var correct = 0;
    var wrong = 0;
    var q1 = {
        question: 'Who of the following was not an original Avenger?',
        possibleAnswers: ['A. Thor',
            'B. Hulk',
            'C. Captain America',
            'D. Iron Man'],
        flags: [false, false, true, false],
        answer: 'C. Captain America'
    };

    var q2 = {
        question: 'Who of the following did not have an anime adaptation in Japan?',
        possibleAnswers: ['A. Iron Man',
            'B. Fantastic Four',
            'C. X Men',
            'D. Wolverine'],
        flags: [false, true, false, false],
        answer: 'B. Fantastic Four'
    };

    var q3 = {
        question: 'What is Hawkeye\'s real name?',
        possibleAnswers: ['A. Hawk Eye',
            'B. Clint Barton',
            'C. Phil Coulson',
            'D. Donald Blake'],
        flags: [false, true, false, false],
        answer: 'B. Clint BArton'
    };

    var q4 = {
        question: 'Forged in the heart of a dying star, what is the name of the hammer Thor carries',
        possibleAnswers: ['A. Mjolnir',
            'B. Fjordir',
            'C. Mjene',
            'D. Astaroth'],
        flags: [true, false, false, false],
        answer: 'A. Mjolnir'
    };

    var q5 = {
        question: 'What actor played the Grandmaster of Sekar in Thor: Ragnarok?',
        possibleAnswers: ['A. Jeff Bridges',
            'B. Jeff Goldblum',
            'C. Jeff Dunham',
            'D. Jeff Daniels'],
        flags: [false, true, false, false],
        answer: 'B. Jeff Goldblum'
    };

    var q6 = {
        question: 'Which of these parent companies hold the majority of Marvel\'s assets?',
        possibleAnswers: ['A. The Walt Disney Company',
            'B. Warner Bros.',
            'C. NBC-Universal-Comcast',
            'D. Samsung'],
        flags: [true, false, false, false],
        answer: 'A. The Walt Disney Company'
    };

    var q7 = {
        question: 'What Borough of New York City does Peter Parker reside in?',
        possibleAnswers: ['A. Brooklyn',
            'B. Bronx',
            'C. Queens',
            'D. Manhattan'],
        flags: [false, false, true, false],
        answer: 'C. Queens'
    };

    var q8 = {
        question: 'What is the name of the building that the Fantastic Four reside in?',
        possibleAnswers: ['A. Oscorp Tower',
            'B. The Baxter Building',
            'C. Avengers Tower',
            'D. Gracie Mews'],
        flags: [false, true, false, false],
        answer: 'B. The Baxter Building'
    };

    var q9 = {
        question: 'In \'The Avengers\' what NYC food does Tony Stark insist the Avengers eat at the end?',
        possibleAnswers: ['A. Pretzels',
            'B. Hot Dogs',
            'C. Pizza',
            'D. Shawarma'],
        flags: [false, false, false, true],
        answer: 'D. Shawarma'
    };

    var q10 = {
        question: 'What metal is Captain America\'s shield made from?',
        possibleAnswers: ['A. Strontium',
            'B. Vibranium',
            'C. Aluminium',
            'D. Copper'],
        flags: [false, true, false, false],
        answer: 'B. Vibranium'
    }

    var questionArray = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];

    function loadQuestion(questionSelection) {
        console.log(questionSelection);
        countdownTimer.reset();
        $(".question").html("<h3>" + questionArray[questionSelection].question + "</h3>");
        $("#buttonA").text(questionArray[questionSelection].possibleAnswers[0]).show();
        $("#buttonB").text(questionArray[questionSelection].possibleAnswers[1]).show();
        $("#buttonC").text(questionArray[questionSelection].possibleAnswers[2]).show();
        $("#buttonD").text(questionArray[questionSelection].possibleAnswers[3]).show();
        //  getAnswer();  
        //  nextQuestion(index);
    }


    function setup() {
        index = 0;
        $('.question').append('<button id="startButton">Start</button>');
        $('#startButton').on('click', function () {
            $(this).hide();
            countdownTimer.start();
            loadQuestion(index);
        });
    }

    function getAnswer() {

        //  nextQuestion();
        $('.answerchoice').on('click', function () {
            console.log('alert', index);
            index++;
            console.log('click', index);
            $(".question").text('');
            $("#buttonA").text('');
            $("#buttonB").text('');
            $("#buttonC").text('');
            $("#buttonD").text('');
            loadQuestion();
        })
    }

    function answerCorrect() {
        correct++;
        alert("Correct!");
        console.log("correct");
    }

    function answerWrong() {
        wrong++;
        alert("Incorrect!");
        console.log("wrong");
    }

    function showScore() {
        $('.question').empty();
        $('.question').append("<h2><p>" + correct + " correct</p></h2>");
        $('.question').append("<h2><p>" + wrong + " incorrect</p></h2>");
        countdownTimer.stop();
        $('.timer').empty();

    }
    //		for (var i=0; i<questionArray.length; i++) {
    //			$('.question').append('<p>'+questionArray[i].question+'</p>');
    //			for (var j=0; j<questionArray[i].possibleAnswers.length; j++) {
    //				$('.answers').append('<span><button id="possibleAnswer">' + questionArray[i].possibleAnswers[j]+ '</button></span>');
    //			}
    //			$('#possibleAnswers').on('click', function() {


    //		console.log("click");
    //		countdownTimer.start();
    //		for (var i = 0; i < questionArray.length; i++) {
    //			console.log(i);

    //			$('.timer').html('<h3>'+countdownTimer.time + ' seconds remaining</h3>');
    //			$('.question').html(questionArray[i].question);
    //			while (countdownTimer != 0) {

    //			}

    //	});
    //	$('#startButton').click(countdownTimer.start);

    //}
    setup();
    $('.answerchoice').on('click', function () {
        console.log($(this));
        if (this.id == 'buttonA') {
            var answerChosen = 'A';
        } else if (this.id == 'buttonB') {
            answerChosen = 'B';
        } else if (this.id == 'buttonC') {
            answerChosen = 'C';
        } else if (this.id == 'buttonD') {
            answerChosen = 'D';
        }
        if ((answerChosen == 'A') && (questionArray[index].flags[0] == true)) {
            answerCorrect();
        } else if (answerChosen == 'A') {
            answerWrong();
        }
        if ((answerChosen == 'B') && (questionArray[index].flags[1] == true)) {
            answerCorrect();
        } else if (answerChosen == 'B') {
            answerWrong();
        }
        if ((answerChosen == 'C') && (questionArray[index].flags[2] == true)) {
            answerCorrect();
        } else if (answerChosen == 'C') {
            answerWrong();
        }
        if ((answerChosen == 'D') && (questionArray[index].flags[3] == true)) {
            answerCorrect();
        } else if (answerChosen == 'D') {
            answerWrong();
        }

        $(".question").text('');
        $("#buttonA").text('');
        $("#buttonB").text('');
        $("#buttonC").text('');
        $("#buttonD").text('');
        index++;
        if (index < questionArray.length) {
            loadQuestion(index);
        } else {
            $(".answerchoice").hide();
            showScore();
        }
    });


    //	$('#start').click(countdownTimer.start);
});