let content=document.querySelector("#result");

function decrement(){
    let value=parseInt(content.innerText);
    value=value-1;
    content.innerText=value;
}
function increment(){
    let value=parseInt(content.innerText);
    value=value+1;
    content.innerText=value;
}
function reset(){
    let value=parseInt(content.innerText);
    value=0;
    content.innerText=value;
}