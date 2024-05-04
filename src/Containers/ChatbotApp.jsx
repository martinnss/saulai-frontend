import React, {useState, useEffect} from 'react'
import styled from 'styled-components'

import Input from '../Components/Input';

const MainContainer = styled.div`
  display: flex;

  height: 100vh; 
  flex-direction: column; 
  text-align: center;
  transition: all 0.5s ease;
  align-items: center;
  justify-content: center;

  & > span {
    margin-top: ${(props) => (props.isAsked ? '3%' : '10%')};
    transition: all 0.5s ease;
  }

  & > span > h1 {

    font-size: ${(props) => (props.isAsked ? '2.5rem' : '3.3rem')};
    background: linear-gradient(315deg, #8a50e1 40%, var(--blue) 80%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    transition: all 0.5s ease;
  }
  & > span > p {
    font-size: 1.5rem;
    transition: all 0.5s ease;
  }
`;

const InputContainer = styled.div`
    display:flex;
    justify-content:center;
    margin-top: ${(props) => (props.isAsked ? 'auto' : '5rem')};
    position:relative;

    bottom: ${(props) => (props.isAsked ? '3rem' :  'auto' )};

    transition:  bottom 25s; 
    @media only screen and (max-width: 820px) {

      position: relative; /* Asegura que el posicionamiento relativo se herede correctamente */

  }
`

const ChatBubble = styled.div`
  background-color: #f0f0ff;
  border-radius: 8px;
  border: 1px solid lightgray;
  width: 50rem;
  height: 30vh;
  margin-bottom: 10px;
`;

const ChatBubbleContainer = styled.div`
  display:flex;
  justify-content:center;

  width:50rem;
  align-items: center;
  justify-content: center;
  width: 100%;

  margin-top: 15rem;
  
  @media only screen and (max-width: 820px) {
    width: 80%;
  }
`;

const ChatbotApp = () => {
  const [answer, setAnswer]  = useState('');

  const [sharedStatus, setSharedStatus] = useState(false);

  useEffect(() => {
    console.log('El estado ha cambiado desde el padre:', sharedStatus);
  }, [sharedStatus]);


  return (
    <MainContainer isAsked={sharedStatus}>
        <span >
            <h1>{sharedStatus? "Saul AI":"Pregúntame lo que quieras"}</h1> <br />
            <p>{sharedStatus? "":"Sobre la Ley EAT🤔"}</p>
        </span>
        {
              sharedStatus ? (
                <ChatBubbleContainer >
                  <ChatBubble>
                    <h1>{"que pasa"}</h1>
                  </ChatBubble>
              </ChatBubbleContainer>
              ) : (
                <p></p>
              )
        }
        <InputContainer isAsked={sharedStatus}  >
            <Input  sharedStatus={sharedStatus} changeSharedStatus={setSharedStatus}  />
        </InputContainer>
        
    </MainContainer>
  )
}

export default ChatbotApp