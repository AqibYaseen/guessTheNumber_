let submit = document.getElementById('btn1');
let giveUp = document.getElementById('btn2');
let input = document.querySelector('#inputText1');
let num = parseInt(Math.floor(Math.random() * 10));
let hint = document.querySelector('#numberHint');

document.querySelector('#rad').addEventListener('click',function(e){

    // alert('clicked');
    // console.log(e.target.innerText);

    if(e.target.innerText == "easy" || e.target.value == "easy"){
        // window.location.reload();
        num = parseInt(Math.floor(Math.random() * 10));
        hint.innerText="Number is Between : 0 - 10"
        console.log(num);

    }else if(e.target.innerText == "intermediate" || e.target.value == "inter"){
        // window.location.reload();
        num = parseInt(Math.floor(Math.random() * 100));
        hint.innerText="Number is Between : 0 - 100"

        console.log(num);
        
    }else if(e.target.innerText == "hard" || e.target.value == "hard"){
        // window.location.reload();
        num = parseInt(Math.floor(Math.random() * 1000));
        hint.innerText="Number is Between : 0 - 1000"

        console.log(num);
    }
});

submit.addEventListener('click',function(){
    if(input.value == ""){
        alert('Empty Field Detected!');
    }
    else if(parseInt(input.value) == num){

        alert('You won!!' + num);
        // console.log(input);
        // document.location.href = 'https://www.m.youtube.com/watch?v=xvFZjo5PgG0';
    }
    else{
        alert('Wrong Guess, Try again!');
        input.value="";
        // console.log(input);
        // document.location.reload();
    }
});

giveUp.addEventListener('click',()=>{
    alert(`The Number Was :  ${num}`);
    document.location.reload();

});


