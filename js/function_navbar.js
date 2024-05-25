function navBar() {
     const header = document.querySelector("#header");

     window.addEventListener("scroll", () => {
          let scroll = this.scrollY;
          if (scroll > 10) {
               header.classList.add("shadow");
          } else {
               header.classList.remove("shadow");
          }
     })
}
