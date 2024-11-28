from flask import Flask, request, jsonify
from flask_cors import CORS
import os
from dotenv import load_dotenv
import random

load_dotenv()

app = Flask(__name__)
CORS(app)

# Mock interpretations for now - replace with AI integration later
INTERPRETATIONS = [
    "Os astros indicam que seu subconsciente está tentando lhe dizer algo profundo...",
    "Segundo antigas tradições místicas, sonhar com isso significa...",
    "A sabedoria ancestral sugere que este sonho está conectado com suas vidas passadas...",
    "As cartas do tarô revelam que seu caminho está alinhado com forças poderosas...",
]

@app.route('/interpret', methods=['POST'])
def interpret_dream():
    data = request.json
    dream_content = data.get('dream')
    name = data.get('name')
    
    if not dream_content or not name:
        return jsonify({'error': 'Missing dream content or name'}), 400
    
    # Mock interpretation - replace with AI call later
    interpretation = random.choice(INTERPRETATIONS)
    
    return jsonify({
        'name': name,
        'dream': dream_content,
        'interpretation': interpretation,
        'timestamp': import_time()
    })

if __name__ == '__main__':
    app.run(debug=True)