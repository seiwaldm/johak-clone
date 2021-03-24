window.addEventListener("scroll", navbar);
document.addEventListener("click", forward);

function forward() {
  window.open("https://www.johak.at", "_self");
}
function navbar() {
  let header = document.querySelector(".menu-header-scroll");

  if (window.pageYOffset > 1000) {
    header.style.top = "0px";
  } else {
    header.style.top = "-80px";
  }
}
