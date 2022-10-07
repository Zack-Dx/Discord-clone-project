(function () {
  var scrollBtn = document.getElementById("btnScrollToTop");
  if (window.pageYOffset > 400) {
    scrollBtn.style.display = "block";
  } else if (window.pageYOffset <= 400) {
    scrollBtn.style.display = "none";
  }
})();

document.addEventListener(
  "scroll",
  (event) => {
    var scrollBtn = document.getElementById("btnScrollToTop");
    if (window.pageYOffset > 400) {
      scrollBtn.style.display = "block";
    } else if (window.pageYOffset <= 400) {
      scrollBtn.style.display = "none";
    }
  },
  { passive: true }
);

const btnScrollToTop = document.getElementById("btnScrollToTop");
btnScrollToTop.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

let Name = "Windows";
if (navigator.userAgent.indexOf("Win") != -1) Name = "Windows";
if (navigator.userAgent.indexOf("Mac") != -1) Name = "Mac";
if (navigator.userAgent.indexOf("X11") != -1) Name = "UNIX";
if (navigator.userAgent.indexOf("Linux") != -1) Name = "Linux";
if (navigator.userAgent.indexOf("Android") != -1) Name = "Android";
document.querySelectorAll(".download-button").forEach((btn) => {
  btn.innerHTML = `<svg width="24" height="20" viewBox="0 0 24 24" class="icon-2tQ9Jt"><g fill="currentColor"><path d="M17.707 10.708L16.293 9.29398L13 12.587V2.00098H11V12.587L7.70697 9.29398L6.29297 10.708L12 16.415L17.707 10.708Z"></path><path d="M18 18.001V20.001H6V18.001H4V20.001C4 21.103 4.897 22.001 6 22.001H18C19.104 22.001 20 21.103 20 20.001V18.001H18Z"></path></g></svg> Download for ${Name}`;
});

function switchMode() {
  let moon = document.getElementById("moon");
  let hangOut = document.getElementById("hang-out");
  if (moon.className == "moon") {
    moon.className = "sun";
    document.body.style.backgroundColor = "#141D26";
    document.body.style.color = "#fff";
    hangOut.style.backgroundColor = "#141D26";
  } else {
    moon.className = "moon";
    document.body.style.backgroundColor = "#fff";
    document.body.style.color = "#000";
    hangOut.style.backgroundColor = "#f6f6f6";
  }
}


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

const sections = document.querySelectorAll('.container_animate');

function sectionObserverCallback(entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;

    entry.target.classList.remove('section--hidden');
    observer.unobserve(entry.target);
  });
}

const sectionObserver = new IntersectionObserver(sectionObserverCallback, {
  root: null,
  threshold: 0.15,
});

sections.forEach(section => {
  section.classList.add('section--hidden');
  sectionObserver.observe(section);
});