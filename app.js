const varDate = document.querySelector("#datetxt");
const varNumber = document.querySelector("#lucky-no");
var outputMsg = document.querySelector("#msg");
const btn= document.querySelector("#btn");

btn.addEventListener("click",()=>parserCall());
function parserCall(){
//const dateToInt = Date.parse(varDate);
//console.log(varDate.value.replaceAll('-','0'));
const removeHyphen = varDate.value.replaceAll('-','0');
let sum=0;
for(var ch of removeHyphen){
    sum+=Number(ch);

}
//console.log(sum.type);
//const x =sum%varNumber.value;
//console.log(x);
if(sum%varNumber.value === 0){

    outputMsg.innerText = "Your b'day is lucky !!!!";
}
else{

    outputMsg.innerText = "Your b'day is not lucky";
}
}
