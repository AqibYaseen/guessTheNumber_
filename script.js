let submit = document.getElementById('btn1');
let giveUp = document.getElementById('btn2');
let input = document.querySelector('input');
let num = parseInt(Math.floor(Math.random() * 10));

console.log(num);

submit.addEventListener('click',function(){
    
    if(input.value == ""){
        alert('Empty Field Detected!');
    }
    else if(parseInt(input.value) == num){

        alert('You won!!' + num);
        // console.log(input);
        document.location.reload();
    }
    else{
        alert('Wrong Guess, Try again!');
        input.value="";
        // console.log(input);
        document.location.reload();
    }
});

giveUp.addEventListener('click',()=>{
    alert(`The Number Was :  ${num}`);
    document.location.reload();

});

if (condition) {
    
} else {
    
}
