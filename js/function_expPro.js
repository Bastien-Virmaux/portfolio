// const btnLeft = document.querySelector('#expProBtnLeft');
// const btnRight = document.querySelector('#expProBtnRight');
// const expPro = document.querySelector('#expPros');


// //fonction pour faire slider le containeur (expPro) vers la gauche de 33vh quand on clique sur la flèche gauche
// btnLeft.addEventListener('click', () => {
//      expPro.style.transform = 'translateX(32vh)';
// });

// //fonction pour faire slider le containeur (expPro) vers la gauche de 33vh quand on clique sur la flèche gauche
// btnRight.addEventListener('click', () => {
//      expPro.style.transform = 'translateX(-32vh)';
// });

const swiper = new Swiper('.slider-wrapper', {
     loop: true,
     grabCursor: true,
     spaceBetween: 30,
     // Pagination bullets
     pagination: {
          el: '.swiper-pagination',
          clickable: true,
          dynamicBullets: true
     },
     // Navigation arrows
     navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
     },
     // Responsive breakpoints
     breakpoints: {
          0: {
               slidesPerView: 1
          },
          768: {
               slidesPerView: 2
          },
          1024: {
               slidesPerView: 3
          }
     }
});