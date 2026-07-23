const add=document.getElementById("add");
const lscontainer=document.getElementById("ls-container");

function addtask(){
    if(add.value   === ''){
        alert("You must write something!");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=add.value;
        lscontainer.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    add.value="";
}
lscontainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
},false);
