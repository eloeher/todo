

var storage = localStorage.getItem('StorageKey');

 //if storage is not empty/if there is something in storage 
if(storage !== null){ 
  //converting JSON String -> Javascript object
     var data = JSON.parse(storage); 
    // load all data from the backend to the frontend. 
    loadData(data);
    //preparing the next todo item's index  
    var id = data.length; 
}

else{
  id = 0;
     data = [];
  }

function loadData(array) {
    array.forEach(function(todo) {
      newItem(todo.name, todo.trash, todo.id);
    });
}


document.body.onkeyup = function(e){
     if(e.keyCode == 13){
        var todo = document.getElementById("input").value;
        newItem(todo, false, id);
        data.push({
            name: todo,
            trash: false,
            id: id
        });
        localStorage.setItem("StorageKey", JSON.stringify(data));
      }
  }

function newItem(todo, trash, id) {
    if (trash == true){
        return;
    }
    var ul = document.getElementById("list");
    var li = document.createElement("li");
  li.appendChild(document.createTextNode("- "+ todo));
  li.setAttribute("id", id);
  ul.appendChild(li);
  document.getElementById("input").value = "";
  li.onclick = removeItem;
}

function removeItem(e) {

    element = e.target;
    e.remove();

    data[element.id].trash = true;
    localStorage.setItem("StorageKey", JSON.stringify(data));
 //  e.target.parentElement.removeChild(e.target);

}
