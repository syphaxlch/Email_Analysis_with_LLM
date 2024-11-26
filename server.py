from flask import Flask, request, jsonify
from flask_cors import CORS
import requests
# Importation des dépendances, on instancie notre modèle!
import langchain
from langchain_openai import ChatOpenAI

from langchain_core.messages import HumanMessage, SystemMessage
from langchain_core.output_parsers import StrOutputParser
app = Flask(__name__)
CORS(app)  # Autorise les requêtes venant de ton extension Chrome

@app.route('/email-content', methods=['POST'])
def email_content():
    # Récupérer le contenu de la requête
    data = request.get_json()

    # Récupérer le texte brut du message
    message_text = data.get('content', '')

    # Initialiser le modèle LLaMA 3
    model = ChatOpenAI(temperature = 0.001,base_url="http://localhost:1234/v1/", api_key="llama")
    # On définit une séquence de message composées du message système (par le modèle pour le modèle) et humain (comme s'il provenait d'un utilisateur).
    messages = [
         SystemMessage(content="""Est-ce que ce courriel est dangereux ? Réponds uniquement par true ou false. Voici ce que tu dois examiner :

                                  Le courriel demande-t-il des informations sensibles ?
                                  (Mot de passe, numéros de carte bancaire, identifiants, etc.)

                                  Contient-il des liens ou pièces jointes suspects ?
                                  (Liens raccourcis, noms de fichiers étranges, extensions non attendues.)

                                  Y a-t-il des fautes dans le texte ou des logos de mauvaise qualité ?

                                  Les adresses e-mail ou URL sont-elles douteuses ?
                                  (Format ou orthographe inhabituel, par exemple : "paypa1.com" au lieu de "paypal.com").

                                  Y a-t-il une pression pour agir rapidement ou une promesse irréaliste ?
                                  (Exemples : "Votre compte sera bloqué dans 24h", "Gagnez un iPhone en répondant maintenant.")

                                  La réponse attendue devrais etre repondu par:
                                  Si le courriel présente un risque potentiel : Réponds true.
                                  Si le courriel ne présente aucun risque évident : Réponds false.
                                  EN UN SEUL MOT.
         """),
         HumanMessage(content=message_text),
    ]
    parser = StrOutputParser()
    result = model.invoke(messages)
    parser.invoke(result)
    analysis = parser.invoke(result)

    # Étape 2 : Si le message est jugé dangereux, demander des détails
    if analysis.strip().lower() == "true":
        detailed_messages = [
            SystemMessage(content="""Explique pourquoi ce message est classé comme dangereux.
                                    """),
            HumanMessage(content=message_text),
        ]
        detailed_result = model.invoke(detailed_messages)
        detailed_analysis = parser.invoke(detailed_result)
        # Réponse avec détails
        return jsonify({
            'status': 'success',
            'message': 'Contenu analysé avec succès.',
            'analysis': analysis,
            'detailed_analysis': detailed_analysis
        })

    # Réponse si le message n'est pas dangereux
    return jsonify({
        'status': 'success',
        'message': 'Contenu analysé avec succès.',
        'analysis': analysis
    })
if __name__ == '__main__':
    app.run(port=5000)
