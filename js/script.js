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
document.querySelectorAll(".download-btn").forEach((btn) => {
  btn.innerHTML = `Download for ${Name}`;
});
