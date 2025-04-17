from chatterbot import ChatBot
from chatterbot.trainers import ChatterBotCorpusTrainer

class ChatBot:
    def __init__(self):
        self.bot = ChatBot('MyBot')
        self.trainer = ChatterBotCorpusTrainer(self.bot)
        #for training
        self.trainer.train("chatterbot.corpus.english")
    
    def get_response(self, message):
        return self.bot.get_response(message) 