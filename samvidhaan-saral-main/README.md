Samvidhaan Saral 🇮🇳⚖️
Samvidhaan Saral ("Simplified Constitution") is a web application that uses Google's Generative AI to demystify complex legal documents, starting with the Constitution of India. It transforms dense legal jargon into simple, understandable explanations, empowering every citizen to understand their rights and the laws that govern them.

This project was built for the Gen AI Exchange Hackathon.

(Feel free to replace this placeholder image with a real screenshot or GIF of your working application.)

## Key Features
AI-Powered Simplification: Leverages the Gemini AI model to translate complex legal text into plain English.

Structured Analysis: Provides more than just a summary. The output includes:

A Simplified Explanation of the text.

A bulleted list of Key Points.

A glossary of Defined Terms found within the text.

Interactive UI: A clean, responsive interface built with React for a seamless user experience.

Secure & Scalable Backend: A robust Flask backend with API key authentication and rate limiting to prevent abuse.

## Tech Stack
Frontend: React.js, HTML, CSS

Backend: Python, Flask

AI Engine: Google Gemini 1.5 Flash API

Database: MongoDB

Deployment: Docker, AWS (planned)

## Setup and Installation
To get a local copy up and running, follow these simple steps.

### Prerequisites
Python 3.8+

Node.js and npm

A Google AI (Gemini) API Key

### Installation
Clone the repository:

Bash

git clone https://github.com/rk-roshan-kr/samvidhaan-saral.git
cd samvidhaan-saral
Setup the Backend:

Bash

# Create and activate a Python virtual environment
python -m venv venv
source venv/bin/activate # On Windows, use `.\venv\Scripts\activate`

# Install Python dependencies
pip install -r requirements.txt 
(Note: You may need to create a requirements.txt file using pip freeze > requirements.txt)

Setup the Frontend:

Bash

# Navigate to the frontend directory
cd frontend

# Install npm packages
npm install
Configure Environment Variables:

In the root directory (samvidhaan-saral/), create a file named .env.

Add your Google Gemini API key to this file:

GOOGLE_API_KEY=your_google_ai_api_key_here
## How to Run
You will need two terminals running simultaneously.

Start the Backend Server:

From the root directory (samvidhaan-saral/):

Bash

python app.py
The backend will be running at http://127.0.0.1:5000.

Start the Frontend Application:

From the frontend/ directory:

Bash

npm start
The application will open in your browser at http://localhost:3000.







