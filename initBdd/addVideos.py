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

dossier = "./videos"

fichiers = [
    fichier
    for fichier in os.listdir(dossier)
    if os.path.isfile(os.path.join(dossier, fichier))
]



for fichier in fichiers:
    data = {
        "op": "upload",
        "hashtags": ",".join(random.sample(hashtags, 3)),
        "description": unidecode(descriptions_videos[random.randint(0,len(descriptions_videos)-1)]),
        "lieu": unidecode(lieux[random.randint(0,len(descriptions_videos)-1)]),
    }
    loginID = random.randint(1, N)
    cookies = {"loginID": str(loginID)}
    files = {"file": open("./videos/" + fichier, "rb")}

    response = requests.post(url, data=data, verify=False, files=files, cookies=cookies)

    # Vérification du code de statut de la réponse
    if response.status_code == 200:
        # Requête réussie
        print("Requête POST réussie!")
    else:
        # Requête échouée
        print("La requête POST a échoué. Code de statut:", response.status_code)
        print(response.text)
