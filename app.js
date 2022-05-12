

//Get element form page

const addButton = document.getElementById("button");
const enteredTask = document.getElementById("name");
const taskListBox = document.getElementById("tasklist");
const clearButton = document.querySelector("#clear");

let deleteButton = document.querySelectorAll(".fa-times");


addButton.addEventListener("click",addElement);
clearButton.addEventListener("click",deleteAllElements);


function addElement(){
    if(enteredTask.value == ""){
        alert("Please enter a task..!");
    }
    else{
        var listElement = document.createElement("li");
        listElement.innerText = enteredTask.value;
        //alert(listElement.innerText);

        var deleteIcon = document.createElement("i");
        deleteIcon.classList = "fas fa-times";

        listElement.appendChild(deleteIcon);

        taskListBox.appendChild(listElement);

        enteredTask.value = "";

        deleteButton = document.querySelectorAll(".fa-times");

        for(var i = 0; i < deleteButton.length; i++){
            deleteButton[i].addEventListener("click",deleteOneElement);
        }
    }
}

function deleteOneElement(){
    var choice = confirm("Are you sure delete this item?");

    if(choice == true){
        this.parentElement.remove();
    }
}

function deleteAllElements(){
    var choice = confirm("Are you sure delete all items?");

    if(choice == true){
        var list = document.querySelectorAll("li");
        for(var i = 0; i < list.length; i++){
            list[i].remove();
        }
    }
}