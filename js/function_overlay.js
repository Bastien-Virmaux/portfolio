function universalView(buttonSelector, contentSelector, dataAttribute) {
     const buttons = document.querySelectorAll(buttonSelector);
     const contents = document.querySelectorAll(contentSelector);
     const body = document.querySelector('body');

     buttons.forEach(button => {
          button.addEventListener('click', () => {
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

function closeUniversalView(buttonSelector, contentSelector) {
     const closeButtons = document.querySelectorAll(buttonSelector);
     const contents = document.querySelectorAll(contentSelector);
     const body = document.querySelector('body');

     closeButtons.forEach(button => {
          button.addEventListener('click', () => {
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