header = document.querySelector("#header");

/*
Show or not the shadow on the header
*/
window.addEventListener("scroll", () => {
     let scroll = this.scrollY;
     if (scroll > 10) {
          header.classList.add("shadow");
     } else {
          header.classList.remove("shadow");
     }
})