let hamburger = document.querySelector('.hamburger');
let close = document.querySelector('.close');
let menu = document.querySelector('.menu');
let hidden = document.querySelector('.hidden');

hamburger.addEventListener('click',function(e){
  menu.classList.add('show');
  hidden.style.display = 'flex';
})

close.addEventListener('click',function(e){
  menu.classList.remove('show');
  hidden.style.display = 'none';
})