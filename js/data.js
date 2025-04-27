//compétences techniques
const compsData = [
     //compétences réseaux
     {
          "title": "Réseaux",
          "id": 1,
          "compétences": [
               //ss-comp 1
               {
                    "titleCompétence": "Installation d'équipement réseau",
                    "id": 1,
                    "description": `<p class="paraCompTechnique">
                                     J'ai développé cette compétence au cours des nombreux TD, TP et projets. Dans un premier temps sur le logiciel Cisco Packet Tracer puis dans un second temps, sur de vrais équipements. 
                              </p><br>
                               <p class="paraCompTechnique">
                                     Au cours des TD et TP, j'ai pratiqué d'abord sur le logiciel
                                     Cisco Packet Tracer afin de configurer plusieurs équipements (Switch, Routeur) en apprenant
                                     à adresser correctement un réseau, utiliser plusieurs
                                     protocoles de routage (RIP, EIGRP, OSPF, BGP, MPLS), tester les connectivités entre
                                     tous les appareils et savoir comment tous les interconnecter afin
                                     qu'ils communiquent.<br><br>
                                     Ensuite, j'ai pu mettre en pratique en faisant l'installation et la configuration des routeurs Cisco, des switchs Cisco, des points d'accès.
                                     Dans ces configurations, j'ai pu créer des VLAN, mettre en place des protocoles de routage et des redirections.<br><br>
                                     Hormis ceci, j'ai beaucoup appris sur le fonctionnement du matériel
                                     au cœur des réseaux locaux tels que les routeurs ou les switchs mais aussi des choses plus
                                     théoriques comme le modèle OSI ou TCP/IP.
                               </p>`,
                    "jauge": 95,
                    "tags": [
                         "Réseaux",
                         "Configuration",
                         "Cisco"
                    ]
               },
               //ss-comp 2
               {
                    "titleCompétence": "Virtualisation",
                    "id": 2,
                    "description": `<p class="paraCompTechnique">
                                     Lors des nombreux TD, TP, projets et alternance, j'ai développé des compétences pour installer des machines
                                     virtuelles.
                               </p><br>
                               <p class="paraCompTechnique">
                                     Au cours des nombreuses séances de TP, j'ai effectué la configuration, l'installation et la gestion de machines virtuelles
                                     sur VMware et VirtualBox. Aussi, j'ai découvert comment sauvegarder une VM, comment la cloner, les différents types de
                                     connexions réseau possibles (NAT, PONT, Réseau Privé, Pas de connexion). <br><br>
                                     J'ai aussi découvert ESX qui permet de faire la gestion de plusieurs VM via une interface graphique sur un site internet.
                                     Aussi, j'ai pu apprendre à utiliser HYPER-V pour faire la gestion de VM sur un serveur Windows. 
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
                    "titleCompétence": "Service d'annuaire",
                    "id": 3,
                    "description": `<p class="paraCompTechnique">
                              Lors des nombreux TD, TP et Alternance, j'ai développé des compétences dans la mise en place d'Active Directory et sa gestion.
                         </p><br>
                         <p class="paraCompTechnique">
                             J'ai appris à installer et configurer Active Directory sur un serveur Windows. 
                              J'ai pu apprendre à créer des utilisateurs, des groupes, des OU, des GPO, des partages, des stratégies 
                              de mot de passe, des stratégies de sécurité, des stratégies de sauvegarde et de stockage. <br><br>
                         </p>`,
                    "jauge": 90,
                    "tags": [
                         "Administration",
                         "Active Directory",
                         "Utilisateurs",
                         "Groupes",
                         "Sauvegarde et Stockage"
                    ]
               },
               //ss-comp 4
               {
                    "titleCompétence": "Service DHCP",
                    "id": 4,
                    "description": `<p class="paraCompTechnique">
                              Lors des TD et TP, j'ai développé des compétences dans la configuration du service DHCP.
                         </p><br>
                         <p class="paraCompTechnique">
                              Lors des TD et TP en service-réseau, j'ai pu installer et configurer un service DHCP sur un serveur Linux et Windows afin qu'il
                              attribue une adresse IP, mais aussi d'autres informations, comme la passerelle à des machines. <br>
                         </p>`,
                    "jauge": 95,
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
                    "id": 5,
                    "description": `<p class="paraCompTechnique">
                              Lors des TD et TP, j'ai développé des compétences dans la configuration du service DNS.
                         </p><br>
                         <p class="paraCompTechnique">
                              Lors des TD et TP en service réseau, j'ai pu mettre en place un service DNS sur des serveurs Linux et Windows. J'ai pu
                              voir les différents types d'enregistrement (A, CNAME, MX...).<br>
                         </p>`,
                    "jauge": 92,
                    "tags": [
                         "DNS",
                         "Configuration",
                         "Linux",
                         "Windows",
                         "IP"
                    ]
               },
               //ss-comp 6
               {
                    "titleCompétence": "Point d'accès wifi",
                    "id": 6,
                    "description": `<p class="paraCompTechnique">
                              Lors des TD et TP, j'ai développé des compétences dans la configuration de points d'accès wifi.
                         </p><br>
                         <p class="paraCompTechnique">
                              Lors des TD et TP dans l'ensemble des matières, j'ai pu mettre en place un point d'accès wifi afin que les appareils connectés sur
                              celui-ci puissent avoir accès à internet via un routeur (PC).<br>
                         </p>`,
                    "jauge": 100,
                    "tags": [
                         "Wifi",
                         "Configuration",
                         "Linux",
                         "Windows",
                         "IP"
                    ]
               },
               //ss-comp 7
               {
                    "titleCompétence": "Éléments divers dans Windows Server",
                    "id": 7,
                    "description": `<p class="paraCompTechnique">J'ai pu mettre en place un certain nombre de services sur Windows Server.
                         </p><br>
                         <p class="paraCompTechnique">
                              Lors des TD et TP en service réseau, j'ai pu mettre en place : RDS (Bureau à distance), IIS, un serveur de fichiers et la réplication d'AD.<br>
                         </p>`,
                    "jauge": 90,
                    "tags": [
                         "RDS",
                         "IIS",
                         "Serveur de fichiers",
                         "Réplication",
                         "Windows Server"
                    ]
               },
               //ss-comp 8
               {
                    "titleCompétence": "Réseau Opérateur & Réseau accès",
                    "id": 8,
                    "description": `<p class="paraCompTechnique">Lors des TD et TP de réseau opérateur et réseau accès, j'ai pu découvrir le fonctionnement de ces réseaux.
                         </p><br>
                         <p class="paraCompTechnique">
                              Lors des TD et TP, j'ai pu découvrir le fonctionnement des réseaux opérateur et réseaux accès. J'ai pu apprendre à configurer des équipements réseaux tels que des ONT, OLT. 
                              J'ai pu apprendre la logique de MPLS en mettant en œuvre une infrastructure de routeurs sur GNS3. Aussi, j'ai vu ce qu'était un OADM, OTN et les technologies associées.
                         </p>`,
                    "jauge": 95,
               }
          ]
     },

     //compétences programmation
     {
          "title": "Programmation",
          "id": 2,
          "compétences": [
               //ss-comp 1
               {
                    "titleCompétence": "Utilisation de commande et script Linux",
                    "id": 1,
                    "description": `<p class="paraCompTechnique">
                              Au cours de nombreux TD et TP, j'ai développé des compétences
                              dans les commandes et scripts Linux.
                         </p><br>
                         <p class="paraCompTechnique">
                              Effectivement, au cours de ces nombreux TD et TP, j'ai beaucoup pratiqué sur le
                              terminal des commandes Linux pour lister, modifier, créer ou supprimer des fichiers.
                              Par la suite, j'ai appris à faire des scripts BASH pour découvrir une nouvelle façon
                              d'utiliser les commandes pour, par exemple, faire des petits programmes automatisés.<br><br>
                              Ces TD et TP m'ont aussi permis d'acquérir des connaissances sur le fonctionnement
                              des systèmes d'exploitation et le traitement des données.
                         </p>`,
                    "jauge": 80,
                    "tags": [
                         "Linux",
                         "Commandes",
                         "Systèmes d'exploitation",
                         "Traitement des données",
                         "BASH",
                         "SHELL"
                    ]
               },
               //ss-comp 2
               {
                    "titleCompétence": "Programmation en python",
                    "id": 2,
                    "description": `<p class="paraCompTechnique">
                              Lors des nombreux TD et TP, j'ai développé des compétences dans la programmation Python.
                         </p><br>
                         <p class="paraCompTechnique">
                              Au cours des nombreuses séances de TD et TP, j'ai effectué une série
                              d'exercices sur les fondamentaux de Python (variables, boucles, conditions, fonctions,
                              modules, listes)
                              et j'ai aussi appris à respecter les règles de programmation afin que les programmes
                              restent lisibles pour tout autre développeur.<br><br>
                              Aussi, j'ai découvert la Programmation Orientée Objet (POO).
                         </p>`,
                    "jauge": 80,
                    "tags": [
                         "Programmation",
                         "Python"
                    ]
               },
               //ss-comp 3
               {
                    "titleCompétence": "Programmation Web",
                    "id": 3,
                    "description": `<p class="paraCompTechnique">
                              Lors de ma veille technologique, de ma curiosité, mais aussi dans le cadre de nos projets
                              de STI2D, j'ai découvert la programmation WEB.
                         </p><br>
                         <p class="paraCompTechnique">
                              Effectivement, j'ai commencé à découvrir la programmation et le fonctionnement d'internet
                              en seconde avec <strong>Grafikart.fr</strong> qui m'a suivi tout au long de mon
                              apprentissage sur les langages : HTML, CSS, JS et que je continue à suivre pour voir les
                              dernières nouveautés et apprendre de nouvelles choses. <br><br>
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
                    "id": 4,
                    "description": `<p class="paraCompTechnique">
                              Grâce à ma curiosité, mais aussi grâce aux TP et TD en programmation, j'ai acquis de l'expérience avec le langage PHP.
                         </p><br>
                         <p class="paraCompTechnique">
                              Grâce à <strong>Grafikart.fr</strong> j'ai découvert les fondamentaux de PHP. Ensuite, en BUT, j'ai pu remettre en pratique les
                              bases du langage (variables, boucles, conditions, fonctions, listes).<br><br>
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
                    "id": 5,
                    "description": `<p class="paraCompTechnique">
                              Lors de nos TD et TP, j'ai pu découvrir les bases de données.
                         </p><br>
                         <p class="paraCompTechnique">
                              Lors de nos TD et TP, j'ai pu créer une base de données, insérer des données et faire des requêtes SQL afin de sélectionner et afficher les données demandées. <br>
                              J'ai donc pu découvrir MySQL mais aussi NoSQL avec MongoDB.
                         </p>`,
                    "jauge": 65,
                    "tags": [
                         "SQL",
                         "MySQL"
                    ]
               },
               //ss-comp 6
               {
                    "titleCompétence": "Java",
                    "id": 6,
                    "description": `<p class="paraCompTechnique">
                              Lors de nos TD et TP en programmation, j'ai pu découvrir le langage de programmation Java.
                         </p><br>
                         <p class="paraCompTechnique">
                              Durant les différents TD et TP, j'ai pu découvrir les bases de Java (variables, boucles, conditions, fonctions, listes).<br>
                              J'ai aussi découvert la programmation orientée objet (POO) avec Java. J'ai pu mettre en œuvre des classes, des méthodes, des attributs, des constructeurs, des héritages, du polymorphisme, des packages.
                              J'ai pu mettre en œuvre dans un projet de 3 mois ces compétences pour créer une application Android qui reprend le même principe que X (Twitter).
                         </p>`,
                    "jauge": 96,
                    "tags": [
                         "Java",
                         "Android"
                    ]
               },
               //ss-comp 7
               {
                    "titleCompétence": "Powershell",
                    "id": 7,
                    "description": `<p class="paraCompTechnique">
                              Lors de nos TD et TP en programmation événementielle, j'ai pu découvrir le langage de script : Powershell.
                         </p><br>
                         <p class="paraCompTechnique">
                              Durant les différents TD et TP, j'ai pu découvrir les bases de Powershell (variables, boucles, conditions, fonctions, tableaux).<br>
                              J'ai aussi découvert comment utiliser Powershell pour administrer un serveur Windows. J'ai pu mettre en œuvre des scripts pour automatiser des tâches. 
                         </p>`,
                    "jauge": 80,
                    "tags": [
                         "Windows",
                         "Powershell"
                    ]
               }
          ]
     },

     //compétences télécommunications
     {
          "title": "Télécommunications",
          "id": 3,
          "compétences": [
               //ss-comp 1
               {
                    "titleCompétence": "Utilisation de GBF (Générateur de fonction)",
                    "id": 1,
                    "description": `<p class="paraCompTechnique">Lors des TP de télécommunications, j'ai pu apprendre à 
                                        utiliser des GBF (Agilent et RIGOL).
                         </p><br>
                         <p class="paraCompTechnique">
                              J'ai pu apprendre à générer un ou plusieurs signaux avec des amplitudes et des fréquences différentes. J'ai pu utiliser
                              plusieurs fonctions telles que le réglage de l'impédance, la modulation, et le sweep.
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
                    "id": 2,
                    "description": `<p class="paraCompTechnique">
                              Lors des TP de télécommunications, j'ai pu apprendre à utiliser des oscilloscopes (Keysight et Agilent).
                         </p><br>
                         <p class="paraCompTechnique">
                              J'ai pu apprendre à observer un ou plusieurs signaux simultanément pour en extraire des informations sur l'amplitude,
                              la fréquence, la durée à l'état haut, tout en sachant régler l'échelle horizontale et verticale. J'ai pu
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
                    "id": 3,
                    "description": `<p class="paraCompTechnique">
                              Lors des TP de télécommunications, j'ai pu apprendre à utiliser des analyseurs de spectre (ANRITSU et SIGLENT).
                         </p><br>
                         <p class="paraCompTechnique">
                              J'ai pu apprendre à observer le spectre d'un signal sinusoïdal ou carré en sachant régler l'échelle horizontale
                              et verticale. J'ai aussi utilisé la démodulation afin de pouvoir écouter un signal, observer son spectre et déterminer
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
               },
               //ss-comp 4
               {
                    "titleCompétence": "Fibre Optique",
                    "id": 4,
                    "description": `<p class="paraCompTechnique">
                              Lors des TD et TP de télécommunications, j'ai pu découvrir le fonctionnement de la fibre optique.
                         </p><br>
                         <p class="paraCompTechnique">
                              Durant les différents TD et TP, j'ai pu découvrir les différents types de fibre optique, les différents types de connecteurs, les différents types de soudures. 
                              J'ai pu apprendre à tester la continuité d'une fibre, à tester la perte d'insertion d'une fibre. 
                         </p>`,
                    "jauge": 95,
                    "tags": [
                         "Fibre Optique",
                    ]
               }
          ]
     },

     //compétences téléphonie
     {
          "title": "Téléphonie",
          "id": 4,
          "compétences": [
               //ss-comp 1
               {
                    "titleCompétence": "Configuration des téléphones IP et des call server",
                    id: 1,
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

     //compétences sécurité
     {
          "title": "Sécurité",
          "id": 5,
          "compétences": [
               //ss-comp 1
               {
                    "titleCompétence": "PenTest",
                    id: 1,
                    "description": `<p class="paraCompTechnique">
                              Lors des différents TD et TP et via des recherches personnelles sur Hack The Box, j'ai découvert le PenTest.
                         </p><br>
                         <p class="paraCompTechnique">
                              J'ai pu découvrir ce qu'était un PenTest, les différentes étapes d'un PenTest, les différents outils utilisés pour un PenTest. 
                              J'ai pu mettre en œuvre un PenTest sur une machine virtuelle pour découvrir les failles de sécurité et la manière de les utiliser.
                         </p>`,
                    "jauge": 80,
               },
               //ss-comp 2
               {
                    "titleCompétence": "Sécuriser DNS",
                    id: 2,
                    "description": `<p class="paraCompTechnique">
                              Lors des différents TD et TP en service réseau avancé, j'ai découvert comment sécuriser le service DNS.
                         </p><br>
                         <p class="paraCompTechnique">
                              J'ai pu découvrir les différentes failles de sécurité du service DNS et comment les sécuriser. J'ai pu mettre en œuvre des solutions 
                              pour sécuriser le service DNS entre autres avec DNSSEC. J'ai pu apprendre à faire des requêtes DNS et à les analyser.
                         </p>`,
                    "jauge": 80,
               },
               //ss-comp 3
               {
                    "titleCompétence": "Sécuriser Wifi",
                    id: 3,
                    "description": `<p class="paraCompTechnique">
                              Lors des différents TD et TP en réseau campus, j'ai découvert comment sécuriser un réseau wifi. 
                         </p><br>
                         <p class="paraCompTechnique">
                              J'ai pu découvrir comment sécuriser un réseau wifi en mettant en place un système d'authentification avec FreeRadius et avec/sans un portail captif.
                              De plus, j'ai pu apprendre à mettre en place des LOG pour surveiller les connexions et les déconnexions et le trafic de l'utilisateur.<br>`,
                    "jauge": 85,
               },
               //ss-comp 4
               {
                    "titleCompétence": "IPTABLES",
                    id: 4,
                    "description": `<p class="paraCompTechnique">
                              Lors des différents TD et TP en réseau campus, j'ai découvert comment mettre en place du filtrage de paquets avec IPTABLES.
                         </p><br>
                         <p class="paraCompTechnique">
                              J'ai pu découvrir comment mettre en place du filtrage de paquets avec IPTABLES. J'ai pu apprendre à mettre en place des règles de filtrage, des règles de NAT, des règles de redirection.`,
                    "jauge": 90,
               }
          ],
     },

     //compétences langues
     {
          "title": "Langues",
          "id": 6,
          "compétences": [
               //ss-comp 1
               {
                    "titleCompétence": "Anglais",
                    "id": 1,
                    "description": `<p class="paraCompTechnique">
                              Niveau : B1 
                        </p><br>`,
                    "jauge": "60"
               }
          ]
     }
]

//projets
const projetsData = [
     //projet 1
     {
          "title": "SAE14 : Portfolio",
          "description": "Projet développé en 2023 en BUT Réseaux et Télécommunications.",
          "image": "assets/images/image_prj-sae14.png",
          "page": "projet/prj_sae14.html",
     },
     //projet 2
     {
          "title": "SAE21 : Construire un réseau informatique pour une petite structure",
          "description": "Projet développé en 2024 en BUT Réseaux et Télécommunications.",
          "image": "assets/images/image_prj-sae21.png",
          "page": "projet/prj_sae21.html",
     },
     //projet 3
     {
          "title": "SAE23 : Mettre en place une solution informatique pour l’entreprise",
          "description": "Projet développé en 2024 en BUT Réseaux et Télécommunications.",
          "image": "assets/images/image_prj-sae23.png",
          "page": "projet/prj_sae23.html",
     },
     //projet 4
     {
          "title": "SAE24 : Projet Intégratif",
          "description": "Projet développé en 2024 en BUT Réseaux et Télécommunications.",
          "image": "assets/images/image_prj-sae24.png",
          "page": "projet/prj_sae24.html",
     },
     //projet 5
     {
          "title": "SAE32 : Développer des applications communicantes",
          "description": "Projet développé en 2025 en BUT Réseaux et Télécommunications.",
          "image": "assets/images/image_prj-sae32.png",
          "page": "projet/prj_sae32.html",
     },
     //projet 6
     {
          "title": "SAE34 : Découvrir le pentesting",
          "description": "Projet développé en 2025 en BUT Réseaux et Télécommunications.",
          "image": "assets/images/image_prj-sae34.png",
          "page": "projet/prj_sae34.html",
     }
];