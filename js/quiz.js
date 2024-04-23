console.log("the function of the quiz is ruuing")


let html = [
    {
        question: 'What does HTML stand for?',
        option1: 'Hyperlinks and Text Markup Language',
        option2: 'Hypertext Markup Language',
        option3: 'Home Tool Markup Language',
        correctOption: "Hypertext Markup Language"
    },
    {
        question: 'Who is making the Web standards?',
        option1: 'Google',
        option2: 'The World Wide Web Consortium',
        option3: 'Microsoft',
        correctOption: "The World Wide Web Consortium"
    },
    {
        question: 'Choose the correct HTML element for the largest heading:',
        option1: '<heading>',
        option2: '<h6>',
        option3: '<h1>',
        correctOption: "<h1>"
    },
    {
        question: 'What is the correct HTML element for inserting a line break?',
        option1: '<linebreak>',
        option2: '<br>',
        option3: '<break>',
        correctOption: "<br>"
    },
    {
        question: 'What is the correct HTML for adding a background color?',
        option1: '<body bg="yellow">',
        option2: '<background>yellow</background>',
        option3: '<body style="background-color:yellow;">',
        correctOption: '<body style="background-color:yellow;">'
    },
    {
        question: 'Choose the correct HTML element to define important text:',
        option1: '<strong>',
        option2: '<b>',
        option3: '<i>',
        correctOption: '<strong>'
    },
    {
        question: 'Choose the correct HTML element to define emphasized text:',
        option1: '<italic>',
        option2: '<i>',
        option3: '<em>',
        correctOption: "<em>"
    },
    {
        question: 'What is the correct HTML for creating a hyperlink?',
        option1: '<a>http://www.w3schools.com</a>',
        option2: '<a href="http://www.w3schools.com">W3Schools</a>',
        option3: '<a url="http://www.w3schools.com">W3Schools.com</a>',
        correctOption: '<a href="http://www.w3schools.com">W3Schools</a>'
    },
    {
        question: 'Which character is used to indicate an end tag?',
        option1: '*',
        option2: '/',
        option3: '<',
        correctOption: "/"
    },
    {
        question: 'How can you open a link in a new tab/browser window?',
        option1: '<a href="url" target="new">',
        option2: '<a href="url" new>',
        option3: '<a href="url" target="_blank">',
        correctOption: '<a href="url" target="_blank">'
    },
    {
        question: 'Which of these elements are all <table> elements?',
        option1: '<table> <tr> <td>',
        option2: '<table> <head> <tfoot>',
        option3: '<table> <tr> <tt>',
        correctOption: "<table> <tr> <td>"
    },
    {
        question: 'Inline elements are normally displayed without starting a new line.',
        option1: 'True',
        option2: 'False',
        correctOption: "True"
    },
    {
        question: "How can you make a numbered list?",
        option1: '<dl>',
        option2: '<ul>',
        option3: '<ol>',
        option4: '<list>',
        correctOption: "<ol>"
    },
]

let quest= document.getElementById("question")
let option1 = document.getElementById("option1")
let option2 = document.getElementById("option2")
let option3 = document.getElementById("option3")
let btn = document.getElementById("btn")
let index = 0
let score = 0

let min= 1;
let sec = 10
// quest.innerText= html[index].question
// option1.innerText = html[index].option1
// option2.innerText = html[index].option2
// option3.innerText = html[index].option3



let nextquestion= ()=>{
 min= 1;
sec = 59

    let options = document.getElementsByName('answer')
    for(let i=0; i<options.length;i++){
        if(options[i].checked){
            let selected = options[i].value
            let userAnswer =html[index-1][`option${selected}`]
            let correctAnswer= html[index -1].correctOption
            // console.log(html[index -1].correctOption)
            if(userAnswer === correctAnswer){
                score ++

            }

        }
        options[i].checked= false
        btn.disabled = true

    }
    if (index > html.length - 1) {
        console.log("the question is end");
        let percentage = (score / html.length) * 100;
    
        // Define the function before assigning it to the onclick event
        let randerToResult = () => {
            location.href = '../../html/result.html';
        };
    
        let Button1 = document.getElementById("button1");
        Button1.style.display = "block";
        Button1.onclick = randerToResult;
        //  swal({
        //     title: "Good job!",
        //     text: `The Quiz is end
        //            your Score is ${score} 
        //           and percentage is ${percentage}`,
        //     icon: "success",
        // }).then((result) => {
        //     if (result.isConfirmed) {
        //         window.location.href = "./html/result.html";
        //     }
        // });
    
        localStorage.setItem("score", JSON.stringify(score));
        clearInterval(interval);
        
    }else{   
quest.innerText= html[index].question
option1.innerText = html[index].option1
option2.innerText = html[index].option2
option3.innerText = html[index].option3
index++
}
}
nextquestion()

let btnclick=()=>{
    
     btn.disabled = false
}

//  timer code is here


let timer = document.getElementById("timer") 
let interval = setInterval(function() {
    timer.innerHTML = `${min}:${sec}`
    sec --
    if(sec<0){
        if(min<1){
        nextquestion()
        min =1
        sec =59
        }
        else{
            min --
            sec =59
        }
    }
},1000)


// window.addEventListener('blur', function(){
//     console.log(" the user is gone for ever and her will not come  ")
// })