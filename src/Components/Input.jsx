import React, { useState } from 'react';
import styled from 'styled-components';
import PrimaryButton from './PrimaryButton';

const InputWrapper = styled.div`
  display: flex;
  align-items: center; /* Asegura que los elementos hijos se centren verticalmente */
  justify-content: center; 

  border-radius: 20px;
  background-color: #f4f4f433;
  padding: 10px;
  width: 50rem;
  border: 1px solid #b1b1b195;
  transition: height 0.3s ease; /* Transición para el cambio de ancho */

  @media only screen and (max-width: 820px) {
    width: 80%;
  }
`;

const StyledTextarea = styled.textarea`
  flex: 1;
  border: none;
  outline: none;
  background: none;
  resize: none;
  overflow: auto;
  padding-left: 10px; 
  padding-top: 15px;
`;

const Input = ({ sharedStatus,changeSharedStatus}) => {
  const [inputValue, setInputValue] = useState('');
  const [withText, setWithText] = useState(false)

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };



  const handleButtonClick = () => {
    console.log("El botón ha sido clicado desde el hijo");
    changeSharedStatus(!sharedStatus);
    // API CALL TO OPENAI, ADEMAS SI SE HACE UN CLICK QUE SE BLOQUEE EL ELEMENTO
  };


  return (
    <InputWrapper >
        <StyledTextarea
          placeholder="¿Qué dudas tienes?"
          value={inputValue}
          onChange={handleInputChange}
        />
        <PrimaryButton text="Pruébalo" onClick={handleButtonClick} />
    </InputWrapper>
  );
};

export default Input;
