

function getNumber(num){
//   console.log(num);
    var result=document.getElementById("result");
    // console.log(result);
    result.value += num;
    // result.value = num;
    
}

function clearResult(){
    var result=document.getElementById("result");
    result.value="";

}
function getResult(){
    var result=document.getElementById("result");
    result.value = eval(result.value)
}
function negativePositive(){
    var result=document.getElementById("result");
    result.value=Math.abs(result.value)
}
