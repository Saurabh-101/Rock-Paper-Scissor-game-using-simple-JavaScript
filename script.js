let ele_list = [ "Rock", "Paper", "Scissor"]



let user_input;
let win = 0;
let loose = 0;
let count = 0;
let runTime = true;

while (runTime){

    let rand_ele = ele_list[Math.floor(Math.random()*ele_list.length)]
    // console.log(rand_ele)
    user_input = prompt("Choose your move [Rock / Paper / Scissor] :\n Enter 'exit' to end game.  ")
    
    
    if(user_input=="Rock" && rand_ele=="Scissor"){
        alert("User wins");
        win++;
        
        
    }
    else if(user_input=="Paper" && rand_ele=="Rock"){
        alert("User wins");
        win++;
        
    }
    else if(user_input=="Scissor" && rand_ele=="Paper"){
        alert("User wins");
        win++;
        
    }
    else if(user_input=="Scissor" && rand_ele=="Rock"){
        alert("Computer wins");
        loose++;
        
    }
    else if(user_input=="Rock" && rand_ele=="Paper"){
        alert("Computer wins");
        loose++;
        
    }
    else if(user_input=="Paper" && rand_ele=="Scissor"){
        alert("Computer wins");
        loose++;
        
    }
    else if(user_input==rand_ele){
        alert("It was Tie")
    }
    else if(user_input=="exit"){
        break;
    }
    count++;
    
    if(win==2){
        document.write("You Win")
        document.write("    Number of turns played: ",count)
        document.write("    You win ",win," times.")
        break;
    }
    else if(loose==2){
        document.write("You Loose")
        document.write("    Number of turns played: ",count)
        document.write("    You loose ",loose," times.")
        break;
    }
    

}