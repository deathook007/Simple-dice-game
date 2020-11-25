var randomNumber1=Math.floor(Math.random()*6)+1;
var randomDiceImage="dice"+randomNumber1+".png";
var randomImageSource="images/"+randomDiceImage;
var Image1=document.querySelectorAll("img")[0];
Image1.setAttribute("src" , randomImageSource );

var randomNumber2=Math.floor(Math.random()*6)+1;
var randomImageSource2="images/dice"+randomNumber2+".png";
var Image2=document.querySelectorAll("img")[1];
Image2.setAttribute("src" ,randomImageSource2 );

if(randomNumber1>randomNumber2)
{
    document.querySelector("h2").innerHTML="  😍 Player 1 wins !";
}
else if(randomNumber2>randomNumber1)
{
	document.querySelector("h2").innerHTML="Player 2 wins !  😍 ";
}
else
{
	document.querySelector("h2").innerHTML=" 🙃 Draws !  🙃 "
}