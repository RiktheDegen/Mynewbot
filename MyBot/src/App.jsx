import React, { useState, useEffect } from 'react';
import Mybot from './Mybotbckend';
import './App.css'

const AppEmbed = (props) => {
  const [collapsed, setCollapsed] = useState(true);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [localAssistantId, setLocalAssistantId] = useState('');

  useEffect(() => {
    // 1. Get the script tag element
    const scriptTag = document.querySelector('script[src*="BotEmbed.js"]');
  
    // 2. Extract configuration attributes
    // 3. Initialize the chat bot with the extracted configuration
    // Update the state accordingly
    setLocalAssistantId(assistantId);
  
    // ...
  
  }, []);

  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };


  return (
    <div >
      <Mybot
        assistantId= {props.assistantId}
        // title={title}
        // theme={theme}
      />
    </div>
  );

};


export default AppEmbed;
