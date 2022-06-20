let submit = document.getElementById('btn1');
let giveUp = document.getElementById('btn2');
let input = document.querySelector('#inputText1');
let num = parseInt(Math.floor(Math.random() * 10));
let hint = document.querySelector('#numberHint');
let hintBtn = document.querySelector('#hintBtn');
let level = 'easy';
let counter = 0;
// let audio = new Audio('./sounds/error_audio.mp3');

document.querySelector('#container',).addEventListener('click', function(event){
    switch (true){
        case event.target.id == "btn1":
            {
                if(input.value == ""){
                    alert('Empty Field Detected!');
                    return;
            }
            else if(parseInt(input.value) == num){
                    alert('You won!!' + num);
                // console.log(input);
                    document.location.href = 'https://www.youtube.com/watch?v=xvFZjo5PgG0';
                    return;           
            }
            else{
                alert('Wrong Guess, Try again!');
                input.value="";
                // console.log(input);
                // document.location.reload();
                return;
            }
        }
        case event.target.id == "hintBtn":
            {
                counter+=1;
                if(counter <= 1){
                    document.querySelector('#hintDisp').innerText += `=> ${hintGen(level)}\n`;
                    hintBtn.innerText = `Hint! ${counter-1}`;
                    return;
                    
                }else{
                    alert("No more Hints Left!");
                    return;
                }   
            }

        case event.target.id == 'btn2':
            {
            alert(`The Number Was :  ${num}`);
            document.location.reload();
            return;
        }

    }
});

document.querySelector('#rad').addEventListener('click',function(e){

    // alert('clicked');
    // console.log(e.target.innerText);

    if(e.target.innerText == "easy" || e.target.value == "easy"){
        // window.location.reload();
        num = parseInt(Math.floor(Math.random() * 10));
        hint.innerText="Number is Between : 0 - 10"
        level = 'easy';
        console.log(num);

    }else if(e.target.innerText == "intermediate" || e.target.value == "inter"){
        // window.location.reload();
        num = parseInt(Math.floor(Math.random() * 100));
        hint.innerText="Number is Between : 0 - 100"
        level = 'inter';
        console.log(num);
        
    }else if(e.target.innerText == "hard" || e.target.value == "hard"){
        // window.location.reload();
        num = parseInt(Math.floor(Math.random() * 1000));
        hint.innerText="Number is Between : 0 - 1000"
        level = 'hard';
        console.log(num);
    }
});

// giveUp.addEventListener('click',()=>{
/*
hintBtn.addEventListener('click',()=>{
    counter+=1;
    if(counter <= 1){
    document.querySelector('#hintDisp').innerText += `=> ${hintGen(level)}\n`;
    hintBtn.innerText = `Hint! ${counter-1}`;
    console.log(counter);
    }else
    alert("No more Hints Left!");
});
*/
console.log(num);

function hintGen(level){
    let hint;
    if(level == 'easy'){
        switch(true){
        case num%2 == 0 && num < 5:
            return "Number is divisible by 2 \n=> Number is less than 5"; 
            
        case num%2!=0 && num > 5:
            return "Number is not divisible by 2 \nNumber is Greate than 5";
        
        case num%2 == 0 && num > 5:
            return "Number is divisible by 2 \n=> Number is less than 5"; 
            
        case num%2!=0 && num < 5:
            return "Number is not divisible by 2 \nNumber is Greate than 5";
        case num==5:
            return "Number is not divisible by 2 \nNumber is eual to 5 Xp";
        }
        
    }else if(level == 'inter'){
        switch(true){
            case num%2 == 0 && num < 50:
                return "Number is divisible by 2 \n=> Number is less than 5"; 
                
            case num%2==0 && num > 5:
                return "Number is not divisible by 2 \nNumber is Greate than 5";
            }
        
        
        hint = 'level is inter'; 
        return hint;

    }else if(level == 'hard'){
        hint = 'level is hard'; 
        return hint;

    }
    }
