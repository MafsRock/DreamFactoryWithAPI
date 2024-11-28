from flask import Flask, request, jsonify
from flask_cors import CORS
import os
from dotenv import load_dotenv
import random

load_dotenv()

app = Flask(__name__)
CORS(app)

# Carregar a chave da API do ambiente
HUGGINGFACE_API_KEY = os.getenv("HUGGINGFACE_API_KEY")
API_URL = "https://api-inference.huggingface.co/models/gpt2"

# Função para chamar a API Hugging Face
def gerar_interpretacao(sonho):
    headers = {"Authorization": f"Bearer {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}"}
    payload = {"inputs": f"Um sonho descrito: {sonho}. Interprete com humor."}
    response = requests.post(API_URL, headers=headers, json=payload)
    if response.status_code == 200:
        return response.json()[0]['generated_text']
    return "Erro ao gerar interpretação."

@app.route('/interpret', methods=['POST'])
def interpret_dream():
    data = request.json
    dream_content = data.get('dream')
    name = data.get('name')
    
    if not dream_content or not name:
        return jsonify({'error': 'Missing dream content or name'}), 400
    
    
    return jsonify({
        'name': name,
        'dream': dream_content,
        'interpretation': interpretation,
        'timestamp': import_time()
    })

if __name__ == '__main__':
    app.run(debug=True)
