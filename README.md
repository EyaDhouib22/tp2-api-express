# TP2 : Création d'une API RESTful avec Express.js

## 📌 Objectifs
- Créer une **API REST** en utilisant **Express.js**.
- Utiliser **SQLite3** pour la base de données.
- Appliquer les bonnes pratiques des API RESTful.
- Tester les routes avec **Postman**.

---

## ⚙️ 1. Initialisation du Projet

### ✅ **Pré-requis**
- **Node.js** installé (`node -v` pour vérifier)
- **Postman** installé

### 📌 **Installation du projet**
```sh
git clone https://github.com/ton-utilisateur/tp2-api-express.git
cd tp2-api-express
npm install
```

### 📌 **Lancer le serveur**
```sh
node index.js
```
📌 **Sortie attendue** :
```
🚀 Serveur en cours d'exécution sur le port 3000
✅ Connecté à la base de données SQLite.
✅ Table 'personnes' mise à jour avec la colonne 'adresse' !
```

---

## 📂 2. Structure du Projet
```
tp2-api-express/
│-- index.js   # Fichier principal du serveur Express.js
│-- database.js  # Gestion de la base de données SQLite3
│-- README.md   # Documentation et compte rendu du projet
│-- package.json  # Dépendances et configurations
│-- maBaseDeDonnees.sqlite  # Fichier SQLite contenant les données
```

---

## 🔥 3. Fonctionnalités de l'API
| Route | Méthode | Description |
|--------|---------|------------|
| `/` | `GET` | Page d'accueil |
| `/personnes` | `GET` | Récupère toutes les personnes |
| `/personnes/:id` | `GET` | Récupère une personne par ID |
| `/personnes` | `POST` | Ajoute une nouvelle personne (nom & adresse) |
| `/personnes/:id` | `PUT` | Met à jour une personne (nom & adresse) |
| `/personnes/:id` | `DELETE` | Supprime une personne |

---

## 🛠️ 4. Tests avec Postman

### ✅ **Tester `POST /personnes`**
- **URL** : `http://localhost:3000/personnes`
- **Méthode** : `POST`
- **Body (JSON)** :
```json
{
    "nom": "David",
    "adresse": "Paris"
}
```
📌 **Réponse attendue** :
```json
{
    "message": "success",
    "data": {
        "id": 4,
        "nom": "David",
        "adresse": "Paris"
    }
}
```

### ✅ **Tester `GET /personnes`**
- **URL** : `http://localhost:3000/personnes`
- **Méthode** : `GET`
📌 **Réponse attendue** :
```json
{
    "message": "success",
    "data": [
        { "id": 1, "nom": "Bob", "adresse": "Tunis" },
        { "id": 2, "nom": "Alice", "adresse": "Sousse" }
    ]
}
```

### ✅ **Tester `PUT /personnes/:id`**
- **URL** : `http://localhost:3000/personnes/1`
- **Méthode** : `PUT`
- **Body (JSON)** :
```json
{
    "nom": "Robert",
    "adresse": "Lyon"
}
```
📌 **Réponse attendue** :
```json
{
    "message": "success"
}
```

### ✅ **Tester `DELETE /personnes/:id`**
- **URL** : `http://localhost:3000/personnes/3`
- **Méthode** : `DELETE`
📌 **Réponse attendue** :
```json
{
    "message": "success"
}
```

---

## 🔐 5. Ajout de la Sécurité avec Keycloak (Optionnel)
- **Installation** :
```sh
npm install keycloak-connect
```
- **Configuration du fichier `keycloak-config.json`**
- **Protection des routes avec `keycloak.protect()`**

---

## 🎯 6. Conclusion
✅ **Express.js** permet de créer une API REST rapidement.
✅ **SQLite3** est un bon choix pour une base de données simple.
✅ **Postman** facilite les tests API.
✅ **Authentification avec Keycloak** possible pour renforcer la sécurité.

🚀 **Auteur : DHOUIB Eya**  
📅 **Date : 11/02/2025**

