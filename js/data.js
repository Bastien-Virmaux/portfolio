//compétences techniques
const compsData = [
     //compétences réseaux
     {
          "title": "Réseaux",
          "id": 1,
          "compétences": [
               //ss-comp 1
               {
                    "titleCompétence": "Installation d’équipements réseaux",
                    "id": 1,
                    "description": 
                    `
                    <p class="paraCompTechnique">
                         Au cours de ma formation, notamment lors des travaux dirigés, des travaux pratiques et des projets (SAE), j’ai eu l’occasion de manipuler divers équipements réseaux de marques différentes : principalement du matériel Cisco (switchs et routeurs) ainsi que des points d’accès D-LINK.
                    </p>
                    <p class="paraCompTechnique">
                         Dans le cadre de mon alternance, j’ai pu approfondir mes compétences en travaillant avec du matériel Aruba, notamment pour les switchs et les points d’accès Wi-Fi.
                    </p>
                    <p class="paraCompTechnique">
                         Les principales notions abordées sont les suivantes :

                         <ul class="listContainer">
                              <li class="list">Switchs (Cisco, Aruba)
                                   <ul class="listContainer">
                                        <li class="list">Configuration en mode CLI (ligne de commande)</li>
                                        <li class="list">Sécurisation des équipements</li>
                                        <li class="list">Configuration des ports (adressage, PoE)</li>
                                        <li class="list">Mise en place de VLAN (trunk, access)</li>
                                        <li class="list">Supervision via interface graphique</li>
                                   </ul>
                              </li>
                              <li class="list">Routeurs (Cisco)
                                   <ul class="listContainer">
                                        <li class="list">Configuration en mode CLI (ligne de commande)</li>
                                        <li class="list">Sécurisation des équipements</li>
                                        <li class="list">Mise en œuvre de protocoles de routage : RIP, OSPF, EIGRP, BGP, MPLS</li>
                                   </ul>
                              </li>
                              <li class="list">Points d’accès Wi-Fi (D-LINK, Aruba)
                                   <ul class="listContainer">
                                        <li class="list">Mise en place de portails captifs</li>
                                        <li class="list">Supervision via interface graphique</li>
                                   </ul>
                              </li>
                         </ul>
                    </p>
                    <p class="paraCompTechnique">
                         J’ai aussi appris à configurer le matériel dans différent type de réseau NAT, PAT, DNAT
                    </p>
                    `,
                    "jauge": 90,
                    "tags": []
               },

               //ss-comp 2
               {
                    "titleCompétence": "Virtualisation",
                    "id": 2,
                    "description": 
                    `
                    <p class="paraCompTechnique">
                         Au cours de ma formation, notamment lors des travaux dirigés, des travaux pratiques et des projets (SAE), j’ai créé plusieurs machines virtuelles en utilisant d’abord des hyperviseurs de type 2, tels que VirtualBox et VMware Workstation. J’ai ensuite découvert et manipulé des hyperviseurs de type 1, utilisés en entreprise, comme VMware vSphere, Hyper-V ou encore QEMU.
                    </p>
                    <p class="paraCompTechnique">
                         J’ai appris à dimensionner une machine hôte en fonction des ressources matérielles disponibles afin d’y déployer efficacement des machines virtuelles. J’ai également pris conscience de l’importance des snapshots et des sauvegardes, essentiels pour la sécurité et la restauration des systèmes virtualisés.
                    </p>
                    `,
                    "jauge": 80,
                    "tags": []
               },

               //ss-comp 3
               {
                    "titleCompétence": "Active Directory & Azure & o365",
                    "id": 3,
                    "description": 
                    `
                    <p class="paraCompTechnique">
                         Au cours de ma formation, notamment à travers les travaux dirigés, les travaux pratiques et les projets (SAE), j’ai pu découvrir l’utilisation d’Active Directory ainsi que plusieurs fonctionnalités complémentaires tels que la réplication. Cela m’a permis d’apprendre à créer et gérer un ou plusieurs domaines (forêts), en configurant des comptes utilisateurs, des unités d’organisation (OU), et des groupes de sécurité pour mettre en place des partages de fichiers et dossiers avec des droits d’accès définis précisément.
                    </p>
                    <p class="paraCompTechnique">
                         Dans le cadre de mon alternance, j’ai également découvert Azure Active Directory pour la synchronisation des utilisateurs, des ou et des groupes entre l’AD et la suite Office 365. J’ai ainsi pu me familiariser avec la complexité de cette plateforme, la gestion des licences, ainsi qu’avec des outils comme Exchange pour l’envoi d’e-mail et Entra ID pour la sécurité des comptes.
                    </p>
                    `,
                    "jauge": 85,
                    "tags": []
               },

               //ss-comp 4
               {
                    "titleCompétence": "Service Réseau",
                    "id": 4,
                    "description": 
                    `
                    <p class="paraCompTechnique">
                          Au cours de ma formation, notamment à travers les travaux dirigés, les travaux pratiques et les projets (SAE), j’ai appris à configurer et sécuriser plusieurs services réseau essentiels. J’ai notamment mis en place les services DNS (Domain Name System), pour la résolution de noms de domaine, et DHCP (Dynamic Host Configuration Protocol), pour l’attribution automatique d’adresses IP. Ces services ont été configurés aussi bien sur Windows Server que sur Linux.
                    </p>
                    <p class="paraCompTechnique">
                         J’ai également appris à utiliser SSH pour établir des connexions sécurisées entre deux machines, ainsi qu’à manipuler le protocole FTP (File Transfer Protocol) et ses variantes sécurisées (SFTP) pour effectuer des transferts de fichiers entre appareils.
                    </p>
                    <p class="paraCompTechnique">
                         Enfin, j’ai découvert le service LDAP (Lightweight Directory Access Protocol) dans le cadre de ma formation, et j’ai eu l’occasion d’utiliser le protocole SNMP (Simple Network Management Protocol) pour la supervision de l’infrastructure réseau lors de mon alternance.
                    </p>
                    `,
                    "jauge": 70,
                    "tags": []
               },

               //ss-comp 5
               {
                    "titleCompétence": "Services Windows Server",
                    "id": 5,
                    "description": 
                    `
                    <p class="paraCompTechnique">
                         Au cours de ma formation, notamment à travers les travaux dirigés et les travaux pratiques, j’ai pu découvrir et configurer plusieurs outils tiers intégrés à Windows Server :

                         <ul class="listContainer">
                              <li class="list">WDS (Windows Deployment Services), utilisé pour déployer automatiquement des images système sur plusieurs postes ;</li>
                              <li class="list">WSUS (Windows Server Update Services), pour la gestion centralisée des mises à jour ;</li>
                              <li class="list">WSB (Windows Server Backup), pour la mise en place et la gestion de sauvegardes régulières.</li>
                         </ul>
                    </p>

                    <p class="paraCompTechnique">
                         En entreprise, j’ai également eu l’occasion de manipuler le service RDS (Remote Desktop Services), en particulier avec un serveur broker et des clients légers, afin de fournir un accès à distance à des environnements de travail pour les étudiants.
                    </p>
                    `,
                    "jauge": 60,
                    "tags": []
               },

               //ss-comp 6
               {
                    "titleCompétence": "Réseaux cellulaires",
                    "id": 6,
                    "description": 
                    `
                    <p class="paraCompTechnique">
                         Au cours de ma formation, notamment à travers les travaux dirigés et les travaux pratiques, j’ai découvert le fonctionnement des réseaux mobiles urbains (2G, 3G, 4G, 5G). J’ai pu mettre en pratique ces connaissances à l’aide de SRSRAN, un outil permettant de simuler ces réseaux sur des machines Linux.
                    </p>
                    <p class="paraCompTechnique">
                         Cette expérience m’a permis d’aborder des notions fondamentales telles que le handover, le paging, le découpage cellulaire, ainsi que les différentes contraintes physiques et de télécommunication liées à ces technologies.
                    </p>
                    `,
                    "jauge": 55,
                    "tags": []
               },

               //ss-comp 7
               {
                    "titleCompétence": "Infrastructure d’Internet et réseaux d’opérateurs",
                    "id": 7,
                    "description": 
                    `
                    <p class="paraCompTechnique">
                         Au cours de ma formation, notamment à travers les travaux dirigés et les travaux pratiques, j’ai découvert le fonctionnement technique d’Internet à l’échelle nationale et mondiale, en étudiant les infrastructures de plusieurs opérateurs tels qu’Orange, RENATER, Covage et Colt.
                    </p>
                    <p class="paraCompTechnique">
                         J’ai appris à identifier les différentes couches du réseau : l’accès, la collecte et le cœur de réseau. J’ai également étudié le fonctionnement de la fibre optique et les équipements majeurs associés, tels que les amplificateurs optiques, les multiplexeurs optiques, les OADM (Optical Add-Drop Multiplexer) et l’OTN (Optical Transport Network).
                    </p>
                    <p class="paraCompTechnique">
                         J’ai approfondi la partie accès, c’est-à-dire la liaison entre la box de l’utilisateur et le premier équipement opérateur, en découvrant des protocoles comme PPPoE et IPoE, ainsi que du matériel tel que les BRAS (Broadband Remote Access Server) et BNG (Broadband Network Gateway).
                    </p>
                    <p class="paraCompTechnique">
                         Enfin, j’ai étudié les différents types de déploiement de fibre optique (FTTH, FTTO, FTTB, FTTD) et les équipements associés : NRO (Nœud de Raccordement Optique), OLT (Optical Line Terminal) et ONT (Optical Network Terminal).
                    </p>
                    `,
                    "jauge": 70,
                    "tags": []
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
                    "titleCompétence": "Web",
                    "id": 1,
                    "description": 
                    `
                    <p class="paraCompTechnique">
                         Depuis plusieurs années, j’apprends en autodidacte les bases du développement web. J’ai commencé par maîtriser HTML et CSS, puis j’ai appris à mettre en ligne un site web avec un nom de domaine. Par la suite, je me suis intéressé à l’algorithmique, ce qui m’a permis d’aborder des langages front-end comme JavaScript, React et Svelte, ainsi que des langages back-end tels que PHP (avec une approche orientée objet), SQL et Node.js.       
                    </p>
                    <p class="paraCompTechnique">
                         J’ai également découvert et utilisé Git pour le versionnement de projets, notamment via GitHub.
                    </p>
                    <p class="paraCompTechnique">
                         Dans le cadre de ma formation, j’ai appris à utiliser le framework Express.js afin de développer rapidement des applications web côté serveur.
                    </p>
                    <p class="paraCompTechnique">
                         Dans le cadre de mon alternance, j’ai appris à utiliser le langage Python avec le micro-framework Flask pour développer des applications web simples et efficaces.
                    </p>
                    `,
                    "jauge": 95,
                    "tags": []
               },

               //ss-comp 2
               {
                    "titleCompétence": "Bash",
                    "id": 2,
                    "description": 
                    `
                    <p class="paraCompTechnique">
                         Au cours de ma formation, notamment lors des travaux dirigés et des travaux pratiques, j’ai découvert le système d’exploitation Linux, ainsi que les commandes de base à utiliser dans un terminal pour lister, créer, modifier ou supprimer du contenu présent sur le système.
                    </p>
                    <p class="paraCompTechnique">
                         Une fois ces bases acquises, j’ai appris à écrire des scripts Bash, ce qui m’a permis d’introduire une logique de programmation via des boucles, des conditions, et des fonctions, afin d’automatiser certaines tâches système.
                    </p>
                    `,
                    "jauge": 80,
                    "tags": []
               },

               //ss-comp 3
               {
                    "titleCompétence": "Python",
                    "id": 3,
                    "description": 
                    `
                    <p class="paraCompTechnique">
                         Au cours de ma formation, notamment lors des travaux dirigés, des travaux pratiques et des projets (SAE), j’ai appris à programmer en Python (Variables, Boucles, Conditions, Fonctions, Listes) dans le cadre des cours de mathématiques, de télécommunications et de cryptographie. Cela m’a permis, entre autres, de mettre en œuvre des algorithmes de cryptographie bien connus tels que RSA ou Diffie-Hellman.
                    </p>
                    <p class="paraCompTechnique">
                         Durant mon alternance, j’ai également utilisé Python pour déployer un serveur web dans le cadre du développement d’une application web.
                    </p>
                    `,
                    "jauge": 80,
                    "tags": []
               },

               //ss-comp 4
               {
                    "titleCompétence": "Base de données",
                    "id": 4,
                    "description": 
                    `
                    <p class="paraCompTechnique">
                         En complément de ma formation autodidacte, j’ai appris, au cours de ma formation (travaux dirigés, travaux pratiques et projets SAE), à utiliser différents systèmes de gestion de bases de données tels que MySQL, NoSQL et MongoDB.
                    </p>
                    <p class="paraCompTechnique">
                         J’ai ainsi appris à créer des bases de données, des tables ou collections, à insérer des données dynamiquement via PHP ou Node.js, et à utiliser des requêtes pour sélectionner, ajouter, modifier ou supprimer des données.
                    </p>
                    `,
                    "jauge": 70,
                    "tags": []
               },

               //ss-comp 5
               {
                    "titleCompétence": "Java",
                    "id": 5,
                    "description": 
                    `
                    <p class="paraCompTechnique">
                         Au cours de ma formation, notamment lors des travaux dirigés, des travaux pratiques et des projets (SAE), j’ai découvert le langage Java, en abordant les notions fondamentales telles que les variables, boucles, conditions, fonctions et listes, ainsi que les principes de la programmation orientée objet.         
                    </p>
                    <p class="paraCompTechnique">
                         J’ai pu mettre en pratique ces connaissances dans un projet réalisé avec Android Studio, dont l’objectif était de développer une application mobile reposant sur le même concept que X (anciennement Twitter).
                    </p>
                    `,
                    "jauge": 70,
                    "tags": []
               },

               //ss-comp 6
               {
                    "titleCompétence": "PowerShell",
                    "id": 6,
                    "description": 
                    `
                    <p class="paraCompTechnique">
                           Au cours de ma formation, notamment lors des travaux dirigés, des travaux pratiques et des projets (SAE), j’ai découvert le langage de scripting PowerShell sous Windows. Cela m’a permis d’apprendre à administrer un serveur Windows et à mettre en œuvre des scripts pour automatiser certaines tâches ou contrôler l’utilisation de certains éléments sur une machine.   
                    </p>
                    `,
                    "jauge": 60,
                    "tags": []
               },
          ]
     },

     //compétences télécommunications
     {
          "title": "Télécommunications",
          "id": 3,
          "compétences": [
               //ss-comp 1
               {
                    "titleCompétence": "GBF",
                    "id": 1,
                    "description": 
                    `
                    <p class="paraCompTechnique">
                         Au cours de ma formation, notamment lors des travaux dirigés et des travaux pratiques, j’ai appris à utiliser des générateurs de basses fréquences (GBF) de la marque RIGOL afin de générer différents types de signaux (carrés, sinusoïdaux, constants) avec des fréquences, amplitudes et charges spécifiques. Ces signaux sont ensuite appliqués à différents systèmes et types de câbles dans le cadre de l’étude du comportement des transmissions analogiques & numérique.
                    </p>
                    `,
                    "jauge": 60,
                    "tags": []
               },

               //ss-comp 2
               {
                    "titleCompétence": "Oscilloscope",
                    "id": 2,
                    "description": 
                    `
                    <p class="paraCompTechnique">
                        Au cours de ma formation, notamment lors des travaux dirigés et des travaux pratiques, j’ai appris à utiliser des oscilloscopes de la marque Keysight, à 2 ou 4 voies, pour visualiser un ou plusieurs signaux simultanément, aussi bien en domaine temporel qu’en domaine fréquentiel (via la FFT – Fast Fourier Transform).     
                    </p>
                    <p class="paraCompTechnique">
                         Ces outils permettent d’effectuer une analyse précise de différents types de signaux issus de systèmes électroniques ou transmis à travers divers types de câbles.
                    </p>
                    `,
                    "jauge": 60,
                    "tags": []
               },

               //ss-comp 3
               {
                    "titleCompétence": "Analyseur de spectre",
                    "id": 3,
                    "description": 
                    `
                    <p class="paraCompTechnique">
                         Au cours de ma formation, notamment lors des travaux dirigés et des travaux pratiques, j’ai appris à utiliser des analyseurs de spectre des marques RIGOL, SIGLENT et ANRITSU. Ces équipements m’ont permis d’observer et d’analyser des signaux dans le domaine fréquentiel, autrement dit leur spectre de fréquence.      
                    </p>
                    `,
                    "jauge": 60,
                    "tags": []
               },

               //ss-comp 4
               {
                    "titleCompétence": "Fibre Optique",
                    "id": 4,
                    "description": 
                    `
                    <p class="paraCompTechnique">
                         Au cours de ma formation, notamment lors des travaux dirigés et des travaux pratiques, j’ai découvert la fibre optique, qu’elle soit monomode ou multimode, ainsi que ses différents connecteurs, les techniques de soudure et les équipements associés, tels que le réflectomètre OTDR de marque ANRITSU, les bobines d’amorce et de fin.
                    </p>
                    <p class="paraCompTechnique">
                         J’ai pu réaliser plusieurs études techniques pour analyser les pertes optiques, la puissance transmise et d’autres paramètres influençant la qualité de la transmission.
                    </p>
                    `,
                    "jauge": 60,
                    "tags": []
               },

               //ss-comp 5
               {
                    "titleCompétence": "Sans fil",
                    "id": 5,
                    "description": 
                    `
                    <p class="paraCompTechnique">
                         Au cours de ma formation, notamment lors des travaux dirigés et des travaux pratiques, j’ai découvert les principes de la communication sans fil, notamment à travers l’utilisation d’antennes. Ces travaux m’ont permis d’étudier différents phénomènes tels que les pertes de signal liées à l’environnement et aux obstacles.
                    </p>
                    `,
                    "jauge": 60,
                    "tags": []
               },

               //ss-comp 6
               {
                    "titleCompétence": "TNT",
                    "id": 6,
                    "description": 
                    `
                    <p class="paraCompTechnique">
                         Au cours de ma formation, notamment lors des travaux dirigés et des travaux pratiques, j’ai découvert le fonctionnement de la TNT (Télévision Numérique Terrestre) à travers l’utilisation de différents équipements tels que ceux des marques TRIAX et ALCAD, ainsi que des répartiteurs satellites Astra et Hot Bird, et un analyseur de champ de la marque SEFRAM.
                    </p>
                    `,
                    "jauge": 50,
                    "tags": []
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
                    "titleCompétence": "Call Server",
                    "id": 1,
                    "description": 
                    `
                    <p class="paraCompTechnique">
                         Au cours de ma formation, notamment lors des travaux dirigés et des travaux pratiques, j’ai découvert le fonctionnement de la téléphonie analogique, puis de la téléphonie numérique, et enfin de la VoIP. J’ai également appris à configurer un IPBX afin de :     

                         <ul class="listContainer">
                              <li class="list">Assurer la communication interne entre deux postes téléphoniques;</li>
                              <li class="list">Établir des liaisons avec des téléphones mobiles et fixes externes.</li>
                         </ul>
                    </p>
                    `,
                    "jauge": 70,
                    "tags": []
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
                    "titleCompétence": "Pentest",
                    "id": 1,
                    "description": 
                    `
                    <p class="paraCompTechnique">
                         Au cours de ma formation, notamment lors des travaux dirigés, des travaux pratiques et des projets (SAE), j’ai été initié aux principes du pentesting en suivant les différentes étapes d’un test d’intrusion, telles que la collecte passive, la collecte active, et l’analyse de vulnérabilités (via les CVE, scores CVSS, etc.).
                    </p>
                    <p class="paraCompTechnique">
                         À l’aide de machines virtuelles, j’ai pu mettre en pratique ces connaissances en recherchant des failles de sécurité et en les exploitant pour obtenir un accès administrateur à un système cible.
                    </p>
                    <p class="paraCompTechnique">
                         Pour cela, j’ai utilisé plusieurs outils couramment employés en cybersécurité, tels que :

                          <ul class="listContainer">
                              <li class="list">Kali Linux;</li>
                              <li class="list">Metasploit;</li>
                              <li class="list">Burp Suite;</li>
                              <li class="list">DirBuster;</li>
                              <li class="list">Nikto;</li>
                              <li class="list">Google;</li>
                         </ul>
                    </p>
                    `,
                    "jauge": 70,
                    "tags": []

               },

               //ss-comp 2
               {
                    "titleCompétence": "Proxy",
                    "id": 2,
                    "description": 
                    `
                    <p class="paraCompTechnique">
                         Au cours de ma formation, notamment lors des travaux dirigés, des travaux pratiques ainsi que durant mon alternance, j’ai découvert la mise en place d’un reverse proxy avec HAProxy. Celui-ci permet d’intercepter et d’inspecter les requêtes d’un client avant leur transmission au serveur web.
                    </p>
                    <p class="paraCompTechnique">
                         J’ai également appris à configurer des fonctionnalités clés telles que :

                         <ul class="listContainer">
                              <li class="list">L’équilibrage de charge (load balancing) : pour répartir les requêtes entre plusieurs serveurs afin d’optimiser les performances et la disponibilité;</li>
                              <li class="list">La redirection HTTP vers HTTPS : pour renforcer la sécurité des échanges;</li>
                              <li class="list">L’activation du HSTS (HTTP Strict Transport Security) : pour forcer l’utilisation du protocole sécurisé HTTPS.</li>
                         </ul>
                    </p>
                    `,
                    "jauge": 70,
                    "tags": []
               },

               //ss-comp 3
               {
                    "titleCompétence": "Sécuriser Wifi",
                    "id": 3,
                    "description": 
                    `
                    <p class="paraCompTechnique">
                         Au cours de ma formation, notamment lors des travaux dirigés et des travaux pratiques, j’ai appris à sécuriser le service DNS (Domain Name System) contre différentes attaques, telles que :

                         <ul class="listContainer">
                              <li class="list">l’empoisonnement du cache (cache poisoning);</li>
                              <li class="list">le flooding de clients;</li>
                              <li class="list">le spoofing d’adresses IP;</li>
                              <li class="list">les transferts de zones non autorisés;</li>
                              <li class="list">ou encore l’attaque de Kaminsky;</li>
                         </ul>
                    </p>
                    <p class="paraCompTechnique">
                         Pour renforcer la sécurité du DNS, j’ai mis en œuvre la solution DNSSEC (Domain Name System Security Extensions), qui permet d’assurer l’authenticité et l’intégrité des réponses DNS grâce à une signature cryptographique.
                    </p>
                    `,
                    "jauge": 60,
                    "tags": []
               },

               //ss-comp 4
               {
                    "titleCompétence": "Wi-FI",
                    "id": 4,
                    "description": 
                    `
                    <p class="paraCompTechnique">
                         Au cours de ma formation, notamment lors des travaux dirigés et des travaux pratiques, j’ai appris à mettre en place un système d’authentification d’utilisateurs avec FreeRADIUS, permettant de contrôler l’accès à un réseau Wi-Fi. Ce mécanisme assure que seuls les utilisateurs autorisés peuvent se connecter, tout en conservant une traçabilité de leurs actions grâce aux fichiers de logs.
                    </p>
                    <p class="paraCompTechnique">
                         En complément, j’ai également expérimenté la mise en place d’un portail captif, permettant de rediriger l’utilisateur vers une page de connexion avant d’accéder à Internet.
                    </p>
                    `,
                    "jauge": 60,
                    "tags": []
               },

                //ss-comp 5
               {
                    "titleCompétence": "Stormshield",
                    "id": 5,
                    "description": 
                    `
                    <p class="paraCompTechnique">
                         Au cours de ma formation, notamment lors des travaux dirigés, des travaux pratiques et des projets (SAE), j’ai découvert et appris à utiliser un pare-feu Stormshield. J’ai ainsi pu configurer des règles de filtrage pour autoriser ou bloquer la communication entre des machines internes et externes, en appliquant des mécanismes de traduction d’adresses (NAT, PAT).
                    </p>
                    <p class="paraCompTechnique">
                         J’ai également mis en place une connexion VPN SSL afin de sécuriser l’accès distant au réseau.
                    </p>
                    `,
                    "jauge": 60,
                    "tags": []
               },

               //ss-comp 6
               {
                    "titleCompétence": "Sécurité LAN",
                    "id": 6,
                    "description": 
                    `
                    <p class="paraCompTechnique">
                         Au cours de ma formation, notamment lors des travaux dirigés et des travaux pratiques, j’ai découvert plusieurs attaques possibles sur un réseau local (LAN) ainsi que leurs solutions de mitigation. Par exemple :

                         <ul class="listContainer">
                              <li class="list">L’attaque SYN Flood, qui vise à saturer les files d’attente de connexions TCP incomplètes, et sa résolution via l’utilisation des SYN cookies;</li>
                              <li class="list">La mise en place du port knocking, une méthode de sécurisation permettant d’ouvrir un port uniquement après l’envoi d’une séquence précise de requêtes SYN sur des ports définis, pendant un laps de temps limité;</li>
                         </ul>
                    </p>
                    <p class="paraCompTechnique">
                         J’ai également appris à réaliser un empoisonnement du cache ARP, souvent utilisé dans le cadre d’une attaque de type Man-In-The-Middle (MITM), afin d’intercepter les communications sur le réseau.
                    </p>
                    `,
                    "jauge": 60,
                    "tags": []
               },

               //ss-comp 7
               {
                    "titleCompétence": "Sécurité LDAP",
                    "id": 7,
                    "description": 
                    `
                    <p class="paraCompTechnique">
                         Au cours de ma formation, notamment lors des travaux dirigés et des travaux pratiques, j’ai appris à sécuriser un annuaire LDAP à l’aide de plusieurs mécanismes :

                         <ul class="listContainer">
                              <li class="list">TLS (Transport Layer Security) : pour chiffrer les échanges entre le client et le serveur, garantissant la confidentialité des données;</li>
                              <li class="list">SASL (Simple Authentication and Security Layer) : pour authentifier les utilisateurs via différents protocoles sécurisés;</li>
                              <li class="list">Kerberos : pour mettre en place une authentification centralisée et robuste;</li>
                              <li class="list">ACL (Access Control Lists) : pour restreindre l’accès aux ressources de l’annuaire en fonction des droits des utilisateurs.</li>
                         </ul>
                    </p>
                    `,
                    "jauge": 35,
                    "tags": []
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
          "title": "WhiteSentinel",
          "description": "Mise en place d’une station blanche pour garantir la sécurité de l’infrastructure",
          "image": "assets/images/image_prj-whitesentinel.png",
          "page": "projet/prj_ws.html",
     },

     //projet 2
     {
          "title": "Grafana",
          "description": "Mise en place d’un visualisateur de données pour la supervision réseau",
          "image": "assets/images/image_prj-grafana.png",
          "page": "projet/prj_grafana.html",
     },

     //projet 3
     {
          "title": "Nexus",
          "description": "Développement d’une application mobile communicante sur Android",
          "image": "assets/images/image_prj-nexus.png",
          "page": "projet/prj_nexus.html",
     },

     //projet 4
     {
          "title": "Pentest",
          "description": "Apprentissage du pentesting sur machines virtuelles",
          "image": "assets/images/image_prj-pentest.png",
          "page": "projet/prj_pentest.html",
     },
     
     //projet 5
     {
          "title": "Projet Intégratif",
          "description": "Mise en pratique des compétences acquises en 1ère année",
          "image": "assets/images/image_prj-pi.png",
          "page": "projet/prj_pi.html",
     }
];