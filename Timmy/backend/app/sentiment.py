from textblob import TextBlob

class SentimentAnalyzer:
    def analyze(self, text):
        analysis = TextBlob(text)
        
        # Get polarity (-1 to 1)
        polarity = analysis.sentiment.polarity
        
        # Classify sentiment
        if polarity > 0:
            sentiment = "positive"
        elif polarity < 0:
            sentiment = "negative"
        else:
            sentiment = "neutral"
            
        return {
            'sentiment': sentiment,
            'polarity': polarity
        } 