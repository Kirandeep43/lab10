// JavaScript source code

function addValue() {
    // get the operands value
    var operand1 = document.getElementById("inp1").value;
    var operand2 = document.getElementById("inp2").value;

    // parse to integer
    val1 = parseInt(operand1, 10);
    val2 = parseInt(operand2, 10);
    //parse to float
    //val1 = parseFloat(operand2);
    //val2 = parseFloat(operand2);
    // perform operation
    var result = val1 + val2;
     document.getElementById("place").value = val1 + "+" + val2 + "=" + result;
   // console.log(val1 + "+" + val2 + "=" + result);
  
    
}
function mValue() {
    // get the operands value
    var operand1 = document.getElementById("inp1").value;
    var operand2 = document.getElementById("inp2").value;

    // parse to integer
    val1 = parseInt(operand1, 10);
    val2 = parseInt(operand2, 10);
    //parse to float
    //val1 = parseFloat(operand2);
    //val2 = parseFloat(operand2);
    // perform operation
    var result = val1 * val2;
    document.getElementById("place").value = val1 + "*" + val2 + "=" + result;
       // console.log(val1 + "*" + val2 + "=" + result);
}
function dValue() {
    // get the operands value
    var operand1 = document.getElementById("inp1").value;
    var operand2 = document.getElementById("inp2").value;

    // parse to integer
    val1 = parseInt(operand1, 10);
    val2 = parseInt(operand2, 10);
    //parse to float
    //val1 = parseFloat(operand2);
    //val2 = parseFloat(operand2);
    // perform operation
    var result = val1 / val2;
    document.getElementById("place").value = val1 + "/" + val2 + "=" + result;
       // console.log(val1 + "/" + val2 + "=" + result);
   
}
function cValue(){
    document.getElementById("inp1").value = '';
    document.getElementById("inp2").value = '';
  document.getElementById("place").value = '';
}