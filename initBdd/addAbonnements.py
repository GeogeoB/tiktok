import requests
import random
from tqdm import tqdm
from datas import personnes
from datas import descriptions_videos
from datas import hashtags
from datas import lieux

import os
from unidecode import unidecode


N = 10
url = "https://192.168.1.94:8443/TiktokBackend/DataServlet"



for i in range(len(personnes)):
    for _ in range(10):
        data = {
            "op": "addAbonnement",
            "abonnementID": random.randint(1,len(personnes)-1)
        }
        loginID = i+1
        cookies = {"loginID": str(loginID)}
        response = requests.post(url, data=data, verify=False, cookies=cookies)


        # Vérification du code de statut de la réponse
        if response.status_code == 200:
            # Requête réussie
            print("Requête POST réussie!")
        else:
            # Requête échouée
            print("La requête POST a échoué. Code de statut:", response.status_code)
            print(response.text)
