const btnLeft = document.querySelector('#expProBtnLeft');
const btnRight = document.querySelector('#expProBtnRight');
const expPro = document.querySelector('#expPros');

//fonction pour faire slider le containeur (expPro) vers la gauche de 33vh quand on clique sur la flèche gauche
btnLeft.addEventListener('click', () => {
     expPro.style.transform = 'translateX(32vh)';
});

//fonction pour faire slider le containeur (expPro) vers la gauche de 33vh quand on clique sur la flèche gauche
btnRight.addEventListener('click', () => {
     expPro.style.transform = 'translateX(-32vh)';
});