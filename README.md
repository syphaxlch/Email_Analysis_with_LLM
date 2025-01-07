# 📧 Phishing Email Analyzer  

**Phishing Email Analyzer** est un outil conçu pour aider les utilisateurs à détecter les e-mails de phishing directement dans Gmail. Cette application combine une extension Chrome et un backend Flask, utilisant le modèle local **LLaMA 3** via **LM Studio** pour analyser les e-mails tout en préservant la confidentialité des données.  

## ✨ Fonctionnalités  
  🟢 Ajout d'un bouton "Check" dans Gmail pour analyser les e-mails.  
  ✅ Les e-mails jugés sûrs sont colorés en **vert**, tandis que les e-mails dangereux sont colorés en **rouge**, avec un **popup explicatif**.  
  🔒 Analyse locale via **LLaMA 3** avec **LM Studio**, garantissant confidentialité et sécurité.  

## 🛠️ Technologies utilisées  
- **Backend** : [Flask](https://flask.palletsprojects.com/), [LangChain](https://www.langchain.com/), [LM Studio](https://lmstudio.ai/).  
- **Frontend** : Extension Chrome intégrée à Gmail.  

## ⚙️ Installation et configuration  

### 1️⃣ Clonez le dépôt  
1. Clonez le dépôt GitHub :  
   `git clone https://github.com/syphaxlch/Phishing_Email_Analyzer.git`  
2. Accédez au répertoire :  
   `cd Phishing_Email_Analyzer`  

### 2️⃣ Installez les dépendances backend  
1. Installez les dépendances nécessaires avec la commande :  
   `pip install -r requirements.txt`  

### 3️⃣ Configurez LM Studio  
1. Téléchargez et installez LM Studio depuis [https://lmstudio.ai/](https://lmstudio.ai/).  
2. Importez le modèle **LLaMA 3** et assurez-vous qu'il fonctionne correctement.  

### 4️⃣ Lancez le backend Flask  
1. Démarrez le serveur Flask avec la commande :  
   `python server.py`  

### 5️⃣ Installez l'extension Chrome  
1. Accédez à `chrome://extensions/` dans Google Chrome.  
2. Activez le mode développeur.  
3. Cliquez sur "Charger l'extension non empaquetée".  
4. Sélectionnez le dossier `chrome-extension`.  

### 6️⃣ Testez l'outil  
1. Ouvrez Gmail dans votre navigateur.  
2. Sélectionnez un e-mail.  
3. Cliquez sur le bouton **Check** ajouté par l'extension pour analyser l'e-mail.  

## 📂 Structure du projet  
- **`server.py`** : Serveur Flask pour le backend.  
- **`chrome-extension/`** : Code source de l'extension Chrome.  
- **`requirements.txt`** : Dépendances Python.  
- **`README.md`** : Documentation du projet.  
