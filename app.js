let gameSeq=[];
let userSeq=[];
let Hscore=[];

let started=false;
let level=0;
let h3=document.querySelector('h3');
let btnColors=['purple','yellow','green','red'];

document.addEventListener("keypress",function(){
    if(started==false){
        console.log("game is started");
        started=true;

        levelUp();
    }
});
function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove('flash');
    },1000/4)
}
function levelUp(){
    userSeq=[];
    level++;
    h3.innerText=`Level ${level}`;

    let randomIdx=Math.floor(Math.random()*3);
    let randColor=btnColors[randomIdx];
    let randButton=document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    gameFlash(randButton);
}

function checkAns(idx){ 
    if(userSeq[idx]===gameSeq[idx]){
        if(userSeq.length==gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }else{
        h3.innerHTML=`Game Over! Your score was <b>${level}</b> <br> Press any key to start.`;
        document.querySelector('body').style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector('body').style.backgroundColor="white";
        },200);

        reset();
    }
}

function btnPress(){
    let btn=this;
    gameFlash(btn);
    userSeq.push(btn.getAttribute('id'));
    checkAns(userSeq.length-1)
}
let btnAll=document.querySelectorAll('.box');
for(btn of a=btnAll){
    btn.addEventListener("click",btnPress);
}

function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}