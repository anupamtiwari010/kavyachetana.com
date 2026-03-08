let slides = document.querySelectorAll(".slide")
let dots = document.querySelectorAll(".dot")
let next = document.querySelector(".next")
let prev = document.querySelector(".prev")

let index = 0

function showSlide(i){

slides.forEach(slide => slide.classList.remove("active"))
dots.forEach(dot => dot.classList.remove("active"))

slides[i].classList.add("active")
dots[i].classList.add("active")

}

next.onclick = function(){
index++
if(index >= slides.length){
index = 0
}
showSlide(index)
}

prev.onclick = function(){
index--
if(index < 0){
index = slides.length - 1
}
showSlide(index)
}

dots.forEach((dot, i)=>{
dot.onclick = function(){
index = i
showSlide(index)
}
})

/* Auto Slide */

setInterval(()=>{
index++
if(index >= slides.length){
index = 0
}
showSlide(index)
},4000)

// MOBILE MENU

let menu = document.getElementById("menuToggle")
let nav = document.getElementById("navMenu")

menu.onclick = function(){
nav.classList.toggle("active")
}