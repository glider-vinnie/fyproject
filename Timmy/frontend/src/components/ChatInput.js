import React, { useState } from 'react';
import styled from 'styled-components';

const InputContainer = styled.div`
  padding: 20px;
  border-top: 1px solid #e9ecef;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #e9ecef;
  border-radius: 20px;
  outline: none;
  
  &:focus {
    border-color: #0084ff;
  }
`;

function ChatInput({ onSend }) {
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim()) {
      onSend(message);
      setMessage('');
    }
  };

  return (
    <InputContainer>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message..."
        />
      </form>
    </InputContainer>
  );
}

export default ChatInput; 