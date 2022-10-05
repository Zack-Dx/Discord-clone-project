const btnScrollToTop = document.getElementById("btnScrollToTop");
btnScrollToTop.addEventListener("click", function(){
    window.scrollTo({
        top: 0, 
        left: 0,
        behavior: "smooth"
    });
});