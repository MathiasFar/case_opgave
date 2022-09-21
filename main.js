const parallax = document.getElementsById("imgDiv1");

window.addEventListener("scroll", function() {
    let offset = window.pageYOffset;
    parallax.style.backgroundPositionY = offset * 1 + "px";
})