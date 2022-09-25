let score1 = document.getElementById('score-1')
let score2 = document.getElementById('score-2')
let total1 = 0
let total2 = 0

function plusOne(a){
    if(a=='score-1'){
        total1+=1
        score1.textContent = total1
    }
    else if(a=='score-2'){
        total2+=1
        score2.textContent = total2
    }
}

function plusTwo(a){
    if(a=='score-1'){
        total1+=2
        score1.textContent = total1
    }
    else{
        total2+=2
        score2.textContent = total2
    }
}
function plusThree(a){
    if(a=='score-1'){
        total1+=3
        score1.textContent = total1
    }
    else{
        total2+=3
        score2.textContent = total2
    }
}

function reset(){
    total1 = 0
    total2 = 0
    score1.textContent = total1
    score2.textContent = total2
}