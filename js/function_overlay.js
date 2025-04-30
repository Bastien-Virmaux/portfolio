/**
 * The function universalView is used to create a modal overlay effect for displaying content.
 * It takes three parameters: buttonSelector, contentSelector, and dataAttribute.
 * @param {HTMLButtonElement} buttonSelector 
 * @param {HTMLDivElement} contentSelector 
 * @param {HTMLDataElement} dataAttribute 
 */
function universalView(buttonSelector, contentSelector, dataAttribute) {
     const buttons = document.querySelectorAll(buttonSelector);
     const contents = document.querySelectorAll(contentSelector);
     const body = document.querySelector('body');
     const header = document.querySelector("#header");

     buttons.forEach(button => {
          button.addEventListener('click', () => {
               header.classList.add('headerOverlay'); // Cache la navbar
               
               let index = button.getAttribute(dataAttribute);
               contents[index].classList.add('overlayAnim');

               contents.forEach((content, i) => {
                    if (i != index) {
                         content.classList.remove('overlayAnim');
                    }
               });

               body.style.overflow = 'hidden';
          });
     });
}

/**
 * The function closeUniversalView is used to close the modal overlay when a close button is clicked.
 * It takes two parameters: buttonSelector and contentSelector.
 * @param {HTMLButtonElement} buttonSelector
 * @param {HTMLDivElement} contentSelector 
 */
function closeUniversalView(buttonSelector, contentSelector) {
     const closeButtons = document.querySelectorAll(buttonSelector);
     const contents = document.querySelectorAll(contentSelector);
     const body = document.querySelector('body');
     const header = document.querySelector("#header");

     closeButtons.forEach(button => {
          button.addEventListener('click', () => {
               header.classList.remove('headerOverlay'); // Affiche la navbar

               contents.forEach(content => {
                    content.classList.remove('overlayAnim');
               });

               body.style.overflow = 'auto';
          });
     });
}

// Appel des fonctions pour les formations
universalView('#btnFormation', '#overlayInfoForm', 'data-formation');
closeUniversalView('#btnCloseOverlay', '#overlayInfoForm');

// Appel des fonctions pour les expériences professionnelles
universalView('#expPro', '#overlayInfoExp', 'data-expPro');
closeUniversalView('#btnCloseOverlay', '#overlayInfoExp');