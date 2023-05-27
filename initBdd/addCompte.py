import requests
import random
from tqdm import tqdm

# URL de l'endpoint cible
url = "https://192.168.1.94:8443/TiktokBackend/AuthenticationServlet"

personnes = [
    {
        "nom": "John Doe",
        "pseudo": "jdoe",
        "bio": "Développeur passionné",
        "surnom": "JD",
    },
    {
        "nom": "Jane Smith",
        "pseudo": "jsmith",
        "bio": "Designer créative",
        "surnom": "JS",
    },
    {
        "nom": "Alice Johnson",
        "pseudo": "ajohnson",
        "bio": "Entrepreneuse ambitieuse",
        "surnom": "AJ",
    },
    {
        "nom": "Bob Ross",
        "pseudo": "bross",
        "bio": "Peintre inspirant",
        "surnom": "Le Maître des paysages",
    },
    {
        "nom": "Emily Brown",
        "pseudo": "ebrown",
        "bio": "Écrivaine talentueuse",
        "surnom": "Plume d'or",
    },
    {
        "nom": "David Lee",
        "pseudo": "dlee",
        "bio": "Guitariste virtuose",
        "surnom": "Six Strings",
    },
    {
        "nom": "Alex Turner",
        "pseudo": "aturner",
        "bio": "Chanteur charismatique",
        "surnom": "Arctic Soul",
    },
    {
        "nom": "Sophie Martin",
        "pseudo": "smartin",
        "bio": "Photographe talentueuse",
        "surnom": "L'œil de l'objectif",
    },
    {
        "nom": "Michael Wang",
        "pseudo": "mwang",
        "bio": "Développeur de jeux vidéo",
        "surnom": "Pixel Magician",
    },
    {
        "nom": "Sarah Johnson",
        "pseudo": "sjohnson",
        "bio": "Avocate engagée",
        "surnom": "Justice Warrior",
    },
    {
        "nom": "Thomas Anderson",
        "pseudo": "tanderson",
        "bio": "Hacker anonyme",
        "surnom": "Neo",
    },
    {
        "nom": "Olivia Wilson",
        "pseudo": "owilson",
        "bio": "Journaliste d'investigation",
        "surnom": "La Plume acérée",
    },
    {
        "nom": "Daniel Jackson",
        "pseudo": "djackson",
        "bio": "Archéologue intrépide",
        "surnom": "L'Indiana Jones moderne",
    },
    {
        "nom": "Emma Taylor",
        "pseudo": "etaylor",
        "bio": "Athlète olympique",
        "surnom": "La Foudre",
    },
    {
        "nom": "Liam Garcia",
        "pseudo": "lgarcia",
        "bio": "Acteur prometteur",
        "surnom": "La Nouvelle Étoile",
    },
    {
        "nom": "Ava Martinez",
        "pseudo": "amartinez",
        "bio": "Styliste audacieuse",
        "surnom": "Fashionista",
    },
    {
        "nom": "Noah Thompson",
        "pseudo": "nthompson",
        "bio": "Aventurier intrépide",
        "surnom": "Le Chercheur de trésors",
    },
    {
        "nom": "Isabella Davis",
        "pseudo": "idavis",
        "bio": "Artiste multidisciplinaire",
        "surnom": "Esprit Créatif",
    },
    {
        "nom": "James Rodriguez",
        "pseudo": "jrodriguez",
        "bio": "Footballeur talentueux",
        "surnom": "Magicien du ballon",
    },
    {
        "nom": "Mia Anderson",
        "pseudo": "manderson",
        "bio": "Danseuse étoile",
        "surnom": "Gracieuse Ballerine",
    },
    {
        "nom": "Benjamin White",
        "pseudo": "bwhite",
        "bio": "Éco-entrepreneur",
        "surnom": "Le Visionnaire Vert",
    },
    {
        "nom": "Charlotte Lee",
        "pseudo": "clee",
        "bio": "Cheffe étoilée",
        "surnom": "La Reine des Saveurs",
    },
    {
        "nom": "Henry Baker",
        "pseudo": "hbaker",
        "bio": "Astronaute en mission",
        "surnom": "L'Explorateur des étoiles",
    },
    {
        "nom": "Ella Thompson",
        "pseudo": "ethompson",
        "bio": "Programmeuse prodige",
        "surnom": "Code Magician",
    },
    {
        "nom": "William Harris",
        "pseudo": "wharris",
        "bio": "Écrivain best-seller",
        "surnom": "Le Maître des Mots",
    },
    {
        "nom": "Sofia Clark",
        "pseudo": "sclark",
        "bio": "Scientifique passionnée",
        "surnom": "La Curieuse",
    },
    {
        "nom": "Joseph Wright",
        "pseudo": "jwright",
        "bio": "Poète romantique",
        "surnom": "Le Mélodiste",
    },
    {
        "nom": "Grace Walker",
        "pseudo": "gwalker",
        "bio": "Humanitaire dévouée",
        "surnom": "L'Ange gardien",
    },
    {
        "nom": "Lucas Turner",
        "pseudo": "lturner",
        "bio": "Photographe de voyage",
        "surnom": "L'Œil du Monde",
    },
    {
        "nom": "Chloe Martin",
        "pseudo": "cmartin",
        "bio": "Développeuse d'applications",
        "surnom": "Code Queen",
    },
    {
        "nom": "Alexander Lewis",
        "pseudo": "alewis",
        "bio": "Violoniste virtuose",
        "surnom": "Le Virtuose des Cordes",
    },
    {
        "nom": "Victoria Hall",
        "pseudo": "vhall",
        "bio": "Actrice talentueuse",
        "surnom": "La Muse de l'écran",
    },
    {
        "nom": "Gabriel Wright",
        "pseudo": "gwright",
        "bio": "Compositeur inspiré",
        "surnom": "Mélodies enchanteresses",
    },
    {
        "nom": "Madison Rodriguez",
        "pseudo": "mrodriguez",
        "bio": "Styliste de renom",
        "surnom": "Fashion Diva",
    },
    {
        "nom": "Samuel Davis",
        "pseudo": "sdavis",
        "bio": "Photographe animalier",
        "surnom": "Le Chasseur d'instants",
    },
    {
        "nom": "Lily Thompson",
        "pseudo": "lthompson",
        "bio": "Chercheuse en sciences marines",
        "surnom": "La Plongeuse intrépide",
    },
    {
        "nom": "Jackson Baker",
        "pseudo": "jbaker",
        "bio": "Aventurier des contrées lointaines",
        "surnom": "Le Globe-Trotter",
    },
    {
        "nom": "Emma Lewis",
        "pseudo": "elewis",
        "bio": "Ingénieure brillante",
        "surnom": "La Magicienne des Machines",
    },
    {
        "nom": "Ethan Walker",
        "pseudo": "ewalker",
        "bio": "Artiste graffeur",
        "surnom": "Le Rêveur Coloré",
    },
    {
        "nom": "Avery Clark",
        "pseudo": "aclark",
        "bio": "Architecte de renom",
        "surnom": "Le Créateur d'espaces",
    },
    {
        "nom": "Scarlett Wright",
        "pseudo": "swright",
        "bio": "Écrivaine engagée",
        "surnom": "La Plume militante",
    },
    {
        "nom": "Jack Harris",
        "pseudo": "jharris",
        "bio": "Inventeur génial",
        "surnom": "Le Visionnaire",
    },
    {
        "nom": "Grace Turner",
        "pseudo": "gturner",
        "bio": "Danseuse contemporaine",
        "surnom": "La Grâce en mouvement",
    },
    {
        "nom": "Leo Anderson",
        "pseudo": "landerson",
        "bio": "Explorateur des profondeurs",
        "surnom": "Le Plongeur audacieux",
    },
    {
        "nom": "Luna Thompson",
        "pseudo": "lthompson",
        "bio": "Violoncelliste virtuose",
        "surnom": "La Magicienne des Cordes",
    },
    {
        "nom": "Mason Martin",
        "pseudo": "mmartin",
        "bio": "Chef pâtissier renommé",
        "surnom": "Le Magicien des Saveurs",
    },
    {
        "nom": "Harper Baker",
        "pseudo": "hbaker",
        "bio": "Scénariste talentueux",
        "surnom": "L'Architecte des Histoires",
    },
    {
        "nom": "Evelyn Wilson",
        "pseudo": "ewilson",
        "bio": "Artiste de cirque polyvalente",
        "surnom": "L'Équilibriste virtuose",
    },
    {
        "nom": "William Turner",
        "pseudo": "wturner",
        "bio": "Réalisateur de films indépendants",
        "surnom": "Le Visionnaire du Cinéma",
    },
]

# Données à envoyer avec la requête POST

for personne in tqdm(personnes):
    data = {
        "op": "createCompte",
        "name": personne["nom"],
        "password": "123",
        "bio": personne["bio"],
        "surnom": personne["surnom"],
        "pp": random.randint(0, 8),
    }

    print("LezGo")

    # Envoi de la requête POST
    response = requests.post(url, data=data)

    # Vérification du code de statut de la réponse
    if response.status_code == 200:
        # Requête réussie
        print("Requête POST réussie!")
    else:
        # Requête échouée
        print("La requête POST a échoué. Code de statut:", response.status_code)
