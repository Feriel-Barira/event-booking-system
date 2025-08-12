# Event Booking System

Une application backend Node.js pour la gestion des événements, la réservation de billets, l’envoi automatique de QR codes par email, avec authentification sécurisée via JWT.

---

## Fonctionnalités

- Inscription & connexion avec JWT
- Création, lecture, modification et suppression d’événements
- Réservation de billets pour un événement
- Génération et envoi de QR code par email lors de la réservation
- Middleware d’authentification protégeant certaines routes

---

## Technologies utilisées

- Node.js
- Express.js
- MongoDB avec Mongoose
- JSON Web Tokens (JWT)
- bcrypt (hashing des mots de passe)
- nodemailer (envoi d’emails)
- qrcode (génération QR codes)
- dotenv (gestion des variables d’environnement)

---

## Prérequis

- Node.js (version 18+ recommandée)
- MongoDB (Atlas ici)
- Compte Gmail pour envoyer des emails (avec mot de passe d’application activé)
- Postman pour tester l’API

---

## Installation

```bash
# Cloner le dépôt
git clone https://github.com/Feriel-Barira/event-booking-system.git
cd event-booking-system

# Installer les dépendances
npm install
```
---

## Configuration 
Créer un fichier .env à la racine avec le contenu suivant (adapter vos valeurs) :
```bash
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
EMAIL_USER=your_gmail_address@gmail.com
EMAIL_PASS=your_gmail_app_password
```
---
## Démarrage
Lancer le serveur en mode développement avec nodemon :
```bash
npm run dev
```
---
## package.json
```bash
{
  "name": "event-booking-system",
  "version": "1.0.0",
  "description": "",
  "main": "server.js",
  "scripts": {
    "start": "node src/server.js",
    "dev": "nodemon src/server.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "type": "module",
  "dependencies": {
    "bcrypt": "^6.0.0",
    "dotenv": "^17.2.1",
    "express": "^5.1.0",
    "jsonwebtoken": "^9.0.2",
    "mongoose": "^8.17.1",
    "nodemailer": "^7.0.5",
    "qrcode": "^1.5.4"
  },
  "devDependencies": {
    "nodemon": "^3.1.10"
  }
}
```

