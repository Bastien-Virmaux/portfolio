//compétences techniques
const compsData = [
     //compétence réseaux
     {
          "title": "Réseaux",
          "id": 1,
          "compétences": [
               //ss-comp 1
               {
                    "titleCompétence": "Configurer un réseau informatique",
                    "description": `<p class="paraCompTechnique">
                              J'ai développé cette compétence au cours des nombreux TD et TP dans un premier temps sur le logiciel Cisco Packet Tracer puis dans un second temps, sur des vraies machines. 
                        </p><br>
                         <p class="paraCompTechnique">
                              Au cours des TD et TP, j'ai pratiqué d'abord sur le logiciel
                              Cisco Packet Tracer afin de configurer plusieurs machines
                              et services (PC, Switch, Routeur, Serveur) en apprenant
                              a adressé correctement un réseau, utilisé plusieurs
                              protocole de routages, tester les connectivités entre
                              tous les appareils et savoir comment tous les interconnecter afin
                              qu'ils communiquent.<br><br>
                              Ensuite j'ai pu mettre en pratique en faisant l'installation et la configuration des routeurs Cisco, des switch Cisco, des point d'accès,
                              configurer les PC sous Windows et Linux afin qu'ils soient dans le même réseau et configurer des VLAN.<br><br>
                              Or mis ceci, j'ai beaucoup appris sur le fonctionnement du matériel
                              au cœur des réseaux locaux tels que les routeurs ou les switchs mais aussi des choses plus
                              théoriques comme le modéle OSI ou TCP/IP.
                         </p>`,
                    "jauge": 85,
                    "tags": [
                         "Réseaux",
                         "Configuration",
                         "Cisco"
                    ]
               },
               //ss-comp 2
               {
                    "titleCompétence": "Installer des machines virtuelles",
                    "description": `<p class="paraCompTechnique">
                              Lors des nombreux TD et TP, j'ai développé des compétences pour installer des machines
                              virtuelles.
                         </p><br>
                         <p class="paraCompTechnique">
                              Au cours des nombreuses séances de TP, j'ai effectué la configuration, l'installation et la gestion de machines virtuelles
                              sur VMware et VirtualBox. Aussi, j'ai découvert comment sauvegarder une VM, comment la cloner, les différents types de
                              connexions réseau possibles (NAT, PONT, Réseau Privé, Pas de connexion). <br><br>
                              J'ai aussi découvert ESX qui permet de faire la gestion de plusieurs VM via une interface graphique sur un site internet.
                         </p>`,
                    "jauge": 95,
                    "tags": [
                         "VMware",
                         "VirtualBox",
                         "Linux",
                         "Windows"
                    ]
               },
               //ss-comp 3
               {
                    "titleCompétence": "Administration Réseau",
                    "description": `<p class="paraCompTechnique">
                              Lors des nombreux TD et TP, j'ai développé des compétences dans l'administration réseau.
                         </p><br>
                         <p class="paraCompTechnique">
                             Dans un premier temps, j'ai découvert comment créer, modifier, supprimer des utilisateurs et des groupes sous Windows et Linux. <br>
                              Dans un second temps, j'ai découvert comment faire des sauvegardes de données et planifier des tâches via Rsync et Cron pour Linux et Syncback pour Windows. Puis j'ai
                              appris à utiliser Windows Serveur afin de configurer Active Directory et un DNS afin de mettre en place un domaine, des OU, des utilisateurs et les administrer en mettant en place des
                              Stratégie de Groupe et des contraintes sur les comptes. Enfin j'ai appris à utiliser Docker afin de rechercher une image, l'installer et la démarrer et faire les configurations
                              concernant le réseau du conteneur. <br><br>
                              Au-delà de ceci, j'ai pu découvrir le système de stockage RAID et les contraintes de sauvegarde (lieu, matériel).
                         </p>`,
                    "jauge": 95,
                    "tags": [
                         "Adminstration",
                         "Docker",
                         "Active Directory",
                         "DNS",
                         "Utilisateurs",
                         "Groupes",
                         "Sauvegarde et Stockage"
                    ]
               },
               //ss-comp 4
               {
                    "titleCompétence": "Service DHCP",
                    "description": `<p class="paraCompTechnique">
                              Lors des TD et TP, j'ai développé des compétences dans la configuration du service DHCP.
                         </p><br>
                         <p class="paraCompTechnique">
                              lors des TD et TP en service-réseau, j'ai pu installer et configurer un service DHCP (isc-dhcp-server) sur un serveur Linux afin qu'il
                              attribue une adresse IP, mais aussi d'autres informations, comme la passerelle à des machines Windows et Linux.<br>
                         </p>`,
                    "jauge": 90,
                    "tags": [
                         "DHCP",
                         "ISC-DHCP-SERVER",
                         "Configuration",
                         "Linux",
                         "Windows",
                         "IP"
                    ]
               },
               //ss-comp 5
               {
                    "titleCompétence": "Service DNS",
                    "description": `<p class="paraCompTechnique">
                              Lors des TD et TP, j'ai développé des compétences dans la configuration du service DNS.
                         </p><br>
                         <p class="paraCompTechnique">
                              Lors des TD et TP en service réseau, j'ai pu mettre en place un service DNS sur des serveurs sur le logiciel cisco packet
                              tracer sur deux réseaux différents afin de voir comment cela fonctionne. J'ai aussi configuré les serveurs DNS afin que les deux réseaux
                              sachent comment traiter les noms d'un autre réseau.<br>
                         </p>`,
                    "jauge": 90,
                    "tags": [
                         "DHCP",
                         "ISC-DHCP-SERVER",
                         "Configuration",
                         "Linux",
                         "Windows",
                         "IP"
                    ]
               }
          ]
     },
     //compétence programmation
     {
          "title": "Programmation",
          "id": 2,
          "compétences": [
               //ss-comp 1
               {
                    "titleCompétence": "Utilisation de commande et script Linux",
                    "description": `<p class="paraCompTechnique">
                              Au cours de nombreux TD et TP, j'ai développé des compétences
                              dans les commandes et script Linux.
                         </p><br>
                         <p class="paraCompTechnique">
                              Effectivement, au cours de ses nombreux TD et TP j'ai plus pratiquée sur le
                              terminal des commandes Linux pour lister, modifier, créer ou supprimer des fichiers
                              Par la suite, j'ai appris à faire des scripts BASH pour découvrir une nouvelle façon
                              d'utiliser les commandes pour par exemple faire des petits programmes automatisés.<br><br>
                              Ces TD et TP mon aussi permis d'accpérir des connaissances sur le fonctionnement
                              des systèmes d'exploitations et le traitement des données.
                         </p>`,
                    "jauge": 80,
                    "tags": [
                         "Linux",
                         "Commandes",
                         "Systèmes d'exploitations",
                         "Traitement des données",
                         "BASH",
                         "SHELL"
                    ]
               },
               //ss-comp 2
               {
                    "titleCompétence": "Programmation en python",
                    "description": `<p class="paraCompTechnique">
                              Lors des nombreux TD et TP, j'ai développé des compétences dans la programmation Python.
                         </p><br>
                         <p class="paraCompTechnique">
                              Au cours des nombreuses séances de TD et TP, j'ai effectué une série
                              d'exercices sur les fondamentaux de python (variables, boucles, conditions, fonctions,
                              module, liste)
                              et j'ai aussi appris à respecter les règles de programmation afin que les programmes
                              reste lisible pour tout autre développeur.<br><br>
                              Aussi, j'ai découvert la Programmation Orienté Objet (POO).
                         </p>`,
                    "jauge": 80,
                    "tags": [
                         "Programmation",
                         "python"
                    ]
               },
               //ss-comp 3
               {
                    "titleCompétence": "Programmation Web",
                    "description": `<p class="paraCompTechnique">
                              Lors de ma veille technologique, de ma curiosité, mais aussi dans le cadre de nos projets
                              de STI2D, j'ai découvert la programmation WEB.
                         </p><br>
                         <p class="paraCompTechnique">
                              Effectivement, j'ai commencé à découvrir la programmation et le fonctionnement d'internet
                              en seconde avec <strong>Grafikart.fr</strong> qui m'a suivi tout le long de mon
                              apprentissage sur les langages : HTML, CSS, JS et que je continue à suivre pour voir les
                              dernière nouveauté et apprendre de nouvelles choses. <br><br>
                              En lien avec la programmation web, j'ai appris à utiliser l'outil <strong>Figma</strong>
                              qui permet de faire des designs rapides afin d'avoir une idée du rendu, une fois en
                              ligne, afin de proposer des sites internet jolis, accessibles et efficaces.
                         </p>`,
                    "jauge": 95,
                    "tags": [
                         "WEB",
                         "HTML",
                         "CSS",
                         "JS",
                         "DESIGN",
                         "FIGMA"
                    ]
               },
               //ss-comp 4
               {
                    "titleCompétence": "Programmation PHP",
                    "description": `<p class="paraCompTechnique">
                              Grâce à ma curiosité, mais aussi grâce aux TP et TD en programmation, j'ai acquis de l'expérience avec le langage PHP.
                         </p><br>
                         <p class="paraCompTechnique">
                              Grâce à <strong>Grafikart.fr</strong> j'ai découvert les fondamentaux de PHP. Ensuite, en BUT, j'ai pu remettre en pratique les
                              base du langage (variables, boucles, conditions, fonctions, listes).<br><br>
                              Dans un second temps, j'ai découvert comment connecter une base de données à notre projet PHP afin de récupérer des données.
                         </p>`,
                    "jauge": 90,
                    "tags": [
                         "WEB",
                         "PHP",
                         "SQL",
                    ]
               },
               //ss-comp 5
               {
                    "titleCompétence": "Base de Données",
                    "description": `<p class="paraCompTechnique">
                              Lors de nos TD et TP, j'ai pu découvrir les bases de données.
                         </p><br>
                         <p class="paraCompTechnique">
                              Lors de nos TD et TP, j'ai pu créer une base de données, insérer des données et faire des requêtes SQL afin de sélectionner et afficher les données demandées. <br>
                              J'ai donc pu découvrir mySQL mais aussi noSQL avec mongoDB.
                         </p>`,
                    "jauge": 65,
                    "tags": [
                         "SQL",
                         "MySQL"
                    ]
               }
          ]
     },
     //compétence télécommunications
     {
          "title": "Télécommunications",
          "id": 3,
          "compétences": [
               //ss-comp 1
               {
                    "titleCompétence": "Utilisation de GBF (Générateur de fonction)",
                    "description": `<p class="paraCompTechnique">Lors des TP de télécommunications, j'ai pu apprendre à 
                                        utiliser des GBF (Agilent et RIGOL).
                         </p><br>
                         <p class="paraCompTechnique">
                              J'ai pu apprendre à générer 1 ou plusieurs signal(aux) avec des amplitudes et des fréquences différentes. J'ai pu utiliser
                              plusieurs fonctions telles que le réglage de l'impédance, la modulation, sweep.
                         </p>`,
                    "jauge": 95,
                    "tags": [
                         "RIGOL",
                         "Agilent",
                         "Fréquence",
                         "Amplitude",
                         "Sweep",
                         "Modulation",
                         "Impédance"
                    ]
               },
               //ss-comp 2
               {
                    "titleCompétence": "Utilisation de l'oscilloscope",
                    "description": `<p class="paraCompTechnique">
                              Lors des TP de télécommunications j'ai pu apprendre à utiliser des oscilloscopes (Keysight et Agilent).
                         </p><br>
                         <p class="paraCompTechnique">
                              J'ai pu apprendre à observer 1 ou plusieurs signal(aux) simultanément pour en extraire des informations sur l'amplitude,
                              la fréquence, la durée à l'état haut.... Tout en sachant régler l'échelle horizontale et verticale. J'ai pu
                              apprendre à utiliser des fonctions telles que FFT pour observer le spectre d'un signal.
                         </p>`,
                    "jauge": 90,
                    "tags": [
                         "Keysight",
                         "Agilent",
                         "Oscilloscope",
                         "Fréquence",
                         "Amplitude",
                         "FFT"
                    ]
               },
               //ss-comp 3
               {
                    "titleCompétence": "Utilisation d'analyseur de spectre",
                    "description": `<p class="paraCompTechnique">
                              Lors des TP de télécommunications j'ai pu apprendre à utiliser des analyseurs de spectre (ANRITSU et SIGLENT).
                         </p><br>
                         <p class="paraCompTechnique">
                              J'ai pu apprendre à observer le spectre d'un signal sinusoïdal ou carré en sachant régler l'échelle horizontale
                              et verticale. J'ai aussi utilisé la démodulation afin de pouvoir écouter un signal, observer son spectre et déterminé
                              son enveloppe.
                         </p>`,
                    "jauge": 90,
                    "tags": [
                         "Anritsu",
                         "Siglent",
                         "Sinusoïdal",
                         "Carré",
                         "FFT"
                    ]
               }
          ]
     },
     //compétence téléphonie
     {
          "title": "Téléphonie",
          "id": 4,
          "compétences": [
               //ss-comp 1
               {
                    "titleCompétence": "Configuration des téléphones IP et des call server",
                    "description": `<p class="paraCompTechnique">
                              Lors des nombreuses séances de TD et TP en Téléphonie, j'ai acquis des compétences pour configurer des téléphones IP et des call server.
                         </p><br>
                         <p class="paraCompTechnique">
                             Au cours des TD et TP, j'ai pu dans un premier temps découvrir ce qu'était un IPBX puis dans un second temps, 
                              j'ai pu apprendre à installer et configurer des téléphones IP ("propriétaires"), des téléphones SIP (Linksys et Cisco) et des call sever UNIFY 
                              avec l'ensemble des options disponibles (messagerie, renvoi d'appel, gestion des utilisateurs, trunk SIP).<br>
                              De plus, j'ai appris à configurer et utiliser des softphone et un logiciel d'accès aux fonctions de communication unifiée (myPortal).
                         </p>`,
                    "jauge": 90,
                    "tags": [
                         "Téléphonie",
                         "SIP",
                         "IP",
                         "IPBX",
                         "myPortal"
                    ]
               }
          ]
     },
     //compétence sécurité
     {
          "title": "Sécurité",
          "id": 5,
          "compétences": [],
     },
     //compétence langues
     {
          "title": "Langues",
          "id": 6,
          "compétences": [
               //ss-comp 1
               {
                    "titleCompétence": "Anglais",
                    "description": `<p class="paraCompTechnique">
                              Niveau : B1 
                        </p><br>`,
                    "jauge": "70"
               }
          ]
     }
]

