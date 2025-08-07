function fun(){
 var row=document.getElementsByTagName("input")[0].value;
 var col=document.getElementsByTagName("input")[1].value;

 let newElement =document.createElement(tag)
  newElement.innerText=data;

 let parent=document.getElementsByTagName("body")[0];
 parent.appendChild(newElement);
 console.log(newElement)
}

