const rocklabel = document.getElementById("rocklabel");
const paperlabel = document.getElementById("paperlabel");
const scissorslabel = document.getElementById("scissorlabel");

let player_result = document.getElementById("playerres");
let pcresult = document.getElementById("pcres");
let result = document.getElementById("result");

const rocklabel_pc = document.getElementById("rocklabel_pc");
const paperlabel_pc = document.getElementById("paperlabel_pc");
const scissorslabel_pc = document.getElementById("scissorlabel_pc");

const buffers = [rocklabel_pc, paperlabel_pc, scissorslabel_pc];

function buffering(start){
    
    index = 0
    if(start){
        bufferInterval = setInterval(() => {
        // reset colors
        buffers.forEach(btn => btn.style.backgroundColor = 'white');

        // highlight the buffer
        buffers[index].style.backgroundColor = 'red';
        index = (index+1) % buffers.length;
    },50);   
    }
    else{
        clearInterval(bufferInterval);
        buffers.forEach(btn => btn.style.backgroundColor = 'white');
    }


}

function game(userInput){
    const choices = ['rock', 'paper', 'scissor'];
    const comp_choice = choices[Math.floor(Math.random()* 3)];

    pcresult.textContent = `Computer: ${comp_choice}`;
    console.log("Computer choice:"+comp_choice);

    if (comp_choice === "rock"){
        buffers.forEach(btn => btn.style.backgroundColor = 'white');
        rocklabel_pc.style.backgroundColor = 'red';
    }
    else if (comp_choice === "paper"){
        buffers.forEach(btn => btn.style.backgroundColor = 'white');
        paperlabel_pc.style.backgroundColor = 'red';
    }
    else{
        buffers.forEach(btn => btn.style.backgroundColor = 'white');
        scissorslabel_pc.style.backgroundColor = 'red';   
    }

    if (userInput === comp_choice){
        console.log("It's a tie!");
        result.textContent = "It's a tie!";
    }
    else if  (userInput === 'rock'){
        if(comp_choice === 'paper'){
            console.log("You lose");
            result.textContent = "You lose!";
        }
        else{
            console.log("You win");
            result.textContent = "You win!";
        }

    }
    else if  (userInput === 'paper'){
        if(comp_choice === 'scissor'){
            console.log("You lose");
            result.textContent = "You lose";
        }
        else{
            console.log("You win");
        }

    }
    else if  (userInput === 'scissor'){
        if(comp_choice === 'rock'){
            console.log("You lose");
            result.textContent = "You lose!";
        }
        else{
            console.log("You win");
            result.textContent = "You win!";
        }

    }

    
    // pcresult.textContent = `Computer:`;
}

function stack(input){
    console.log("function buffer is running");
    buffering(true);

    setTimeout(() => {
        buffering(false);
        game(input);
        buffers.forEach(btn => btn.style.backgroundColor = 'white');
    },1500);
}

rocklabel.addEventListener('click', event =>{
    rocklabel.style.pointerEvents = "none";
    setTimeout(() => rocklabel.style.pointerEvents = "auto", 2000);

    console.log("User input:rock");
    player_result.textContent = 'Player: rock';
    stack("rock");
    
})


paperlabel.addEventListener('click', event =>{
    paperlabel.style.pointerEvents = "none";
    setTimeout(() => paperlabel.style.pointerEvents = "auto", 2000);
    console.log("User input:paper");
    player_result.textContent = 'Player: paper';
    stack("paper");
})


scissorslabel.addEventListener('click', event =>{
    scissorslabel.style.pointerEvents = "none";
    setTimeout(() => scissorslabel.style.pointerEvents = "auto", 2000);
    console.log("User input:scissor");
    player_result.textContent = 'Player: scissor';
    stack("scissor");
})


fetch('https://api.countapi.xyz/hit/rock-paper-sc-one.vercel.app/visits')
  .then(res => res.json())
  .then(data => {
    document.getElementById('counter').textContent = data.value;
  });
