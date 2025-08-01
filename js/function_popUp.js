const btnPopUp = document.querySelector('#btnPopUp');
const popUpOverlay = document.querySelector('#popUpOverlay');
const body = document.querySelector('body');

// Vérifie si la pop-up a déjà été vue
if (!localStorage.getItem('popUpSeen')) {
    popUpOverlay.style.display = 'flex';
    body.style.overflow = 'hidden';
} else {
    popUpOverlay.style.display = 'none';
    body.style.overflow = 'visible';
}

btnPopUp.addEventListener('click', () => {
    popUpOverlay.style.display = 'none';
    body.style.overflow = 'visible';
    localStorage.setItem('popUpSeen', 'true'); // Marque la pop-up comme vue
});
