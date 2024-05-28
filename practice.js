//ace editor config
let editor;
window.onload = function() {
    editor = ace.edit("editor");
    editor.setTheme("ace/theme/chrome");
    editor.session.setMode("ace/mode/python");
}

//change language
function changeLanguage() {
    let language = $("#language-options").val();
    if(language == 'cpp')editor.session.setMode("ace/mode/c_cpp");
    else if(language == 'py')editor.session.setMode("ace/mode/python");
}

function executeCode(event) {
    event.preventDefault();
    //send code to server
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "https://bb7d-66-194-72-52.ngrok-free.app/practice.php", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function() {
        if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
            // Check if the response is empty
            if (this.responseText.trim() === '') {
                document.querySelector(".output").textContent = "No output from server";
            } else {
                document.querySelector(".output").textContent = this.responseText;
            }
        } else if (this.readyState === XMLHttpRequest.DONE) {
            document.querySelector(".output").textContent = "An error occurred: " + this.responseText;
        }
    }
    xhr.send("language=" + document.getElementById("language-options").value + "&code=" + editor.getSession().getValue());
}


//Questions
let questions1 = [
    { questionHeader: "Question 2", question: "Print the value of an integer variable initialized to 5.", answer: "5"},
    { questionHeader: "Question 3", question: "Print the type of a string variable initialized to 'hello'.", answer: "NSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEE"},
];

let questions2 = [
    { questionHeader: "Question 2", question: "Print 'Greater' if the integer variable 9 is greater than 5, otherwise print 'Lesser'.", answer: "Greater"},
    { questionHeader: "Question 3", question: "Print 'Even' if the integer variable 4 is even, otherwise print 'Odd'.", answer: "Even"},];

let questions3 = [
    { questionHeader: "Question 2", question: "Print numbers from 0 to 2 using a for loop.", answer: "0\n1\n2"},
    { questionHeader: "Question 3", question: "Print numbers from 0 to 1 using a while loop.", answer: "0\n1"},
];

let questions4 = [
    { questionHeader: "Question 2", question: "Print the return value of a function that returns 'Hello'.", answer: "Hello"},
    { questionHeader: "Question 3", question: "Print the result of a function that adds two integers 2 and 3.", answer: "5"},
];

let questions5 = [
    { questionHeader: "Question 2", question: "Print the elements of an integer array initialized as {1, 2, 3, 4, 5}.", answer: "1\n2\n3\n4\n5"},
    { questionHeader: "Question 3", question: "Print the sum of the elements in an integer array initialized as {1, 2, 3, 4, 5}.", answer: "15"},
];

let questions6 = [
    { questionHeader: "Question 2", question: "Print 'Hello Alice' assuming the user inputs 'Alice'.", answer: "Hello Alice"},
    { questionHeader: "Question 3", question: "Print 'You entered: 5' assuming the user inputs 5.", answer: "You entered: 5"},
];

let questions7 = [
    { questionHeader: "Question 2", question: "Print the factorial of 3 using a recursive function.", answer: "6"},
    { questionHeader: "Question 3", question: "Print the 4th Fibonacci number using a recursive function.", answer: "3"},
];

let questions8 = [,
    { questionHeader: "Question 2", question: "Print the index of 4 in the array [1, 2, 3, 4, 5] using binary search.", answer: "3"}
];


let currentQuestionIndex = -1;

function nextQuestion(currList) {
    currentQuestionIndex++;
    if (currentQuestionIndex < 2) {
        //change question
        document.querySelector('.questionHeader').textContent = currList[currentQuestionIndex].questionHeader;
        document.querySelector('.question').textContent = currList[currentQuestionIndex].question;
        document.querySelector('.expected-output').textContent = currList[currentQuestionIndex].answer;
        //reset styles
        document.querySelector('.questionResult').textContent = " ";
        document.querySelector('.nextQuestion').style.display = 'none';
        document.querySelector('.checkQuestion').style.display = 'block';
        document.querySelector('.checkQuestion .btn').style.backgroundColor = 'gray';
    } else {
        // document.querySelector('.questionHeader').style.display = 'none';
        //move to next section
        document.querySelector('.question').textContent = 'You have completed this section. Please refresh the page to start again.';
        //hide the next button
        document.querySelector('.questionHeader').style.display = 'none';
        document.querySelector('.nextQuestion').style.display = 'none';
        document.querySelector('.checkQuestion').style.display = 'none';
        document.querySelector('.questionResult').textContent = " ";
        document.querySelector('.nextQuestion').style.display = 'none';
        document.querySelector('.checkQuestion').style.display = 'none';
        currentQuestionIndex = -1;

    }
}

//check output
function checkOutput() {
    let output = document.querySelector(".output").textContent.trim();
    let expectedOutput = document.querySelector(".expected-output").textContent.trim();
    let questionResult = document.querySelector('.questionResult');
    let nextButton = document.querySelector('.nextQuestion');
    let checkQuestionButton = document.querySelector('.checkQuestion .btn');

    if (output === expectedOutput) {
        questionResult.textContent = '✓';
        questionResult.style.color = 'green';
        checkQuestionButton.style.backgroundColor = '#57a958';
        nextButton.style.display = 'block';
    } else {
        questionResult.textContent = '✗';
        questionResult.style.color = 'red';
        checkQuestionButton.style.backgroundColor = 'red';
        nextButton.style.display = 'block';
    }
}
