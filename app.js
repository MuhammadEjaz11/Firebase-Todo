



//Add Task Function
const addtask = document.getElementById('addtask');
addtask.addEventListener('click', addtaskfn);
function addtaskfn() {
    let tasklist = document.createElement('div');
    var taskinput = document.getElementById('taskinputhtml');
    tasklist.setAttribute("class", "tasklist");
    var parent = document.getElementById('parenttask');
    if (taskinput.value == "") {
        alert("Please Add Task")
    }
    else {
        tasklist.innerHTML = `
        <p>${taskinput.value}</p> <div class="cbtn">
        <button onclick="completeFn(this)" class="btnn">Mark as Completed</button>
        <button  onclick="cleartasks(this)" class="btnn" id="clearbtn">Clear All Task</button>
      </div>`;
        parent.appendChild(tasklist);


        taskinput.value = "";
        console.log(taskinput)

    }
}
//Complete Task Function

function completeFn(e) {
    e.innerHTML = "Completed"
}
//cleartask button

function cleartasks(e) {
    e.parentElement.parentElement.remove();
}
// //clear Task Function
// var clearbtn = document.getElementById('clearbtn').addEventListener("click", clearAllTask);
// function clearAllTask(){
//     var parent = document.getElementById('parenttask');
//     // parent.tasklist.remove();
//     console.log(parent.tasklist)
// }



