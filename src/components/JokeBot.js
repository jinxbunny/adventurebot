import React, { Component } from 'react';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';

const theme = {
    background: '#f5f8fb',
    fontFamily: 'Helvetica Neue',
    headerBgColor: '#EF6C00',
    headerFontColor: '#fff',
    headerFontSize: '15px',
    botBubbleColor: '#EF6C00',
    botFontColor: '#fff',
    userBubbleColor: '#fff',
    userFontColor: '#4a4a4a',
};

class JokeBot extends Component {

    state = {
        loaded: false,
        joke: "",
        steps: [
            {
              id: '1',
              message: 'What is your name?',
              trigger: '2',
            },
            {
              id: '2',
              user: true,
              trigger: '3',
            },
            {
              id: '3',
              message: 'Hi {previousValue}!',
              trigger: '4',
            },
            {
                id: '4',
                message: 'Would you like to hear a joke?',
                trigger: '5',
            },
            {
                id: '5',
                options: [
                    { value: 1, label: 'Yes', trigger: '6' },
                    { value: 2, label: 'No', trigger: '7' },
                ]
            },
            {
                id: '6',
                message: '',
                end: true,
            },
            {
                id: '7',
                message: 'Ok, come back soon!',
                end: true,
            }
          ]
    }

    componentDidMount () {
        this.handleFetch()
    }

    handleFetch = async () => {
        let newJoke = ""

        await fetch('https://sv443.net/jokeapi/v2/joke/Any?type=single')
            .then(res => res.json())
            .then(data => {
                newJoke = data.joke; 
                this.setState({ joke: data.joke })
            })

        let newSteps = this.state.steps

        newSteps[5].message = newJoke

        this.setState({ steps: newSteps, loaded: true })
    }

    render () {
        return(
            <div>
                <ThemeProvider theme={theme} >
                    {this.state.loaded ? <ChatBot steps={this.state.steps} /> : <p>Loading...</p>}
                </ThemeProvider>
            </div>
        )
    }
}
export default JokeBot;