//projets
const projetsData = [
     //projet 1
     {
          "title": "SAE21 : Construire réseau",
          "description": "Projet développé en 2023 en BUT Réseaux et Télécommunications.",
          "image": "assets/images/image_illProjet5.jpg",
          "page": "projet/prj5.html",
     },
     //projet 2
     {
          "title": "SAE23 : Mettre en place une solution informatique pour l’entreprise",
          "description": "Projet développé en 2023 en BUT Réseaux et Télécommunications.",
          "image": "assets/images/image_illProjet6.jpg",
          "page": "projet/prj6.html",
     },
     //projet 3
     {
          "title": "SAE15 : Traitement de données",
          "description": "Projet développé en 2023 en BUT Réseaux et Télécommunications.",
          "image": "assets/images/image_illProjet3.jpg",
          "page": "projet/prj1.html",
     },
     //projet 4
     {
          "title": "SAE14 : Portfolio",
          "description": "Projet développé en 2023 en BUT Réseaux et Télécommunications.",
          "image": "assets/images/image_illProjet1.jpg",
          "page": "projet/prj2.html",
     },
     //projet 5
     {
          "title": "SAE11 : Se sensibiliser à l'hygiène informatique et à la cybersécurité",
          "description": "Projet développé en 2023 en BUT Réseaux et Télécommunications.",
          "image": "assets/images/image_illProjet2.jpg",
          "page": "projet/prj3.html",
     },
     //projet 6
     {
          "title": "Logement Étudiant",
          "description": "Projet développé en 2023 au Lycée en STI2D avec l'option : SIN.",
          "image": "assets/images/image_illProjet4.jpg",
          "page": "projet/prj4.html",
     },
];