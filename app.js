var list = document.getElementById("list")

function AddTodo(){
    //createText
    var todoitem = document.getElementById("TodoItem")
    var li = document.createElement('li')
    li.setAttribute("class","listing")
    var liText = document.createTextNode(todoitem.value)
    li.appendChild(liText)
    list.appendChild(li)
    todoitem.value = ''
    
    //CreateDelete
    var delBtn = document.createElement('button')
    var delBtnText = document.createTextNode('Delete')
    delBtn.appendChild(delBtnText)
    li.appendChild(delBtn)
    delBtn.setAttribute("class","btn1")
    delBtn.setAttribute("onclick","deleteItem(this)")
    console.log(delBtn)

    //CreateEdit
    var editBtn = document.createElement("button")
    var editBtnT = document.createTextNode("Edit")
    editBtn.appendChild(editBtnT)
    li.appendChild(editBtn)
    editBtn.setAttribute("class","btn2")
    editBtn.setAttribute("onclick","EditItem(this)")
    
}

function deleteItem(e){
    e.parentNode.remove()

}

function DeleteAll(){
    list.innerHTML = ''
}

function EditItem(e){
    var editValue = prompt("Enter the edited value",e.parentNode.firstChild.nodeValue)
    e.parentNode.firstChild.nodeValue  = editValue
}