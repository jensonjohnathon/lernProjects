//these variables will be used to create individual Id's for later identification of the List elements and Delete elements
var countLi = 0;
var countDelete = 0;

document.getElementById("add").onclick  = function() {  //Event listener for the Button that adds todo Items into the List
    countLi += 1; // counter used to assign a different id to each List Item
    countDelete -= 1; // counter used to assign a different id to each Checkbox
    // li code
    var node = document.createElement("Li"); //Creates a new list element 
    node.id = countLi.toString();
    var text = document.getElementById("todoInput").value; //assigns a value equivalent to the text the User can input to the variable text
    var textnode=document.createTextNode(text); //turns the variable text into a textnode and saves it to the variable textnode
    node.appendChild(textnode); // adds the textnode into the node so it can be displayed in the li element
    // li code
    //checkbox code
    var checkbox = document.createElement('input'); // creates the checkbox this checkbox will be used to delete the todo item from the list of todo items
    //assigning attributes to the checkbox
    checkbox.type = "checkbox";
    checkbox.name = "deleteBox";
    checkbox.value = "value";
    checkbox.id = countDelete.toString();
    //checkbox code end
    // to tell the user what the checkbox is for a label with clarification text will be created
    var label = document.createElement('label'); // label for the checkbox for clarification
    label.htmlFor = "id"; // label attribute
    label.appendChild(document.createTextNode('Done?')) //text inside the Label displayed after the Checkbox
    node.appendChild(checkbox); //adding both to the List element
    node.appendChild(label);
    
    document.getElementById("item_list").appendChild(node); // adds the li element node into the item list
}

document.getElementById("deleteAll").onclick  = function() { // function that deletes item list with a checkbox marking them as done
    var countLi2 = 0; // used for idetentification of the List Element
    for (i = -1; i >= countDelete; --i) {  // for loop to iterate through the boxes i has to start at -1 because --1 will only be called after the first loop. This loop will look for checkboxes that are checked and thus marked as done
        countLi2 += 1; //counter for the current List Item
        var currentBox = document.getElementById(i.toString()); //variables that make it easier to work with the Checkbox or List Item elements in the loop
        var currentItem = document.getElementById(countLi2.toString());

        if(currentBox === null) { // bypass for null values
            console.log("null Value detected")
        } else if (currentBox.checked === true){ // else if clause that evaluates if the checkbox has been marked as done if that is the case the corresponding List elemt is removed

            currentItem.remove();
        } else { // this gets triggered if a box is unchecked
            console.log("box not marked as done")
        }
        console.log(currentBox)
        console.log(currentItem)
    }
}