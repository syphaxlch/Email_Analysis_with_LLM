
const IS_PRODUCTION = true; // Passe à `false` en développement

if (IS_PRODUCTION) {
    console.log = console.warn = console.info = console.error = () => {};
}

let buttonCheckEnabled = false;

function loadFontAwesome() {
    const fontAwesomeLink = document.createElement('link');
    fontAwesomeLink.rel = 'stylesheet';
    fontAwesomeLink.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css';
    document.head.appendChild(fontAwesomeLink);
}

// Charger Font Awesome au début
loadFontAwesome();


function formatText(text) {
    // Remplacer les textes en gras par des balises <strong> avec une classe pour la couleur rouge
    let formattedText = text.replace(/\*\*(.*?)\*\*/g, '<br/><strong style="color: #ff5722">$1</strong>');

    // Remplacer les astérisques par des balises <br> pour les retours à la ligne
    formattedText = formattedText.replace(/\*/g, '<br/>');

    // Ajouter des balises <div> autour du texte formaté
    formattedText = `<div style="overflow-y: scroll;height: 300px">${formattedText}</div>`;

    return formattedText;
}


//Creation de popup
// Fonction pour créer le popup
function createPopup() {
    // Vérifie si le popup existe déjà
    if (document.getElementById('popup-alert')) return;

    // Crée le conteneur principal du popup
    const popup = document.createElement('div');
    popup.id = 'popup-alert';
    popup.style.display = 'none'; // Caché par défaut
    popup.style.position = 'fixed';
    popup.style.top = '50%';
    popup.style.left = '50%';
    popup.style.transform = 'translate(-50%, -50%)';
    popup.style.background = 'white';
    popup.style.border = '2px solid red';
    popup.style.padding = '20px';
    popup.style.zIndex = '1000';
    popup.style.boxShadow = '0px 4px 8px rgba(0, 0, 0, 0.2)';
    popup.style.width = '600px';
    popup.style.height = '600px';
    popup.style.background = 'white';

    // Contenu du popup
    popup.innerHTML = `
        <h2 style="color: red;">Attention : Email Dangereux</h2>
        <p id="popup-details" style="margin-bottom: 20px;">Détails de l'email dangereux ici...</p>
        <button id="popup-close" style="padding: 10px 20px; background: red; color: white; border: none; border-radius: 5px; cursor: pointer;">Fermer</button>
    `;

    // Ajoute le popup au body
    document.body.appendChild(popup);

    // Ajoute un événement pour fermer le popup
    document.getElementById('popup-close').addEventListener('click', () => {
        popup.style.display = 'none';
    });

}

// Fonction pour afficher le popup avec des détails spécifiques
function showPopup(details) {
    const popup = document.getElementById('popup-alert');
    if (!popup) return;

    // Remplit les informations dans le popup
    const popupDetails = document.getElementById('popup-details');
    popupDetails.innerHTML = `
        <strong>Expéditeur:</strong> ${details.sender} <br/>
        <strong>Sujet:</strong> ${details.subject} <br/><br/>
        <h2>Analyse générée par une intelligence artificielle </h2> ${details.reason}`;

    // Affiche le popup
    popup.style.display = 'block';
}

