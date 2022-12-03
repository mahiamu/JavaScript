 var number1;
 var number2;

 number1 = Math.floor((Math.random()*10)+1);
 number2 = Math.floor((Math.random()*10)+1);
 document.getElementById("number1").innerHTML= number1;
 document.getElementById("number2").innerHTML= number2;

 var answer = number1 + number2;

 var checkAnswer = document.querySelector('input[type=text]');
 var value = checkAnswer.value;
 var btn = document.querySelector('input[type=button][value=Check]');
btn.onclick = function () {
    value= checkAnswer.value;
    if(value == answer ){
        alert('You Are Correct!');
    }else{
        alert('You Are Incorrect, The Aswer Wes '+answer);
    }
    document.querySelector('input[type=text]').value=" ";
    document.getElementById("number1").innerHTML= " ";
    document.getElementById("number2").innerHTML= " ";
    number1 = Math.floor((Math.random()*10)+1);
    number2 = Math.floor((Math.random()*10)+1);
    document.getElementById("number1").innerHTML= number1;
    document.getElementById("number2").innerHTML= number2;

    answer = number1 + number2
    }