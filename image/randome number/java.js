let getNumber1;
let push=document.querySelector("#push");
let player1=document.querySelector("#player")
const guessNumber1=()=>{
     getNumber1=document.querySelector("#getNumber1").value;
    console.log(getNumber1);
    if(getNumber1>=1&&getNumber1<=20)
    {
        player.style.display="none"
        gameid.style.display="block"
}
else(
    alert("getNumber between 1 to 20")
)
}




let output=document.querySelector("#show > h2")
let point=document.querySelector("#count")
let sum=0
let gameid=document.querySelector("#gameid")
const guessNumber=()=>{
sum=sum+1
point.textContent=sum
let getNumber=document.querySelector("#getNumber").value


if(getNumber<getNumber1){
    output.textContent='too short';

}else if(getNumber>getNumber1){
    output.textContent='too big';
    
}else{
    output.textContent='win';
    document.querySelector("#textj2").style.color="green";
    document.querySelector("#getNumber").disabled=true;
    
}
}


