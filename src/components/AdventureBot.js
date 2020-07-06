import React from 'react';
import { ThemeProvider } from 'styled-components';
import ChatBot from 'react-simple-chatbot';

const theme = {
  background: ' ',
  fontFamily: 'Helvetica Neue',
  headerBgColor: '#86af49',
  headerFontColor: '#fff',
  headerFontSize: '15px',
  botBubbleColor: '#405d27',
  botFontColor: '#fff',
  userBubbleColor: '#fff',
  userFontColor: '#4a4a4a',
}

const BubbleStyle = {

}
const IconStyle = {
  borderRadius: '25px',
  width: '35px',
}

function AdventureBot(props) {

  const steps = [
    {
      id: 'Greeting',
      message: 'Greetings traveller, I am Adventure Bot',
      trigger: 'Ask Name',
    },
    {
      id: 'Ask Name',
      message: 'and what do they call you?',
      trigger: 'Name Requested',
    },
    {
      id: 'Name Requested',
      user: true,
      trigger: () => {
        props.switchBot();
        return 'Welcome';
      }
    },
    //Ready?
    {
      id: 'Welcome',
      message: 'Well I have a quest for you {previousValue}, are you ready to begin?',
      trigger: 'ask 1',
    },
    {
      id: 'ask 1',
      options: [
        { value: 1, label: `I'm a born adventurer!`, trigger: 'Start0' },
        { value: 2, label: `I'm wary`, trigger: 'Wary' },
      ],
    },
    //..Unsure
    {
      id: 'Wary',
      message: 'Being wary is wise but I will be your guide',
      trigger: 'ask 2',
    },
    {
      id: 'ask 2',
      options: [
        { value: 1, label: `Let's Go!`, trigger: 'Start0' },
        { value: 2, label: `Not now`, trigger: 'Exit1' },
      ],
    },
    //ENDINGs!
    {
      id: 'Exit1',
      message: 'Good day traveler, I hope we cross paths again',
      trigger: 'Greeting',
    },
    {
      id: 'Exit2',
      message: 'You came close, maybe next time traveler',
      trigger: 'Greeting',
    },
    //START!
    {
      id: 'Start0',
      message: `Very well, let's begin`,
      trigger: 'Start1',
    },
    {
      id: 'Start1',
      message: 'You are in a forrest',
      trigger: () => {
        props.switchQuest1();
        return 'Start2';
      }
    },
    {
      id: 'Start2',
      message: 'Ahead there is a Hut, to the right a River',
      trigger: 'ask 3',
    },
    {
      id: 'ask 3',
      options: [
        { value: 1, label: `Enter Hut`, trigger: 'Hut1' },
        { value: 2, label: `Head to River`, trigger: 'Exit1' },
      ],
    },
    //Hut1!
    {
      id: 'Hut1',
      message: `You cannot enter without a Key`,
      trigger: 'Start2',
    },
    //River1!
    {
      id: 'Hut1',
      message: `You cannot enter without a Key`,
      trigger: 'Start2',
    },
  ];

  return <ThemeProvider theme={theme}>
    <ChatBot
      steps={steps}
      botAvatar={props.botPic}
      bubbleStyle={BubbleStyle}
      avatarStyle={IconStyle}
      headerTitle="Adventure Bot"
      placeholder="Reply..."
      floating={false}
    />
  </ThemeProvider>
}

export default AdventureBot;