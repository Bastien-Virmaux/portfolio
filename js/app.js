navBar();

/* ===Fonction pour la partie compétences=== */
generateButtonComp();
changeTitleComp();

//chargement par défaut du contenu des compétences technique
const compContent = document.getElementById("comps");
const activeBtn = document.querySelector("#btn.active");

if (activeBtn) {
     let index = 0;
     compContent.innerHTML = '';

     for (let k = 0; k < comps[index].compétences.length; k++) {
          let content = ""
          if (comps[index].compétences[k].length == 0) {
               content = `<p>error, il n'y a rien !</p>`;
          } else {
               content =
                    `<div class="comp" id="comp">
                              <div class="compContainerTitle">
                                   <p class="compTitle">${comps[index].compétences[k].titleCompétence}</p>
                                   <button class="compButton" id="compButton" data-btn="${comps[k].id}">
                                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                             <path d="M15 11L12 14L9 11" stroke="#344E47" stroke-width="2"
                                                  stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                   </button>
                              </div>
                              </div> 
                              <div class="compContent" id="compContent" data-content="${comps[k].id}">
                                   ${comps[index].compétences[k].description}
                              </div>`;
          }
          compContent.innerHTML += content;
     }
     animationDropDownComp()
}
//FIN chargement par défaut du contenu des compétences technique

changeContentComp();
/* === FIN fonction pour la partie compétences=== */

/* ===Fonction pour la partie projet=== */


const btnTop = document.querySelector('#btnTop');
const btnBottom = document.querySelector('#btnBottom');


bottomProjet(); //initialisation d'un projet

btnTop.addEventListener('click', () => {
     topProjet();
});

btnBottom.addEventListener('click', () => {
     bottomProjet();
});


/* ===FIN fonction pour la partie projet=== */
