var quizdata=[
    {
        question:'which framework is related to javascript',
        a:'.net',
        b:'flask',
        c:'react',
        d:'django',
        correct:'c'

    },
    {
        question:'which is not a programming language',
        a:'HTML',
        b:'python',
        c:'C',
        d:'java',
        correct:'a'

    },
    {
        question:'which is not a framework',
        a:'react',
        b:'javascript',
        c:'angular',
        d:'django',
        correct:'b'

    },
    {
        question:'CSS stands for',
        a:'cascading styling sheet',
        b:'cascading style state',
        c:'cascading style sheet',
        d:'cascading sheet of style',
        correct:'c'

    }
]
var quiz=document.getElementById('quiz')
var answer=document.querySelectorAll('.answer')
var question=document.getElementById('question')
var option_a=document.getElementById('a_value')
var option_b=document.getElementById('b_value')
var option_c=document.getElementById('c_value')
var option_d=document.getElementById('d_value')
var submitbtn=document.getElementById('submit')

var currentQuestion=0
var quizScore=0



loadQuiz()
function loadQuiz(){
    deselect()
    question.innerHTML=quizdata[currentQuestion].question
    option_a.innerText=quizdata[currentQuestion].a
    option_b.innerText=quizdata[currentQuestion].b
    option_c.innerText=quizdata[currentQuestion].c
    option_d.innerText=quizdata[currentQuestion].d

}
function deselect()
{
    answer.forEach(answer=>answer.checked=false)
}
submitbtn.addEventListener('click',()=>{
    var selectedoption;
    answer.forEach(answer=>{
        if(answer.checked){
            selectedoption=answer.id
        }

    })
    if(selectedoption==quizdata[currentQuestion].correct){
        quizScore+=1
        
    }
    currentQuestion=currentQuestion+1
    if(currentQuestion==quizdata.length){
        document.getElementById('quizdiv').innerHTML=`<h1>You have answered ${quizScore} correctly out of ${quizdata.length}</h1>`

    }
    else{
        loadQuiz()
    }
})