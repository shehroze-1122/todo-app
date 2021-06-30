var button = document.getElementById("enter");
var input  = document.getElementById("userInput")
var ul     = document.getElementsByTagName("ul")[0];
var li     = document.getElementsByTagName("li");
var dltItem= document.getElementsByClassName("delete");

function addListItem(){
  var newItem=document.createElement("li");
  var btn=document.createElement("button");
  btn.appendChild(document.createTextNode("Delete"));
  btn.classList.add("delete");
  btn.onclick=removeParent;
  newItem.appendChild(document.createTextNode(input.value));
  newItem.onclick=itemDone;
  newItem.appendChild(btn)
  ul.appendChild(newItem);
  input.value="";
}

function buttonClickListener(){
    if(input.value !==""){
      addListItem();
  }
}

function inputEnterListener(event){
  if(input.value !=="" && event.keyCode===13 ){
    addListItem();
  }
}

function itemDone(e){
    e.target.classList.toggle("done");
}

button.addEventListener("click",buttonClickListener)
input.addEventListener("keypress",inputEnterListener)

function removeParent(evt) {
  evt.target.removeEventListener("click", removeParent, false);
  evt.target.parentNode.remove();
}
for(var i=0; i<dltItem.length;i++){
  dltItem[i].addEventListener("click",removeParent)
}
for(var i=0; i<li.length;i++){
  li[i].addEventListener("click",itemDone)
}
