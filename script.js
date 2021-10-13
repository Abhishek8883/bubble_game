var bottom = document.querySelector("#bottom")
var Timer = 60;
var randnum 
var score = 0;
var time = setInterval(my_timer,1000);

function show_bubbles(){
    var temp = ``;
    for(var i=0;i<90;i++){
        temp += `<div class="bubble">${Math.floor(Math.random()*10)}</div>`
    }
    bottom.innerHTML = temp
}

function my_timer(){
    if(Timer < 0){
        clearInterval(time)
        bottom.innerHTML = `<div id="text">
        <h1>Game Over</h1>
        <h4>Your Score was : <span>${score}</span></h4>
    </div>`
    }
    else{
        document.querySelector("#Time_box").textContent = Timer
        Timer --;}
    console.log(Timer)
}


function random_number(){
    randnum = Math.floor(Math.random()*10)
    document.querySelector("#Click_box").textContent = randnum
}

function increse_score(){
    score += 10;
    document.querySelector("#score_box").textContent = score
}

function start(){
    bottom.addEventListener("click",function(val){
        clicked_bubble = Number(val.target.textContent);
        if(clicked_bubble === randnum){
            increse_score()
            show_bubbles()
            console.log("You won ")
            random_number()
        }
        else{
            show_bubbles()
            random_number()
        }
    })
}

show_bubbles()
my_timer()
random_number()
start()

