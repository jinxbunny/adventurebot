import React from 'react';
import { ThemeProvider } from 'styled-components';
import ChatBot from 'react-simple-chatbot';

const theme = {
  background: '#f5f8fb',
  fontFamily: 'Helvetica Neue',
  headerBgColor: '#FF9933',
  headerFontColor: '#fff',
  headerFontSize: '15px',
  botBubbleColor: '#EF6C00',
  botFontColor: '#fff',
  userBubbleColor: '#fff',
  userFontColor: '#4a4a4a',
}

const BubbleStyle = {

}
const IconStyle ={
  borderRadius: '25px',
  width: '35px',
}

function BotApp(props) {

  const steps = [
    {
      id: 'Hello',
      message: 'Hello, what is your name?',
      trigger: 'Ask Name',
    },
    {
      id: 'Ask Name',
      user: true,
      trigger: () => {
        props.switchBot();
        return 'Welcome';
      }
    },
    {
      id: 'Welcome',
      message: 'Hi {previousValue}, nice to chat with you today',
      trigger: '3',
    },
    {
      id: '3',
      options: [
        { value: 1, label: 'Number 1', trigger: '4' },
        { value: 2, label: 'Number 2', trigger: '5' },
        { value: 3, label: 'Number 3', trigger: '5' },
      ],
    },
    {
      id: '4',
      message: 'Good answer!',
      trigger: 'Hello',
    },
    {
      id: '5',
      message: 'Ok Whatever',
      trigger: 'Hello',
    },
  ];
  
  return <ThemeProvider theme={theme}>
    <ChatBot
    steps={steps}
    botAvatar= {props.botPic}
    bubbleStyle= {BubbleStyle}
    avatarStyle={IconStyle}
    headerTitle= "Friend Bot" 
    placeholder= "Type Here..."
    floating= {false}
    />
  </ThemeProvider>
}

export default BotApp;