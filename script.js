'use strict';
  const h4 = document.querySelector('h4');
  const alertH4 = function(e) {
  alert('Welcome! Hope You are doing well.😊');
  }
  h4.addEventListener('mouseenter', alertH4 );

  setTimeout(() => h4.removeEventListener('mouseenter', alertH4 ),3000);
 var ProductImg = document.getElementById("productimg");
 var SmallImg = document.getElementsByClassName("smallimg");
 SmallImg[0].onclick = function(){
     ProductImg.src = SmallImg[0].src;
 }
 SmallImg[1].onclick = function(){
     ProductImg.src = SmallImg[1].src;
 }
 SmallImg[2].onclick = function(){
     ProductImg.src = SmallImg[2].src;
 }
 SmallImg[3].onclick = function(){
     ProductImg.src = SmallImg[3].src;
 }
 SmallImg[4].onclick = function(){
  ProductImg.src = SmallImg[4].src;
 }
const allSections = document.querySelectorAll('.section');
console.log(allSections);
const revealSection = function (entries, observer) {
    const [entry] = entries;
    console.log(entry);   
    if (!entry.isIntersecting) return;   
    entry.target.classList.remove('section--hidden');
    }   
    const sectionObserver = new IntersectionObserver
    (revealSection, {
      root: null,
      threshold: 0.,
    });
    allSections.forEach(function (section) {
      sectionObserver.observe(section);
      section.classList.add('section--hidden');
    })
 
