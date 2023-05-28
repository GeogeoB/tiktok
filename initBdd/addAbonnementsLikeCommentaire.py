import requests
import random
from datas import personnes
from datas import commentaires

import os
from unidecode import unidecode


N = 10
url = "https://192.168.1.94:8443/TiktokBackend/DataServlet"
dossier = "./videos"
fichiers = [
    fichier
    for fichier in os.listdir(dossier)
    if os.path.isfile(os.path.join(dossier, fichier))
]


for i in range(len(personnes)):
    loginID = i+1
    cookies = {"loginID": str(loginID)}
    for _ in range(10):
        data = {
            "op": "addAbonnement",
            "abonnementID": random.randint(1,len(personnes)-1)
        }
        response = requests.post(url, data=data, verify=False, cookies=cookies)


        # Vérification du code de statut de la réponse
        if response.status_code == 200:
            # Requête réussie
            print("Requête POST réussie!")
        else:
            # Requête échouée
            print("La requête POST a échoué. Code de statut:", response.status_code)
            print(response.text)
    
    for _ in range(10):
        data = {
            "op": "likeVideo",
            "videoID": random.randint(1,len(fichiers)-1)
        }
        response = requests.get(url, data=data, verify=False, cookies=cookies)


        # Vérification du code de statut de la réponse
        if response.status_code == 200:
            # Requête réussie
            print("Requête POST réussie!")
        else:
            # Requête échouée
            print("La requête POST a échoué. Code de statut:", response.status_code)
            print(response.text)
    for _ in range(10):
        data = {
            "op": "addCommentaire",
            "videoID": random.randint(1,len(fichiers)-1),
            "text": unidecode(commentaires[random.randint(1,len(commentaires)-1)]),
        }
        response = requests.post(url, data=data, verify=False, cookies=cookies)


        # Vérification du code de statut de la réponse
        if response.status_code == 200:
            # Requête réussie
            print("Requête POST réussie!")
        else:
            # Requête échouée
            print("La requête POST a échoué. Code de statut:", response.status_code)
            print(response.text)
    
    
