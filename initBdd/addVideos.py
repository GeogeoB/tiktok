import requests
import random
from tqdm import tqdm
from datas import personnes
from datas import hashtags
import os

N = 10
cookies = {"loginID": random.randint(0, N)}
url = "https://192.168.1.94:8443/TiktokBackend/AuthenticationServlet"

dossier = "./videos"

fichiers = [
    fichier
    for fichier in os.listdir(dossier)
    if os.path.isfile(os.path.join(dossier, fichier))
]

data = {
    "op": "upload",
    "hashtags": ",".join(random.sample(hashtags, 3)),
    "description": "C'est la meilleur video de l'année !",
    "lieu": "Toulouse",
}

for fichier in fichiers:
    files = {"files": open(fichier, "rb")}

    response = requests.post(url, data=data, verify=False, files=files)

    # Vérification du code de statut de la réponse
    if response.status_code == 200:
        # Requête réussie
        print("Requête POST réussie!")
    else:
        # Requête échouée
        print("La requête POST a échoué. Code de statut:", response.status_code)
