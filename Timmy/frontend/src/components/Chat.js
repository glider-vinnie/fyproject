import React, { useState } from 'react';
import styled from 'styled-components';
import Message from './Message';
import ChatInput from './ChatInput';
import axios from 'axios';

const ChatContainer = styled.div`
  width: 400px;
  height: 600px;
  background: white;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
  display: flex;
  flex-direction: column;
`;

const MessagesContainer = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 20px;
`;

function Chat() {
  const [messages, setMessages] = useState([]);

  const sendMessage = async (text) => {
    // Add user message
    setMessages(prev => [...prev, { text, sender: 'user' }]);

    try {
      const response = await axios.post('http://localhost:5000/api/chat', {
        message: text
      });

      const { response: botResponse, sentiment } = response.data;

      // Add bot message
      setMessages(prev => [...prev, {
        text: botResponse,
        sender: 'bot',
        sentiment: sentiment
      }]);
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <ChatContainer>
      <MessagesContainer>
        {messages.map((message, index) => (
          <Message key={index} {...message} />
        ))}
      </MessagesContainer>
      <ChatInput onSend={sendMessage} />
    </ChatContainer>
  );
}

export default Chat; 