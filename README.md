# Phishing Email Analyzer

**Phishing Email Analyzer** est un outil conçu pour aider les utilisateurs à détecter les e-mails de phishing directement dans Gmail. Cette application combine une extension Chrome et un backend Flask, utilisant le modèle local **LLaMA 3** via **LM Studio** pour analyser les e-mails tout en préservant la confidentialité des données.

---

## 🚀 Fonctionnalités

- **Analyse intelligente des e-mails** :
  - Ajout d'un bouton "Check" dans Gmail.
  - Les e-mails jugés sûrs sont colorés en **vert**.
  - Les e-mails jugés dangereux sont colorés en **rouge**, accompagnés d'un **popup explicatif** détaillant les risques.

- **Modèle local sécurisé** :
  - Utilisation de **LLaMA 3** via **LM Studio** pour effectuer l'analyse localement, garantissant une sécurité et une confidentialité totales.

---

## 🛠️ Technologies utilisées

- **Backend** :
  - [Flask](https://flask.palletsprojects.com/) : API pour interagir avec l'extension.
  - [LangChain](https://www.langchain.com/) : Framework pour structurer les interactions avec le modèle.
  - [LM Studio](https://lmstudio.ai/) : Interface pour héberger et interagir avec **LLaMA 3**.

- **Frontend** :
  - Extension Chrome intégrée à Gmail.

---

## 🧩 Installation et configuration

### 1. **Clonez le dépôt** :
```bash
git clone https://github.com/syphaxlch/Phishing_Email_Analyzer.git
cd Phishing_Email_Analyzer
