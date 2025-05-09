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

const InputChatbot = ({ sharedStatus,changeSharedStatus, setAnswer, setUserMsg, setBotMsg}) => {
  const [withText, setWithText] = useState(false)

  const [userPrompt, setUserPrompt] = useState('');
  const [finalOutput, setFinalOutput] = useState('');
  const [isLoading, setIsLoading] = useState(false);


  const handleInputChange = (e) => {
    setUserPrompt(e.target.value);
  };


  const handleButtonClick = async () => {

    if (!userPrompt){
      alert("Introduce alguna duda o consulta")

    } else {
      
      setFinalOutput(userPrompt)
      setUserPrompt("");
      if (sharedStatus === false){
        changeSharedStatus(!sharedStatus);
      }
      
    }

  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' && !event.shiftKey && !isLoading) {
      event.preventDefault(); // Evita que se agregue una nueva línea
      setUserPrompt("");
      handleButtonClick();
    }
  };
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
                
        const response = await fetch('https://martinnss.pythonanywhere.com/chat_saulai', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ user_prompt: finalOutput }),
        });

        if (response.ok) {
          const data = await response.json();


          setAnswer(data.saulai_output);
          
          setBotMsg(prevMessages => [...prevMessages, data.saulai_output])

        } else {
          console.error('Error al obtener la respuesta de la API');
        }
      } catch (error) {
        console.error('Error de red:', error);
      } finally {
        setIsLoading(false); // Desactiva el estado de carga al finalizar la solicitud
      }
    };

    // Verifica si hay un prompt de usuario antes de hacer la llamada a la API
    if (finalOutput) {
      setUserMsg(prevMessages => [...prevMessages, finalOutput])
      fetchData();
    }
  }, [finalOutput]);

  return (
    <InputWrapper>
      <StyledTextarea
        placeholder="¿Qué dudas tienes?"
        value={userPrompt}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      />
      {
      !isLoading ? 
      <PrimaryButton text="Ask Me" onClick={handleButtonClick} /> :
      "..."}

    </InputWrapper>

  );
};

export default InputChatbot;
