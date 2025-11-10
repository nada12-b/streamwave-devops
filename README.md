# 🎬 StreamWave — DevOps Project (CI/CD + Docker + Cloud Deployment)

## 👩‍💻 Présentation du projet

**StreamWave** est une application web de streaming multimédia composée de deux parties :
- **Backend (Node.js + Express)** pour la gestion des utilisateurs, des contenus et de l’API principale.
- **Frontend (HTML/CSS/JavaScript)** pour l’interface utilisateur interactive.

Ce projet a été conçu dans le cadre du module **DevOps** afin de mettre en œuvre une **intégration et un déploiement continus (CI/CD)**, ainsi qu’un **déploiement cloud automatisé**.

---

## 🏗️ Architecture du projet

streamwave-devops/
│
├── backend/ # API REST en Node.js
│ ├── Dockerfile
│ └── src/
│
├── frontend/ # Interface utilisateur
│ ├── Dockerfile
│ └── index.html
│
├── docker-compose.yml 
└── .github/workflows/ci.yml 

---

## ⚙️ Technologies utilisées

| Outil / Service | Rôle |
|-----------------|------|
| **Docker** | Conteneurisation des services backend et frontend |
| **Docker Hub** | Registre pour stocker les images Docker |
| **GitHub Actions** | Intégration continue et pipeline de déploiement |
| **Railway / Render** | Déploiement cloud des conteneurs Docker |
| **Node.js / Express** | Backend API |
| **HTML / CSS / JS** | Interface utilisateur frontend |

---

## 🔁 Pipeline CI/CD (GitHub Actions)

Le pipeline CI/CD est défini dans le fichier `.github/workflows/ci.yml` et comprend les étapes suivantes :

1. **Checkout du dépôt**
2. **Installation de Docker Buildx**
3. **Connexion à Docker Hub** à l’aide de secrets GitHub (`DOCKER_USERNAME`, `DOCKER_PASSWORD`)
4. **Build & Push** des images Docker :
   - `streamwave-backend`
   - `streamwave-frontend`
5. **Test d’intégration via Docker Compose**
6. **Déploiement Cloud** (Railway / Render)

---

## 🚀 Déploiement Cloud

### 🌩️ Backend (API)
- Image : `nada2200/streamwave-backend:latest`
- Port exposé : **8080**
- Déployé sur : [Railway.app](https://railway.app) *(ou Render selon ton choix)*

### 💻 Frontend (Interface)
- Image : `nada2200/streamwave-frontend:latest`
- Port exposé : **80**

Lien public :
https://streamwave-backend.up.railway.app
https://streamwave-frontend.up.railway.app 


---

## ✅ Exécution locale

### 1️⃣ Cloner le dépôt
```bash
git clone https://github.com/nada12-b/streamwave-devops.git
cd streamwave-devops


