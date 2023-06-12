## Fait:
1. Formulaire pour uploader le fichier, rentrer le prix auquel on veut vendre le fichier et connecter son wallet
2. Fonction qui upload le fichier sur ipfs et récupère le cid
3. Fonction qui appelle le smart contract pour stocker le cid et le prix

## Reste à faire:
1. Ajouter de la validation au formulaire (utiliser React hook form ou Formik) 
2. Se connecter aux fonctions du smart contract transmises par Sinane
3. Envoyer les infos à web3 storage et au smart contract si le paiement est ok.
4. Demander la durée de stockage souhaitée dans le form
5. Ajouter du style 

## A la fin
1. Encrypter le fichier
2. Avoir une petite section sur le côté qui affiche les fichiers qu'on a déjà uploadé, le temps restant avant qu'ils soient dépubliés, un bouton pour repayer et prolonger la publication, un bouton pour dépublier les fichiers