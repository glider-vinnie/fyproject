from textblob import TextBlob

class SentimentAnalyzer:
    def __init__(self):
        pass  
    def analyze(self, text):
        blob = TextBlob(text)
        polarity = blob.sentiment.polarity      
        subjectivity = blob.sentiment.subjectivity  

        # Determine sentiment label
        if polarity > 0:
            sentiment = "positive"
        elif polarity < 0:
            sentiment = "negative"
        else:
            sentiment = "neutral"

        # ML-friendly numeric features
        features = {
            'polarity': polarity,
            'subjectivity': subjectivity
        }

        # Complete result
        return {
            'sentiment': sentiment,
            'features': features
        }
