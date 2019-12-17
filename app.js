const navSlide = () => {
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const navlinks= document.querySelectorAll('.nav-links li');
//toggle nav
burger.addEventListener('click' ,()=>{
nav.classList.toggle('nav-active');
//animate links
navlinks.forEach((link, index) =>{
    link.style.animation =`navLinkFade 0.5s ease forwards ${index/ 5 + 0.5}s`;
    console.log(index /5);
    });
//burger animation
burger.classList.toggle('toggle');



});

    
     

}
navSlide();

