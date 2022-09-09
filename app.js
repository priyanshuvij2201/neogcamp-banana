var btnTranslate = document.querySelector("#btn-translate");

 
var txtInput = document.querySelector("#txt-input");

var outputdiv = document.querySelector("#output");

outputdiv.innerText = " Priyanshu Vij "

console.log(txtInput);


 btnTranslate.addEventListener("click",function clickEventHandler(){
    outputdiv.innerText="asjasjjsjs" + txtInput.value;
 })
