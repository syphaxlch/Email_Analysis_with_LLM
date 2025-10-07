# 📧 Phishing Email Analyzer

**Phishing Email Analyzer** is a tool designed to help users detect phishing emails directly within Gmail. This application combines a Chrome extension and a Flask backend, using the local **LLaMA 3** model via **LM Studio** to analyze emails while maintaining full data privacy.

## ✨ Features

🟢 Adds a **"Check"** button in Gmail to analyze emails.
✅ Emails marked as safe are highlighted in **green**, while suspicious ones are highlighted in **red**, with an **explanatory popup**.
🔒 Local analysis using **LLaMA 3** through **LM Studio**, ensuring complete confidentiality and security.

## 🔧 Technologies Used

* **Backend**: [Flask](https://flask.palletsprojects.com/), [LangChain](https://www.langchain.com/), [LM Studio](https://lmstudio.ai/).
* **Frontend**: Chrome extension integrated with Gmail.

## ⚙️ Installation and Setup

### 1️⃣ Clone the Repository

1. Clone the GitHub repository:

   ```bash
   git clone https://github.com/syphaxlch/Phishing_Email_Analyzer.git
   ```
2. Navigate to the directory:

   ```bash
   cd Email_Analysis_with_LLM
   ```

### 2️⃣ Install Backend Dependencies

Install the required Python dependencies:

```bash
pip install -r requirements.txt
```

### 3️⃣ Set Up LM Studio

1. Download and install **LM Studio** from [https://lmstudio.ai/](https://lmstudio.ai/).
2. Import the **LLaMA 3** model and ensure it runs correctly.

### 4️⃣ Run the Flask Backend

Start the Flask server using:

```bash
python server.py
```

### 5️⃣ Install the Chrome Extension

1. Go to `chrome://extensions/` in your Chrome browser.
2. Enable **Developer Mode**.
3. Click on **Load unpacked**.
4. Select the `chrome-extension` folder.

### 6️⃣ Test the Tool

1. Open **Gmail** in your browser.
2. Select an email.
3. Click the **Check** button added by the extension to analyze the email.

## 🎬 Demo / Visual Preview

[Watch the demo video](https://syphax-lc.vercel.app/llm-demo.mp4) to see **Phishing Email Analyzer** in action — de l’analyse d’e-mails à l’affichage du résultat via l’extension Gmail.

