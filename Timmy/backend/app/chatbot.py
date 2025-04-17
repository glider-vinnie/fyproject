from chatterbot import ChatBot
from chatterbot.trainers import ChatterBotCorpusTrainer

class MyChatBot:
    def __init__(self):
        self.bot = ChatBot('MyBot')
        self.trainer = ChatterBotCorpusTrainer(self.bot)
        self.trainer.train("chatterbot.corpus.english")
    
    def get_response(self, message):
        return self.bot.get_response(message)
