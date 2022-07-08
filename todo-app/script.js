let list = document.getElementById("todoList");

function getInputValue(){
    // Selecting the input element and get its value 

    var inputVal = document.getElementById("todoText").value;
    data.forEach((inputVal)=>{
        let li = document.createElement("li");
        li.innerText = inputVal;
        list.appendChild(li);
      })
}