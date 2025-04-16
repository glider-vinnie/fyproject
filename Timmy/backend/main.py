from flask import Flask, request, jsonify
from flask_cors import CORS
from app.chatbot import ChatBot
from app.sentiment import SentimentAnalyzer
from app.predictor import Predictor

app = Flask(__name__)
CORS(app)

chatbot = ChatBot()
sentiment_analyzer = SentimentAnalyzer()
predictor = Predictor()

@app.route('/api/chat', methods=['POST'])
def chat():
    data = request.json
    user_message = data.get('message', '')
    
    # Get chatbot response
    bot_response = chatbot.get_response(user_message)
    
    # Analyze sentiment
    sentiment = sentiment_analyzer.analyze(user_message)
    
    # Get prediction (if applicable)
    prediction = predictor.predict(user_message)
    
    return jsonify({
        'response': str(bot_response),
        'sentiment': sentiment,
        'prediction': prediction
    })

if __name__ == '__main__':
    app.run(debug=True, port=10000) 