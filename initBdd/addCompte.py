import requests
import random
from tqdm import tqdm
from datas import personnes

# URL de l'endpoint cible
url = "https://192.168.1.94:8443/TiktokBackend/AuthenticationServlet"


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

    # Envoi de la requête POST
    response = requests.post(url, data=data, verify=False)

    # Vérification du code de statut de la réponse
    if response.status_code == 200:
        # Requête réussie
        print("Requête POST réussie!")
    else:
        # Requête échouée
        print("La requête POST a échoué. Code de statut:", response.status_code)