// Fonction pour ajouter un bouton "Check" à chaque email
function addCheckButtons() {
    const emailItems = document.querySelectorAll('tr.zA'); // Sélectionne les lignes d'email
    emailItems.forEach((emailItem) => {
        let checkButton;
        const senderCell = emailItem.querySelector('.yX.xY');
        if (!emailItem.querySelector('.check-btn')) {
            if (emailItem.style.backgroundColor !== 'yellow' && emailItem.style.backgroundColor !== 'rgb(168, 224, 20)' && emailItem.style.backgroundColor !== 'red') {
                checkButton = document.createElement('button');
                checkButton.innerText = 'Check';
                checkButton.className = 'check-btn';
                checkButton.onclick = () => checkEmailContent(emailItem);
                // Personnalisation du bouton
                checkButton.style.backgroundColor = 'blue';  // Arrière-plan bleu
                checkButton.style.color = 'white';  // Texte blanc pour plus de contraste
                checkButton.style.marginRight = '15px';  // Margin à droite de 5px
                checkButton.style.padding = '5px 10px';  // Un peu de padding pour plus d'espace autour du texte
                checkButton.style.border = 'none';  // Retirer les bordures du bouton
                checkButton.style.borderRadius = '5px';  // Bordures arrondies pour le bouton
                checkButton.style.cursor = 'pointer';
                // Ajoute le bouton après l'expéditeur
                senderCell.appendChild(checkButton);

            } else if (emailItem.style.backgroundColor === 'yellow') {
                // Vérifiez si une icône de chargement existe déjà
                if (emailItem.querySelector('.loading-icon')) {
                    return; // Ne pas réajouter l'icône si elle existe déjà
                }

                // Crée une icône de chargement
                const loadingIcon = document.createElement('i');
                loadingIcon.className = 'fa fa-circle-o-notch fa-spin loading-icon';
                loadingIcon.style.fontSize = '16px';
                loadingIcon.style.color = 'blue';
                loadingIcon.style.marginRight = '10px';

                // Ajoute l'icône à côté de l'expéditeur
                if (senderCell) {
                    senderCell.appendChild(loadingIcon);
                }
            } else if (emailItem.style.backgroundColor === 'rgb(168, 224, 20)') {
                // Vérifiez si une icône de chargement existe déjà

                if (emailItem.querySelector('.validation-icon')) {
                    return; // Ne pas réajouter l'icône si elle existe déjà
                }
                // Crée une icône de chargement
                const validationIcon = document.createElement('span');
                validationIcon.className ='fa fa-check validation-icon';
                validationIcon.style.fontSize = '16px';
                validationIcon.style.color = 'rgb(8,115,20)';
                validationIcon.style.marginRight = '10px';

                // Ajoute l'icône à côté de l'expéditeur
                 if (senderCell) {
                    senderCell.appendChild(validationIcon);
                }
            }
        }
    });
}







// Fonction pour scraper le contenu de l'email
function checkEmailContent(emailItem) {
    // Clique sur l'email pour ouvrir son contenu
    emailItem.click();
    // Attendre que l'email se charge puis récupérer le contenu
    setTimeout(() => {
        const emailContent = document.querySelector('div.a3s.aiL'); // Sélection de l'HTML de l'email
        if (emailContent) {
            const emailText = emailContent.innerText; // Récupérer uniquement le texte du message

            // Exemple : colorer l'email pour indiquer qu'il a été vérifié
            emailItem.style.backgroundColor = 'yellow';

            // Envoyer le contenu à un serveur Python
            sendEmailContentToServer(emailItem, emailText);
            window.history.back();
        }
    }, 1000); // Timeout pour laisser Gmail charger l'email
}





function sendEmailContentToServer(emailItem, emailText) {
    try {
        fetch('http://localhost:5000/email-content', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({content: emailText}), // Envoie uniquement le texte de l'email
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Erreur HTTP : ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                // Vérifie si le message est dangereux ou non
                if (data.analysis === 'false') {
                    emailItem.style.backgroundColor = 'rgb(168, 224, 20)'; // Si ce n'est pas dangereux

                    let loadingIcon = emailItem.querySelector('.loading-icon');
                    if (loadingIcon) {
                        loadingIcon.remove();
                    }
                } else {
                    emailItem.style.backgroundColor = 'red'; // Si c'est dangereux
                    let loadingIcon = emailItem.querySelector('.loading-icon');
                    if (loadingIcon) {
                        loadingIcon.remove();
                    }
                    const senderCell = emailItem.querySelector('.yX.xY');
                    showPopup({
                        sender: senderCell.innerText.trim(),
                        subject: emailItem.querySelector('.bog').innerText.trim(),
                        reason: formatText(data.detailed_analysis),
                    });
                }
            })

    } catch (error) {
        console.error('Erreur dans sendEmailContentToServer:', error);
    }
}
// Ajouter les boutons lorsque la page est prête
window.onload = function() {
    if(buttonCheckEnabled === false) {
        createPopup(); // Crée le popup au chargement
        setInterval(addCheckButtons, 100); // Vérifie toutes les 3 secondes
    }
};
