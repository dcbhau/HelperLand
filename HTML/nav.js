window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("logo").style.height = "54px";
    document.getElementById("logo").style.width = "73px";
    document.getElementById("scroll").style.backgroundColor =
      "rgba(82,82,82,0.8)";
    document.getElementById("navtog").style.marginTop = "13px";
    document.getElementById("scroll").style.alignItems = "flex-start";
    document.getElementById("navbarNav").style.paddingTop = "0.7rem";
    document.getElementsByClassName("top-nav")[0].style.display = "inline";
    document.getElementsByTagName("nav")[0].style.padding = "0 1rem"
  } else {
    document.getElementById("logo").style.height = "130px";
    document.getElementById("logo").style.width = "175px";
    document.getElementById("scroll").style.backgroundColor = "transparent";
    document.getElementById("navtog").style.marginTop = "30px";
    document.getElementById("scroll").style.alignItems = "flex-start";
    document.getElementById("navbarNav").style.paddingTop = "35px";
    document.getElementsByClassName("top-nav")[0].style.display = "none";
    document.getElementsByTagName("nav")[0].style.padding = "0.5rem 1rem"
  }
}
