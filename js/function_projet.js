const projetsDisplay = document.querySelector('#projets');
let projets = [...projetsData];
let index = -1;

//Fonction pour monter
function topProjet() {
     if (index == -1 || index == 0) {
          index = projets.length;
     }

     index--;

     afficheProjet(index)
}

//Fonction pour descrendre
function bottomProjet() {
     if (index == projets.length - 1) {
          index = -1;
     } else {

     }

     index++;

     afficheProjet(index);
}

//Fonction pour afficher le contenu grâce aux index
function afficheProjet(index) {

     let existingContent = projetsDisplay.querySelector('.projet');
     let existingContentImg = projetsDisplay.querySelector('.imgIllProjet');

     if (existingContent && existingContentImg) {
          existingContent.querySelector('.projetTitle').textContent = projets[index].title;
          existingContent.querySelector('.projetDescription').textContent = projets[index].description;
          existingContent.querySelector('.projetLink').href = projets[index].page;
          existingContentImg.src = projets[index].image;
     } else {
          let contentProjet =
               `<div class="projet">
                <div class="projetInfo">
                    <span class="projetTitle">${projets[index].title}</span>
                    <p class="projetDescription">${projets[index].description}</p>
                </div>
                <a class="projetLink" href="${projets[index].page}">Voir le projet
                    <svg width="18" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15 11L10.2 6.41667M15 11L10.2 15.5833M15 11H3" stroke="#344E47" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </a>
            </div>
            <img class="imgIllProjet" src="${projets[index].image}" alt="image d'illustration">`;

          projetsDisplay.querySelector('.projetsNavigation').insertAdjacentHTML('beforebegin', contentProjet);
     }
}