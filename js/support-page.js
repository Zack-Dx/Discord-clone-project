let hamburger = document.querySelector('.hamburger');
let arrowDown  = document.querySelector('.arrow-down');
let menu = document.querySelector('.menu');
let languagesMenu = document.querySelector('.languages');
let help__box = document.querySelector('.fixed');


showMenu(hamburger,menu);
showMenu(arrowDown,languagesMenu);
//show menu function
function showMenu(trigger,toShow){
    trigger.addEventListener('click',function(e){
        toShow.classList.toggle('show');
    })
};

document.addEventListener('click',function(e){
    if(e.target !== hamburger && e.target !== arrowDown){
        menu.classList.remove('show');
        languagesMenu.classList.remove('show')
    }
})

