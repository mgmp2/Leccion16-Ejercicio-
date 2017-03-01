var bt = document.getElementById("button");
bt.onclick() = function(){
  var num1 = document.getElementById("num1").value;
  var num2 = document.getElementById("num2").value;
  var op = document.getElementById('operacion').value;
  var result=0;
  switch (op) {
    case 1: result = num1 + num2; break;
    case 2: result = num1 - num2; break;
    case 3: result = num1 / num2; break;
    case 4: result = num1* num2; break;
  }
  document.getElementById("result").innerHTML = result;
}
