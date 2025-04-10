function changeText(){
  const  x = document.getElementById('name');

  x.value= x.value.toUpperCase();
  
}

function checkAge(){
  const x= document.getElementById('age');
  if(x.value<18){
    x.value="Underage"
  }
}

function Increase(){
  const x = document.getElementById('num1').value;
  x++;

}
function Change(){
  const c= document.getElementById('num2').value;
  const x= document.getElementsByTagName(h1)
  x[0].innerHTML= c;

}
function Heading2(){
  const c= document.getElementById('num3').value;
  const x= document.getElementsByTagName(h2)
  x[0].innerHTML= c;

}
function Decrease(){
  const x= document.getElementById('num1').value;
  x--;

}


