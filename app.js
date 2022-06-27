let winAudio = new Audio('./win.mp3');
let failAudio = new Audio('./fail.mp3');
let nearFileAudio = new Audio('./nearFail.mp3');
var count=0;

let secretNumber = Math.trunc(Math.random()*20) +1;
console.log(secretNumber);
const checkBtn = document.querySelector('.check');


checkBtn.addEventListener('click', function(){
    count++;

 let gussNumber= Number(document.querySelector('.guess').value);

    if (!gussNumber){
        document.querySelector(".message").textContent="⛔ No Number!";
    }

    else if(gussNumber !== secretNumber){
         document.querySelector('.message').textContent = 
         gussNumber > secretNumber ? '🆙Too high!' : '⬇Too Low!';
         document.querySelector('.guess').value="";
         
    if(count ===4 ){
        nearFileAudio.play();
    }
    else if (count === 5 ){
        failAudio.play();
        document.querySelector('.message').innerHTML ='<h4> No attempt left try again! </h4>'
        checkBtn.disabled= true;
        checkBtn.style.backgroundColor='rgba(220,220,0.677)';
        checkBtn.style.cursor='defualt';
    }
}
    else if  (count === 5 && gussNumber === secretNumber){
        document.querySelector('.message').textContent= "🎉 Correct Number🏆";
        document.querySelector('.lets-paly').textContent='Congraltions✨';
        winAudio.play();
        document.querySelector('body').style.backgroundColor='green';
        document.querySelector('.number').textContent = secretNumber;
        checkBtn.disabled=ture;
        checkBtn.style.backgroundColor='rgba(220,220,0.677)';
      //  document.querySelector('.number').style.width="15rem";
    }
    else if (gussNumber === secretNumber){
        winAudio.play();
        document.querySelector('.message').textContent= "🎉 Correct Number🏆"
        document.querySelector('.lets-paly').textContent='Congraltions✨';
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor='green';
       // document.querySelector('.number').style.width="15rem";
        checkBtn.style.backgroundColor='rgba(220,220,0.677)';
        checkBtn.style.cursor='defualt';
        checkBtn.disabled=true;  
    }     

})
const AgainBtn = document.querySelector('.again');
AgainBtn.addEventListener('click', function(){
    count=0;
    let secretNumber = Math.trunc(Math.random()*20) +1;
    document.querySelector('.number').textContent="?";
    document.querySelector('.lets-paly').textContent='Lets play! 🤩';
    document.querySelector('.message').textContent="Start gussing.....";
    document.querySelector('body').style.backgroundColor='#f0db4f';
   //  document.querySelector('.number').style.width="10rem";
    checkBtn.style.backgroundColor='#388697';
    document.querySelector('.guess').value="";
    checkBtn.style.cursor='pointer';
    checkBtn.disabled=false;

})
