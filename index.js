var randomNumber1= Math.random();
randomNumber1=(randomNumber1*6);
randomNumber1=Math.floor(randomNumber1)+1;

var randomNumber2= Math.random();
randomNumber2=(randomNumber2*6);
randomNumber2=Math.floor(randomNumber2)+1;

var image1="images/"+"dice"+randomNumber1+".png";
var image2="images/"+"dice"+randomNumber2+".png";

document.querySelector(".img1").setAttribute("src", image1);
document.querySelector(".img2").setAttribute("src", image2);

//heading changer
if(randomNumber1 > randomNumber2)
{
  document.querySelector("h1").textContent='Player 1 won!!';
}

else if( randomNumber2 > randomNumber1)
{
  document.querySelector("h1").textContent='Player 2 won!!';
}

else
{
  document.querySelector("h1").textContent='Nobody won';
}
