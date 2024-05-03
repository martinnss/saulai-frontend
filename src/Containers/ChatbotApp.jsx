import React, {useState, useEffect} from 'react'
import styled from 'styled-components'

import Input from '../Components/Input';

const MainContainer = styled.div`
  display: flex;

  height: 100vh; 
  flex-direction: column; 
  text-align: center;

  & > span {
    margin-top:10%
  }

  & > span > h1 {
    font-size: 3.3rem;
    background: linear-gradient(315deg, #8a50e1 40%, var(--blue) 80%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  & > span > p {
    font-size: 1.5rem;
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


const ChatbotApp = () => {
  const [answer, setAnswer]  = useState('');

  const [sharedStatus, setSharedStatus] = useState(false);

  useEffect(() => {
    console.log('El estado ha cambiado desde el padre:', sharedStatus);
  }, [sharedStatus]);


  return (
    <MainContainer>
        <span>
            <h1>Preguntame lo que quieras</h1> <br />
            <p>Sobre la Ley EAT🤔</p>
        </span>
        <InputContainer isAsked={sharedStatus}  >
            <Input  sharedStatus={sharedStatus} changeSharedStatus={setSharedStatus}  />
        </InputContainer>
        
    </MainContainer>
  )
}

export default ChatbotApp