/* ===COMPETENCES NAVIGATION=== */
const btnCompHum = document.querySelector("#compNavBtnHum");
const btnCompTech = document.querySelector("#compNavBtnTech");
const compNavBtnRect = document.querySelector("#compNavBtnRect");

compNavBtnRect.style.transform = 'translateX(-92px)';
btnCompHum.querySelector('.compNavBtnText').style.color = '#F5F8F6';

btnCompHum.addEventListener('click', () => {
     compNavBtnRect.style.transform = 'translateX(-92px)';
     document.querySelectorAll('.compNavBtnText').forEach(btn => {
          btn.style.color = '#344E47';
     });
     btnCompHum.querySelector('.compNavBtnText').style.color = '#F5F8F6';
});

btnCompTech.addEventListener('click', () => {
     compNavBtnRect.style.transform = 'translateX(92px)';
     document.querySelectorAll('.compNavBtnText').forEach(btn => {
          btn.style.color = '#344E47';
     });
     btnCompTech.querySelector('.compNavBtnText').style.color = '#F5F8F6';
});
/* ===FIN COMPETENCES NAVIGATION=== */

//==============================================================================
//==============================================================================
//==============================================================================

/* ===COMPETENCES TECHNIQUES=== */

let comps = [...compsData];
const compNavList = document.querySelector("#compNavList");
const firstElement = document.querySelector(".elementsCompNav");
const title = document.querySelector('#titleCompetence'); //selection du titre
const compContent = document.querySelector("#comps");
const btnComp = document.querySelectorAll("#compButton");
const contentComp = document.querySelectorAll("#compContent");
const jaugeText = document.querySelector("#jaugeText");
const jauge = document.querySelector("#jauge");

/* ==GENERE BUTTON TECHNIQUES== */
for (let i = 0; i < comps.length; i++) {
     const newButton = document.createElement('button');

     if (i == 0) {
          newButton.className = 'compNavButton btnJS active';
     } else {
          newButton.className = 'compNavButton btnJS';
     }
     newButton.setAttribute('data-comp', comps[i].id);
     newButton.setAttribute('value', comps[i].title);
     newButton.textContent = comps[i].title;

     compNavList.append(newButton)
}
//pour générer la problèmatique d'ordre des élements
compNavList.append(firstElement);
/* ==FIN GENERE BUTTON TECHNIQUES== */

/* ==CHANGER TITRE TECHNIQUES== */
document.querySelectorAll('.btnJS').forEach(element => {
     element.addEventListener('click', () => { //écoute du clique
          if (!element.classList.contains('active')) { //si l'élèment selectionner ne contient pas la classe ACTIVE
               element.classList.add('active'); //ajout de la classe active
               title.innerHTML = element.value //modification du titre de la partie RESULT
          }
          index = element.getAttribute('data-comp'); //numéro de l'attribue DATA-COMP définie dans le fichier HTML

          document.querySelectorAll('.btnJS').forEach(btn => { //boucle pour traiter l'ensemble des boutons disponible
               if (btn.getAttribute('data-comp') != index) { //si la valeur de l'attribue DATA-COMP du bouton selectionner avec l'index du FOR est différent de la variable index
                    btn.classList.remove('active'); //tu enleve la classe ACTIVE 
               }
          });
     });
});
/* ==FIN CHANGER TITRE TECHNIQUES== */

/* ==CHANGER CONTENU TECHNIQUES== */
function updateCompContent(index) {
     compContent.innerHTML = '';
     let content = ``;
     let errorContent = ``;

     if (comps[index].compétences.length != 0) {
          for (let k = 0; k < comps[index].compétences.length; k++) {
               let content =
                    `<div class="comp" id="comp">
                         <div class="compContainerTitle">
                              <p class="compTitle">${comps[index].compétences[k].titleCompétence}</p>
                              <button class="compButton" data-btn="${comps[index].compétences[k].id}">
                                   <svg width="32" height="32" viewBox="0 0 24 24" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path d="M15 11L12 14L9 11" stroke="#344E47" stroke-width="2"
                                             stroke-linecap="round" stroke-linejoin="round" />
                                   </svg>
                              </button>
                         </div>
                         </div> 
                         <div class="compContent" data-content="${comps[index].compétences[k].id}">
                              ${comps[index].compétences[k].description}
                         </div>`;
               compContent.innerHTML += content;
          }
     } else {
          let errorContent =
               ` <div class="alert">
                         <div class="headerAlert error">
                              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                   <path d="M13 16H12V12H11M12 8H12.01M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                              </svg>

                              <p class="titleAlert">Aucune compétence disponible pour ${comps[index].title}</p>
                         </div>

                         <p class="message">
                              La compétence générale <strong>${comps[index].title}</strong> sera étudiée à partir de la deuxième année du BUT Réseaux et Télécommunications.
                         </p>
               </div>`;
          compContent.innerHTML += errorContent;
     }
}

document.querySelectorAll('.btnJS').forEach(element => {
     element.addEventListener('click', () => {
          let index = element.getAttribute('data-comp') - 1;
          updateCompContent(index);
     });
});

// Execute on page load
document.addEventListener('DOMContentLoaded', () => {
     let activeElement = document.querySelector('.btnJS.active');
     if (activeElement) {
          let index = activeElement.getAttribute('data-comp') - 1;
          updateCompContent(index);
     }
});
/* ==FIN CHANGER CONTENU TECHNIQUES== */

/* ==AFFICHER LES DETAILS== */
document.addEventListener('click', (event) => {
     if (event.target.closest('.compButton')) {
          let btnEl = event.target.closest('.compButton');
          let btnDataBtn = btnEl.getAttribute("data-btn");

          document.querySelectorAll('.compContent').forEach(contentEl => {
               let contentDataContent = contentEl.getAttribute("data-content");

               if (contentDataContent === btnDataBtn) {
                    contentEl.classList.toggle("show");
               } else {
                    contentEl.classList.remove("show");
               }
          });

          this.index == undefined ? this.index = 1 : this.index;
          valueJauge = comps[this.index - 1].compétences[btnDataBtn - 1].jauge;
          document.querySelector('.noteJauge').style.display = 'block';
          jaugeText.innerText = valueJauge + "%";
          jauge.style.width = valueJauge + "%"
     }
});
/* ==FIN AFFICHER LES DETAILS== */

/* ===FIN CHANGER CONTENU TECHNIQUES== */

//==============================================================================
//==============================================================================
//==============================================================================

/* ===AFFICHAGE COMPETENCE=== */

const ctQualite = document.querySelector('#ctQualite');
const ctTechnique = document.querySelector('#ctTechnique');
const btncompNavBtnHum = document.querySelector('#compNavBtnHum');
const btncompNavBtnTech = document.querySelector('#compNavBtnTech');

btncompNavBtnHum.addEventListener('click', () => {
     ctQualite.style.display = 'grid';
     ctTechnique.style.display = 'none';
});

btncompNavBtnTech.addEventListener('click', () => {
     ctQualite.style.display = 'none';
     ctTechnique.style.display = 'block';
});

/* ==FIN AFFICHAGE COMPETENCE== */