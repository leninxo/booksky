//selecting popup box popup overlay button
var popupoverlay = document.querySelector(".popup-overlay")
var popupbox=document.querySelector(".popup-box")
var addpopupbutton = document.getElementById("add-popup-button")

addpopupbutton.addEventListener("click",function(){
    popupoverlay.style.display="block"
    popupbox.style.display="block"
})

//select cancel button
var cancelpopup = document.getElementById("cancel-popup")

   cancelpopup.addEventListener("click",function(event){
    event.preventDefault()

    popupoverlay.style.display="none"
    popupbox.style.display="none"


   })

   //select container,add-book,book-title-input,book-author-input,book-description-input

   var container = document.querySelector(".container")
   var addbook = document.getElementById("add-book")
   var booktitleinput= document.getElementById("book-title-input")
   var bookauthorinput= document.getElementById("book-author-input")
   var bookdescriptioninput= document.getElementById("book-description-input")

   addbook.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","book-cointainer")
    div.innerHTML=`<h1>${booktitleinput.value}</h1>`
    container.append(div)
   })




