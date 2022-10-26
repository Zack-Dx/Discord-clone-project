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

let Name = "Unknown OS";
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
});

close.addEventListener('click',function(e){
  menu.classList.remove('show');
  hidden.style.display = 'none';
});

const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
  const select = dropdown.querySelector('.select');
  const caret = dropdown.querySelector('.caret');
  const menu = dropdown.querySelector('.menu');
  const options = dropdown.querySelectorAll('.menu li');
  const selected = dropdown.querySelector('.selected');
  console.log(options);
  select.addEventListener('click', () => {
    select.classList.toggle('select-clicked');
    caret.classList.toggle('caret-rotate');
    menu.classList.toggle('menu-open');
  });

  options.forEach(option => {
    option.addEventListener('click', () => {
      selected.innerHTML = option.innerHTML;
      select.classList.remove('select-clicked');
      caret.classList.remove('caret-rotate');
      menu.classList.remove('menu-open');

      options.forEach(option => {
        option.classList.remove('active');
      });

      option.classList.add('active');
    });
  });
});



// function download(x) {
//   if(x === "Windows"){
//     window.open("https://discord.com/api/downloads/distributions/app/installers/latest?channel=stable&platform=win&arch=x86");
//   }
//   else if(x === "Linux"){
//     // Tar.gz file is also available, but for that the UI should be updated too asking the uer if they want deb or tar.gz file.
//     window.open("https://discord.com/api/download?platform=linux&format=deb");
//   }
//   else if(x === "Mac"){
//     window.open("https://discord.com/api/download?platform=osx");
//   }
//   else if(x === "Android"){
//     window.open("https://play.google.com/store/apps/details?id=com.discord&fingerprint=1027469448279502868.2VFuFt_ihJGrFuSoSXuvQSQyBwc&attemptId=be670576-d546-4f16-9fe4-e99ede451454")
//   }
  
// }

// function setDevice() {
//   console.log(Name);
//   document.querySelectorAll("deviceName").forEach((deviceName) => {
//     deviceName.innerHTML = Name;
//   });
// }

// setDevice();
