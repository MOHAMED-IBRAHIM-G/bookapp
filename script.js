function buttondel(event){
    event.target.parentElement.remove();
}
document.querySelector(".btnadd").addEventListener("click",function(){
let add=document.querySelector(".newbg");
add.style.display="block"
})

function cancel()
{
    let add=document.querySelector(".newbg");
    add.style.display="none"
}
function addnew(){

    let container=document.querySelector(".container");
    let bookname=document.querySelector(".bkname").value;
    let author=document.querySelector(".atname").value;
    let des=document.querySelector(".area").value;
    let div=document.createElement("div");
    div.setAttribute("class","book-container");
    div.innerHTML=
    `<h2>${bookname}</h2>
    <h5>${author}</h5>
    <p >${des}</p>
    <button class="bookdelete" onclick="buttondel(event)">Delete</button>`
    container.append(div);
    
}