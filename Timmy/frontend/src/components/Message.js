import React from 'react';
import styled from 'styled-components';

const MessageContainer = styled.div`
  display: flex;
  justify-content: ${props => props.sender === 'user' ? 'flex-end' : 'flex-start'};
  margin-bottom: 10px;
`;

const MessageBubble = styled.div`
  max-width: 70%;
  padding: 10px 15px;
  border-radius: 20px;
  background-color: ${props => props.sender === 'user' ? '#0084ff' : '#e9ecef'};
  color: ${props => props.sender === 'user' ? 'white' : 'black'};
`;

const SentimentIndicator = styled.div`
  font-size: 12px;
  color: #666;
  margin-top: 5px;
`;

function Message({ text, sender, sentiment }) {
  return (
    <MessageContainer sender={sender}>
      <div>
        <MessageBubble sender={sender}>
          {text}
        </MessageBubble>
        {sentiment && (
          <SentimentIndicator>
            Sentiment: {sentiment.sentiment} ({sentiment.polarity.toFixed(2)})
          </SentimentIndicator>
        )}
      </div>
    </MessageContainer>
  );
}

export default Message; 