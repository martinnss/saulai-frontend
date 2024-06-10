import React, { useState , useEffect} from 'react';
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
  border: ${(props) => (props.isAsked ?   '1px solid #b1b1b10' : '1px solid #b1b1b195'  )};
  transition: height 0.3s ease; 
  
  

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

const InputChatbot = ({ sharedStatus,changeSharedStatus, setAnswer}) => {
  const [withText, setWithText] = useState(false)

  const [userPrompt, setUserPrompt] = useState('');
  const [finalOutput, setFinalOutput] = useState('');

  const handleInputChange = (e) => {
    setUserPrompt(e.target.value);
  };


  const handleButtonClick = async () => {
    console.log("El botón ha sido clicado desde el hijo");

    if (!userPrompt){
      alert("Introduce alguna duda o consulta")

    } else {
      
      setFinalOutput(userPrompt)

      if (sharedStatus){
        window.location.reload();
      }
      
      changeSharedStatus(!sharedStatus);
    }

  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleButtonClick();
    }
  };
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        await new Promise(resolve => setTimeout(resolve, 3000));
        
        const response = await fetch('https://martinnss.pythonanywhere.com/chat_saulai', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ user_prompt: finalOutput }),
        });

        if (response.ok) {
          const data = await response.json();
          console.log("Exisoto")
          console.log(data)
          setAnswer(data.saulai_output);
        } else {
          console.error('Error al obtener la respuesta de la API');
        }
      } catch (error) {
        console.error('Error de red:', error);
      }
    };

    // Verifica si hay un prompt de usuario antes de hacer la llamada a la API
    if (finalOutput) {
      fetchData();
    }
  }, [finalOutput]);

  return (
    sharedStatus ? (
      <InputWrapper isAsked = {sharedStatus}>
        <PrimaryButton text="Otra pregunta" onClick={handleButtonClick} />
      </InputWrapper>
    ) : (
      <InputWrapper>
      <StyledTextarea
        placeholder="¿Qué dudas tienes?"
        value={userPrompt}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      />
      <PrimaryButton text="Ask Me" onClick={handleButtonClick} />
    </InputWrapper>
    )
  );
};

export default InputChatbot;
