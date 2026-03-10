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


let counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

let target = +counter.getAttribute("data-target");

let count = 0;

let speed = target / 100;

let updateCounter = () => {

count += speed;

if(count < target){
counter.innerText = Math.ceil(count);
setTimeout(updateCounter,20);
}
else{
counter.innerText = target;
}

}

updateCounter();

});


// MOBILE MENU

let menu = document.getElementById("menuToggle")
let nav = document.getElementById("navMenu")

menu.onclick = function(){
nav.classList.toggle("active")
}


/* TESTIMONIAL SLIDER */

/* TESTIMONIAL SLIDER */

let tSlides = document.querySelectorAll(".testimonial");
let tDots = document.querySelectorAll(".t-dot");
let tNext = document.querySelector(".t-next");
let tPrev = document.querySelector(".t-prev");

let tIndex = 0;

function showTestimonial(index){

tSlides.forEach(function(slide){
slide.classList.remove("active");
});

tDots.forEach(function(dot){
dot.classList.remove("active");
});

tSlides[index].classList.add("active");
tDots[index].classList.add("active");

}

/* NEXT BUTTON */

tNext.onclick = function(){

tIndex++;

if(tIndex >= tSlides.length){
tIndex = 0;
}

showTestimonial(tIndex);

}

/* PREVIOUS BUTTON */

tPrev.onclick = function(){

tIndex--;

if(tIndex < 0){
tIndex = tSlides.length - 1;
}

showTestimonial(tIndex);

}

/* DOT CLICK */

tDots.forEach(function(dot, i){

dot.onclick = function(){

tIndex = i;

showTestimonial(tIndex);

}

});

/* AUTO SLIDE */

setInterval(function(){

tIndex++;

if(tIndex >= tSlides.length){
tIndex = 0;
}

showTestimonial(tIndex);

},5000);
