let gameComplete;
const boxes=document.querySelectorAll('.box');
function startGame(){
  step=1;
   gameComplete=false;
  document.getElementById('button').innerHTML='<h3>Reset</h3>';
  document.getElementById('turn').innerHTML=`<h3>It's Player <span class="button-img">Ｘ</span> turn</h3>`;
  pos=[0,1,2,3,4,5,6,7,8];
  for(let i=0;i<boxes.length;i++){
    boxes[i].innerHTML='';
    boxes[i].addEventListener('click',handler,{once:true});
  }
}
function handler(event){
  if(step%2!==0){
    document.getElementById(event.target.id).innerHTML='<span class="cross">Ｘ</span>';
    document.getElementById('turn').innerHTML=`<h3>It's Player <span class="button-img">Ｏ</span> turn</h3>`;//display which player turn it is.
    step++;
    pos[event.target.id]='x';
    winner('cross');
  }
  else{
  document.getElementById(event.target.id).innerHTML='<span class="nought">Ｏ</span>';
  document.getElementById('turn').innerHTML=`<h3>It's Player <span class="button-img">Ｘ</span> turn</h3>`;//display which player turn it is.
  step++;
  pos[event.target.id]='o';
  winner('no');
  }
}
function winner(val){
  if((pos[0]===pos[1] && pos[1]===pos[2]) || (pos[0]===pos[4] && pos[4]===pos[8]) || (pos[6]===pos[4] && pos[4]===pos[2]) || (pos[6]===pos[7] && pos[7]===pos[8]) || (pos[0]===pos[3] && pos[3]===pos[6]) || (pos[3]===pos[4] && pos[4]===pos[5]) || (pos[1]===pos[4] && pos[4]===pos[7]) || (pos[2]===pos[5] && pos[5]===pos[8])){
    if(val==='cross'){
      document.getElementById('turn').innerHTML='<h3>&nbsp&nbsp<span class="button-img">Ｘ</span> Wins! Play Again</h3>';
    }
    else{
      document.getElementById('turn').innerHTML='<h3>&nbsp&nbsp<span class="button-img">Ｏ</span> Wins! Play Again</h3>';
    }
    for(i=0;i<boxes.length;i++){
      boxes[i].removeEventListener('click',handler);
    }
   gameComplete=true;
  }
  else if(step===10){
    document.getElementById('turn').innerHTML="<h3>It's a DRAW! Play Again</h3>";
    gameComplete=true; 
  }
}
startGame();
document.getElementById('turn').onclick=()=>{
  if(gameComplete){
  startGame();
  }
}
document.getElementById('button').onclick=()=>{
  reset();
}
function reset(){
  startGame();
}
