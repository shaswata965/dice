
document.querySelector("a").addEventListener("click",function(){
  var firstNumber = Math.floor(Math.random()*6)+1;
  var firstSource = ("image/dice"+firstNumber+".png");
  document.querySelector(".imgone").setAttribute("src",firstSource);
  var secondNumber = Math.floor(Math.random()*6)+1;
  var secondSource = ("image/dice"+secondNumber+".png");
  document.querySelector(".imgtwo").setAttribute("src",secondSource);

  if(firstNumber > secondNumber){
    document.querySelector("h1").innerText = " 🚩 Player One Wins";
  }
  else if(secondNumber > firstNumber){
    document.querySelector("h1").innerText ="Player Two wins 🚩";
  }
  else{
      document.querySelector("h1").innerText ="🚩It's a draw🚩";
  }

});
