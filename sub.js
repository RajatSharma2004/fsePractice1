function sub(){
  num1 = document.getElementById('txt1')
  num2 = document.getElementById('txt2')
  num3 = parseFloat(num1.value)-parseFloat(num2.value)
  document.getElementById('txt3').value=num3
  var x=document.getElementsByTagName('h1')
  x[0].innerHTML="the answer is"+num3
}