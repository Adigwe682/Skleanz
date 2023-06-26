const btn = document.getElementById('hammenu')
const overlay = document.getElementById('mobile-overlay')
const menu = document.getElementById('mobile')
const close = document.getElementById('close')
const Home = document.getElementById('Home')
const About = document.getElementById('aboutus')
const contact = document.getElementById('Contact')
const blog = document.getElementById('blog')
btn.addEventListener('click', navToggle)
function navToggle() {
   overlay.classList.toggle('block')
   overlay.classList.toggle('hidden')
   menu.classList.toggle('block')
   menu.classList.toggle('hidden')
//    menuu.classList.toggle('hidden')
} 
close.addEventListener('click', Toggle)
function Toggle() {
    overlay.classList.toggle('hidden')
    overlay.classList.toggle('block')
    menu.classList.toggle('hidden')
    menu.classList.toggle('block')

 } 
 Home.addEventListener('click', Toggle)
function Toggle() {
    overlay.classList.toggle('hidden')
    overlay.classList.toggle('block')
    menu.classList.toggle('hidden')
    menu.classList.toggle('block')

 } 
 About.addEventListener('click', Toggle)
function Toggle() {
    overlay.classList.toggle('hidden')
    overlay.classList.toggle('block')
    menu.classList.toggle('hidden')
    menu.classList.toggle('block')

 } 
 contact.addEventListener('click', Toggle)
function Toggle() {
    overlay.classList.toggle('hidden')
    overlay.classList.toggle('block')
    menu.classList.toggle('hidden')
    menu.classList.toggle('block')

 } 
 blog.addEventListener('click', Toggle)
function Toggle() {
    overlay.classList.toggle('hidden')
    overlay.classList.toggle('block')
    menu.classList.toggle('hidden')
    menu.classList.toggle('block')

 } 