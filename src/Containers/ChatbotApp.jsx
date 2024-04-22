import React from 'react'
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
    margin-top:5rem;
`


const ChatbotApp = () => {
  return (
    <MainContainer>
        <span>
            <h1>Preguntame lo que quieras</h1> <br />
            <p>Sobre la Ley EAT🤔</p>
        </span>
        <InputContainer>
            <Input />
        </InputContainer>
        
    </MainContainer>
  )
}

export default ChatbotApp