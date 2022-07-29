//Add Task Function
const addtask = document.getElementById('addtask');
addtask.addEventListener('click', addtaskfn);
function addtaskfn(){
    let tasklist = document.createElement('div');
    var taskinput = document.getElementById('taskinputhtml');
    tasklist.setAttribute("class","tasklist" );
    var parent = document.getElementById('parenttask');
    if(taskinput.value == ""){
        alert("Please Add Task")
    }
    else{
        tasklist.innerHTML = `
        <p>${taskinput.value}</p> <button onclick="completeFn(this)"  class="btnn">Mark as Complete</button>`;
        parent.appendChild(tasklist);
        
        
        taskinput.value = "";
        console.log(taskinput)

    }
}
//Complete Tas Function

function completeFn(e){
e.innerHTML = "Completed"
}
