predictor = Predictor()

# Sample training data (texts and corresponding labels)
texts = ["I love coding", "Python is great", "I hate bugs", "Debugging is hard"]
targets = [5.0, 4.8, 1.0, 2.0]

# Train the model
predictor.train(texts, targets)

# Predict using a new input
result = predictor.predict("I enjoy writing Python code")
print("Prediction:", result)
