


function myFunction() {

  var day;

  
  switch (Math.ceil(Math.random()*33)) {
  case 1:
    day = "A";
    break;
  case 2:
    day = "Ā";
    break;
  case 3:
    day = "B";
    break;
  case 4:
    day = "C";
    break;
  case 5:
    day = "Č";
    break;
  case 6:
    day = "D";
    break;
  case 7:
    day = "E";
    break;
    case 8:
    day = "Ē";
    break;
  case 9:
    day = "F";
    break;
  case 10:
    day = "G";
    break;
    
    case 11:
    day = "Ģ";
    break;
  case 12:
    day = "H";
    break;
  case 13:
    day = "I";
    break;
  case 14:
    day = "Ī";
    break;
  case 15:
    day = "J";
    break;
  case 16:
    day = "K";
    break;
  case 17:
    day = "Ķ";
    break;
    case 18:
    day = "L";
    break;
  case 19:
    day = "Ļ";
    break;
  case 20:
    day = "M";
    break;
    
    case 21:
    day = "N";
    break;
  case 22:
    day = "Ņ";
    break;
  case 23:
    day = "O";
    break;
  case 24:
    day = "P";
    break;
  case 25:
    day = "R";
    break;
  case 26:
    day = "S";
    break;
  case 27:
    day = "Š";
    break;
    case 28:
    day = "T";
    break;
  case 29:
    day = "U";
    break;
  case 30:
    day = "Ū";
    break;
    
    case 31:
    day = "V";
    break;
  case 32:
    day = "Z";
    break;
  case 33:
    day = "Ž";
 };


  var para = document.createElement("text");
    para.innerHTML = day;
    
    
  
  document.getElementById("myDIV").appendChild(para);
}