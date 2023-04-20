# TODO
  #### Bande tout en haut de l'écran qui s'enlève jamais :
    - GAUDCHE : Logo 'TeamTok'
    - MILIEU : Barre de recherche
    - DROITE : Bouton upload - Photo de profil permettant d'accéder au compte si cliquée/ bouton se connecter

  #### Partie droite de l'écran :
    - Afficher le profil du compte de la vidéo en cours de visionnage
      * Photo de profil
      * Nom du compte
      * Surnom
      * Description
      * Nombre : abonnée, abonnement, "j'aime" reçu
      * Toutes les vidéos du compte en mode mosaïque

  #### Partie Vidéo de l'écran (Milieu) :
    - Décaler photo de profil, boutons "j'aime", commentaire, partager juste à droite de la vidéo
    - Ajouter un "filtre" sur la vidéo affichée : Logo 'animé' (option) + @identifiant_compte
    
    ##### Pour toi / Abonnement :
      - Pour toi : Afficher des vidéos randoms
      - Abonnement : Afficher des vidéos randoms des comptes suivis

  #### Partie Gauche de l'écran (de haut en bas) :
    - Boutons : Pour toi (vidéo random), Abonnements (vidéos des comptes dont profil est abonné) -> bon affichage sur la partie vidéo
    - Liste des comptes suivis : Photo profil + nom de compte & surnom
    - Liste des hashtags tendances (random)
    
  #### Spécifique (Prend partie milieu + droite de l'écran) :

    ##### Hashtag
      - #Nom_du_hashtag
      - Date de création
      - Nombre de vidéos avec ce hashtag
      - Mosaïque de toutes les vidéos avec ce hashtag
    
    ##### Compte (de haut en bas)
      - Photo de profil
      - Nom du compte
      - Surnom
      - Description
      - Nombre : abonnée, abonnement, "j'aime" reçu
      - Séparation écran :
        * GAUCHE : Toutes les vidéos du compte en mode mosaïque
        * DROITE : Toutes les vidéos que le compte a aimé
---

# Setup projet

Pour setup le projet frontend, il faut d'abord récupérer le projet:
```sh
git clone https://github.com/GeogeoB/tiktok
```

Puis télécharger les modules npm nécéssaires
```sh
npm install
```

Puis lancer le serveur
```sh
npm start
```

## Adresse du backend 
Pour changer l'adresse du backend, il faut modifier le fichier `src/config.js`
