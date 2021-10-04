const varDate = document.querySelector("#datetxt");
const varNumber = document.querySelector("#lucky-no");
const outputMsg = document.querySelector("#msg");
const btn= document.querySelector("#btn");

btn.addEventListener("click",()=>parserCall());
function parserCall(){
//const dateToInt = Date.parse(varDate);
//console.log(varDate.value.replaceAll('-','0'));
const removeHyphen = varDate.value.replaceAll('-','0');
let sum=0;
for(let ch of removeHyphen){
    sum+=Number(ch);
//console.log(sum);
}
if(sum%varNumber === 0){
    outputMsg.innerText = "Your b'day is lucky !!!!";
}
else{
    outputMsg.innerText = "Your b'day is not lucky"}
}