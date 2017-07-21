function myTranslate() {
var str = "Hello"
var text = ""
var x = 0;
while (x < 5) {
  var res = str.charAt(x);
  console.log(res);

if(res == "a" ||res == "e" || res == "i" || res == "o" || res == "u") {
  text = text + "ub" + str.charAt(x);
  x = x + 1;
}
else {
  text = text + str.charAt(x);
}
document.getElementById("demo").innerHTML=text;
  x=x+1
}
var str = "Friend"
var text = ""
var a = 0;
while (a < 6) {
  var res = str.charAt(a);
  console.log(res);

if(res == "a" ||res == "e" || res == "i" || res == "o" || res == "u") {
  text = text + "ub" + str.charAt(x);
  a = a + 1;
}
else {
  text = text + str.charAt(a);
}
document.getElementById("demotwo").innerHTML=text;
  a=a+1
}
}
