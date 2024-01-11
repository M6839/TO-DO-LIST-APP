var inputtask=document.getElementById("inputtask");
var tasklist=document.getElementById("tasklist");
var button=document.getElementById("button");
function addTask(){
    if(inputtask.value.length ==0)
    {
        alert("enter a task details");
    }
    else{ 
        let li=document.createElement("li");
        li.innerHTML=inputtask.value;
        tasklist.appendChild(li); 
        let button2=document.createElement("button");
        button2.innerHTML="DEL";
        li.appendChild(button2);
    }
    inputtask.value="";
    saveTasklist();

}
tasklist.addEventListener("click",function(e){
    if(e.target.tagName ==="LI"){
        e.target.classList.toggle('checked');
        saveTasklist();
    }
    else if(e.target.tagName ==="BUTTON"){
        e.target.parentElement.remove();
        saveTasklist();
    }

},false);
function saveTasklist(){
    localStorage.setItem('data',tasklist.innerHTML);
}
function showSavedlist(){
    tasklist.innerHTML=localStorage.getItem("data");
}
showSavedlist();
