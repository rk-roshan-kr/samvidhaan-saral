# Samvidhaan Saral 🇮🇳⚖️

**Samvidhaan Saral** (Hindi for “Constitution – Simplified”) is a full-stack AI application that **transforms dense legal prose into everyday language** so that every Indian citizen can effortlessly understand their rights and the laws that protect them.

Built during the **Gen AI Exchange Hackathon**, the project combines a modern React UI, a lightweight Flask API, and Google Gemini 1.5 Flash to deliver clear, structured explanations of any legal passage – starting with the Constitution of India.

---

## ✨ Core Features

| Capability | Description |
|------------|-------------|
| **AI-Powered Simplification** | Gemini translates legal text into plain, concise English. |
| **Structured Output** | The response includes: **Simplified Explanation · Key Points · Defined Terms · Legal References**. |
| **GPT-style Interface** | A single input bar with smooth animations; results appear below without page reloads. |
| **Secure API** | Backend validates requests, protects your Gemini key via server-side calls, and supports rate-limiting. |
| **Responsive Design** | Works beautifully on desktop, tablet, and mobile. |

---

## 🏗 Architecture Overview

```
┌──────────┐     POST /api/simplify      ┌──────────────┐
│ Frontend │ ───────────────────────────▶│ Flask API    │
│ React    │◀── JSON response ────────── │ /analysis    │
└──────────┘                             │ Gemini Proxy │
      ▲                                   └─────▲──────┘
      │                                         │
User enters text                         Google Gemini LLM
```

1. **React Frontend** (./samvidhaan-saral/frontend) – collects input, displays results with smooth transitions.
2. **Flask Backend** (app.py) – exposes `/api/simplify`, forwards the text to Gemini, post-processes the response.
3. **Gemini 1.5 Flash** – large language model that performs the heavy-lifting NLP.

---

## 📂 Folder Structure (simplified)

```
 samvidhaan-saral-main/
 ├── app.py               # Flask entry-point
 ├── .env                 # Gemini API key (NOT committed)
 └── frontend/            # React client
     ├── public/
     └── src/
         ├── components/  # Header, InputForm, AnalysisResult …
```

---

## 🚀 Getting Started

### Prerequisites
* Python 3.8+
* Node.js 16+
* A Google AI (Gemini) API Key

### 1. Clone & Setup
```bash
# Clone repo
$ git clone https://github.com/rk-roshan-kr/samvidhaan-saral.git
$ cd samvidhaan-saral
```

### 2. Backend (Flask)
```bash
# Create virtual-env
$ python -m venv venv
$ source venv/bin/activate   # Windows: .\.venv\Scripts\activate

# Install deps
(venv) $ pip install -r requirements.txt  # or pip install flask openai google-generativeai
```

Create **.env** in the project root:
```
GOOGLE_API_KEY=your_google_api_key_here
```

### 3. Frontend (React)
```bash
$ cd frontend
$ npm install
```

### 4. Run Locally
Open **two terminals**:
```bash
# Terminal 1 – Flask API
$ python app.py          # → http://127.0.0.1:5000

# Terminal 2 – React dev-server
$ cd frontend
$ npm start              # → http://localhost:3000
```
Visit `localhost:3000`, paste any legal text, and press **Analyze**.

---

## 📑 API Reference
| Endpoint | Method | Payload |
|----------|--------|---------|
| `/api/simplify` | POST | `{ "text": "string" }` |

Response sample:
```json
{
  "simplifiedText": "…",
  "keyPoints": ["…"],
  "definedTerms": { "term": "definition" },
  "legalReferences": ["…"]
}
```

---

## 🛣️ Roadmap
- 🔒 OAuth / user accounts for saved analyses
- 🌐 Deploy on AWS with Docker & CI-CD
- 🇮🇳 Multilingual output (Hindi, regional languages)
- 💡 Explain Judgements & Bills in addition to the Constitution

---

## 🤝 Contributing
Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

1. Fork the repo
2. Create your feature branch (`git checkout -b feature/foo`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push (`git push origin feature/foo`)
5. Open a PR

---

## © License
This project is released under the **MIT License**.







