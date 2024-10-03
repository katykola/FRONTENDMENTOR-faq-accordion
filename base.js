const qLines = document.querySelectorAll('.q-line');
const qSigns = document.querySelectorAll('.q-sign');
const answers = document.querySelectorAll('.answer');

for(let i = 0; i < qLines.length; i++){
        qLines[i].addEventListener('click', function(){
            answers[i].classList.toggle('answer-show');
            if(qSigns[i].src.includes("/assets/images/icon-plus.svg")){
                qSigns[i].src = "/assets/images/icon-minus.svg";
            }
            else{
                qSigns[i].src = "/assets/images/icon-plus.svg";
            }
        })
}

