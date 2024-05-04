import React, {useState, useEffect} from 'react'
import styled, {keyframes} from 'styled-components'

import Input from '../Components/Input';



const appearAnimation = keyframes`
  0% {
    opacity: 0;
    transform: translateX(0);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;



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
  background-color: #f0f0ff5a;
  backdrop-filter: blur(10px);
  border-radius: 8px;
  border: 1px solid  #b0b0b036;
  width: 50rem;
  height: 30vh;
  margin-bottom: 10px;

  padding: 1rem;

  & > h1 {
    font-size: 1.3rem;
    background: linear-gradient(315deg, #66008e 40%, #000276 80%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: ${appearAnimation} 5s forwards;
  }
`;

const ChatBubbleContainer = styled.div`
  display:flex;
  justify-content:center;

  width:50rem;
  align-items: center;
  justify-content: center;
  width: 100%;

  margin-top: 10rem;
  
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
                  <h1>{"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tristique tincidunt ante a blandit. Praesent vehicula justo magna, eu feugiat sem consectetur id. Aliquam vehicula consectetur sapien. Etiam in libero eros. Suspendisse non facilisis libero. Donec suscipit blandit nisl eu ultrices. Etiam id turpis velit. Sed placerat dui tincidunt, placerat dui placerat, ornare sapien. Donec tempor, elit ut dictum congue, mauris leo lobortis odio, vel lacinia odio lacus non justo. Proin tellus ex, gravida ac est vitae, lacinia consequat velit."}</h1>
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