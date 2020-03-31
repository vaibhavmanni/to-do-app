/*Initializing counters as 0 */
itemCount = 0;
uncheckedCount = 0;  


const list = document.getElementById('todo-list')
const candidate = document.getElementById("candidate");
const li = document.createElement("li");



const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')



function addItem() {
  const list = document.getElementById('todo-list')
  const candidate = document.getElementById("candidate");
  const li = document.createElement("li");
  
  const checkbox = document.createElement('input');
  checkbox.type = "checkbox";

  /*Event listener for checkboxes to regulate unchecked count*/
  checkbox.addEventListener('click', function(event){
    if (event.target.checked) {
      uncheckedCount -= 1;
      uncheckedCountSpan.innerHTML = uncheckedCount;
     }else{
       uncheckedCount += 1;
      uncheckedCountSpan.innerHTML = uncheckedCount;
     }
  }); 
  
  /*Adding checkbox and text to each list item */
  li.appendChild(checkbox);
  li.appendChild(document.createTextNode(candidate.value));

  /*Creating delete button and appending to each list item */
  const button = document.createElement("button");
  button.innerHTML = "x";
  button.setAttribute("class", "remover");   
  li.appendChild(button);

  button.addEventListener('click', function() {
    li.parentNode.removeChild(li);
    if(li.childNodes[0].checked){
      itemCount -= 1;
      itemCountSpan.innerHTML = itemCount;
    }else{
    itemCount -= 1;
    uncheckedCount -= 1;
    itemCountSpan.innerHTML = itemCount;
    uncheckedCountSpan.innerHTML = uncheckedCount;
    }
  });
  
  /*adding list items to original list */
  list.appendChild(li);
  

  renderingCounters();
}


function renderingCounters() {
  itemCount += 1;
  uncheckedCount += 1;
  itemCountSpan.innerHTML = itemCount;
  uncheckedCountSpan.innerHTML = uncheckedCount;
}



function clearAll(){
  list.innerHTML = "";
  itemCount = 0;
  uncheckedCount = 0;
  itemCountSpan.innerHTML = itemCount;
  uncheckedCountSpan.innerHTML = uncheckedCount;
  candidate.value = "";
}