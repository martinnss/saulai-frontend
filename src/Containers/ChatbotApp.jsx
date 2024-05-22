import React, {useState, useEffect, useRef} from 'react'
import styled, {keyframes} from 'styled-components'
import useOverflow from '../Hooks/useOverflow';

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
    margin-top: ${(props) => (props.isAsked ? '3%' : '0%')};
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
    margin-top: ${(props) => (props.isAsked ? '6rem' : '5rem')};
    position:relative;

    bottom: ${(props) => (props.isAsked ? '6rem' :  'auto' )};

    transition:  bottom 25s; 
    @media only screen and (max-width: 820px) {

      position: relative; /* Asegura que el posicionamiento relativo se herede correctamente */

  }
`

const ChatBubble = styled.div`
  display: flex;
  justify-content: center; 
  align-items: 'center'; 
  background-color: #f0f0ff5a;
  backdrop-filter: blur(10px);
  border-radius: 8px;
  border: 1px solid #b0b0b036;
  width: 50rem;
  height: 40vh;
  margin-bottom: 10px;
  padding: 1rem;
  overflow: auto;

  & > h1 {
    margin:0;
    font-size: 1.3rem;
    font-weight: 500;
    
    line-height: 1.6; 

    background: linear-gradient(315deg, #7039d6 40%, #793ac7 80%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: ${appearAnimation} 5s forwards;
  }
  
  &.overflow {
    align-items: flex-start;
    & > h1 {
      position: static;
      transform: none;
    }
  }
  &.no-overflow{
    align-items: center;
  }

  @media only screen and (max-width: 820px) {

    font-size: 1rem;
    height: 50vh;

  }
`;




const ChatBubbleContainer = styled.div`
  display:flex;
  justify-content:center;

  width:50rem;
  align-items: center;
  justify-content: center;
  width: 100%;

  margin-top: 2rem;
  
  @media only screen and (max-width: 820px) {
    width: 80%;
  }
`;



const MadeBy = styled.div`
position:fixed;
bottom: 10px;

& > a {
  margin-left:10px;
}

`



const ChatbotApp = () => {
  const [answer, setAnswer]  = useState(null);

  const [sharedStatus, setSharedStatus] = useState(false);

  const chatBubbleRef = useRef(null);
  const isOverflowing = useOverflow(chatBubbleRef, answer);

  useEffect(() => {
    console.log('El estado ha cambiado desde el padre:', sharedStatus);
  }, [sharedStatus]);

  const waitingStrings = [
    "Explorando las complejidades legales: soy tu asistente para entender cualquier aspecto de la ley EAT",
    "¡La ley a tu alcance! Convierte cualquier duda legal en una respuesta clara.",
    "Navegando por el laberinto legal. Hazme cualquier pregunta sobre la Ley EAT",
    "Estoy aquí para brindarte información precisa.",
    "Desbloqueando los misterios de la legislación. ¿Qué aspecto de la ley necesitas entender hoy?",
    "Convierte la complejidad legal en comprensión. Estoy aquí para ayudarte.",
    "Haciendo la ley más accesible. Puedo responder a tus preguntas sobre la Ley EAT",
    "¡Listo para descifrar la jerga legal! ¿En qué puedo ayudarte hoy?",
    "¡Prepárate para mi gran update! Pronto podrás hacer preguntas sobre cualquier texto y obtener respuestas instantáneas.",
    "En breve, podrás aprovechar nuestra nueva función de preguntas y respuestas para cualquier tipo de texto.",
    "¡Nuevas posibilidades en el horizonte! Estamos trabajando en una función que te permitirá hacer preguntas sobre cualquier texto y obtener respuestas detalladas.",
    "¡No te pierdas la próxima actualización! Estamos introduciendo una función de preguntas y respuestas que cambiará la forma en que interactúas con los textos.",
    "¡Grandes noticias en camino! Muy pronto podrás hacer preguntas sobre cualquier texto y obtener respuestas instantáneas.",
    "¡La espera está por terminar! Estamos a punto de lanzar una emocionante función que te permitirá hacer preguntas sobre cualquier texto y obtener respuestas en tiempo real.",
    "¡Una revolución en la interpretación de textos! Estamos desarrollando una función que te permitirá hacer preguntas sobre cualquier documento y obtener respuestas precisas al instante.",
    "¡Prepárate para explorar un nuevo mundo de conocimiento! Muy pronto podrás hacer preguntas sobre cualquier texto y recibir respuestas detalladas directamente desde nuestra plataforma."
  ];
  
  const indice = Math.floor(Math.random() * waitingStrings.length);
  return (
    <MainContainer isAsked={sharedStatus} className='main-container'>
        <span >
            <h1>{sharedStatus? "Saul AI":"Pregúntame lo que quieras"}</h1> <br />
            <p>
              {
              sharedStatus? 
                "":
                (
                  <div>
                    <p>
                      Sobre la Ley EAT
                      <img src="https://em-content.zobj.net/source/apple/271/thinking-face_1f914.png" alt="thinking emoji" style={{ height: '1.5rem' , marginTop: '2px' , position: 'fixed'}}  />
                      </p>
                  </div>
                )
              }</p>

        </span>
        {
              sharedStatus ? (
              <ChatBubbleContainer className='chat-bubble-container'  >
                <ChatBubble  ref={chatBubbleRef} className={isOverflowing ? 'overflow' : 'no-overflow'}  >
                  <h1>{answer ? answer: (
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' width='50' height='50' style={{ marginBottom: '10px' }}>
                        <defs>
                          <linearGradient id='gradient' x1='0%' y1='0%' x2='100%' y2='100%'>
                            <stop offset='40%' style={{ stopColor: '#66008e', stopOpacity: 1 }} />
                            <stop offset='80%' style={{ stopColor: '#000276', stopOpacity: 1 }} />
                          </linearGradient>
                        </defs>
                        <circle transform='rotate(0)' transform-origin='center' fill='none' stroke='url(#gradient)' stroke-width='7' stroke-linecap='round' stroke-dasharray='115 500' stroke-dashoffset='0' cx='50' cy='50' r='35'>
                          <animateTransform 
                            attributeName='transform'
                            type='rotate'
                            from='0'
                            to='360'
                            dur='2'
                            repeatCount='indefinite'>
                          </animateTransform>
                        </circle>
                      </svg>
                      <h1 style={{ margin: '0' }}>{waitingStrings[indice]}</h1>
                    </div>
                    ) }
                  </h1>
                </ChatBubble>
              </ChatBubbleContainer>
              ) : (
                <p></p>
              )
        }
        <InputContainer isAsked={sharedStatus}  >
            <Input  sharedStatus={sharedStatus} changeSharedStatus={setSharedStatus} setAnswer={setAnswer} />
        </InputContainer>

    <MadeBy>
      <p>Made by Martín Olivares💡</p>
      <a href="https://www.linkedin.com/in/martin-olivares-tapia/" target="_blank" rel="noopener noreferrer"  className='linkedin-logo'>
       <svg  xmlns="http://www.w3.org/2000/svg" height="24" width="21" viewBox="0 0 448 512"><path fill="#020061" d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg>
      </a>
      <a href="https://github.com/martinnss" target="_blank" rel="noopener noreferrer" className='github-logo' >
        <svg xmlns="http://www.w3.org/2000/svg" height="24" width="21" viewBox="0 0 448 512"><path fill="#020061" d="M448 96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96zM265.8 407.7c0-1.8 0-6 .1-11.6c.1-11.4 .1-28.8 .1-43.7c0-15.6-5.2-25.5-11.3-30.7c37-4.1 76-9.2 76-73.1c0-18.2-6.5-27.3-17.1-39c1.7-4.3 7.4-22-1.7-45c-13.9-4.3-45.7 17.9-45.7 17.9c-13.2-3.7-27.5-5.6-41.6-5.6s-28.4 1.9-41.6 5.6c0 0-31.8-22.2-45.7-17.9c-9.1 22.9-3.5 40.6-1.7 45c-10.6 11.7-15.6 20.8-15.6 39c0 63.6 37.3 69 74.3 73.1c-4.8 4.3-9.1 11.7-10.6 22.3c-9.5 4.3-33.8 11.7-48.3-13.9c-9.1-15.8-25.5-17.1-25.5-17.1c-16.2-.2-1.1 10.2-1.1 10.2c10.8 5 18.4 24.2 18.4 24.2c9.7 29.7 56.1 19.7 56.1 19.7c0 9 .1 21.7 .1 30.6c0 4.8 .1 8.6 .1 10c0 4.3-3 9.5-11.5 8C106 393.6 59.8 330.8 59.8 257.4c0-91.8 70.2-161.5 162-161.5s166.2 69.7 166.2 161.5c.1 73.4-44.7 136.3-110.7 158.3c-8.4 1.5-11.5-3.7-11.5-8zm-90.5-54.8c-.2-1.5 1.1-2.8 3-3.2c1.9-.2 3.7 .6 3.9 1.9c.3 1.3-1 2.6-3 3c-1.9 .4-3.7-.4-3.9-1.7zm-9.1 3.2c-2.2 .2-3.7-.9-3.7-2.4c0-1.3 1.5-2.4 3.5-2.4c1.9-.2 3.7 .9 3.7 2.4c0 1.3-1.5 2.4-3.5 2.4zm-14.3-2.2c-1.9-.4-3.2-1.9-2.8-3.2s2.4-1.9 4.1-1.5c2 .6 3.3 2.1 2.8 3.4c-.4 1.3-2.4 1.9-4.1 1.3zm-12.5-7.3c-1.5-1.3-1.9-3.2-.9-4.1c.9-1.1 2.8-.9 4.3 .6c1.3 1.3 1.8 3.3 .9 4.1c-.9 1.1-2.8 .9-4.3-.6zm-8.5-10c-1.1-1.5-1.1-3.2 0-3.9c1.1-.9 2.8-.2 3.7 1.3c1.1 1.5 1.1 3.3 0 4.1c-.9 .6-2.6 0-3.7-1.5zm-6.3-8.8c-1.1-1.3-1.3-2.8-.4-3.5c.9-.9 2.4-.4 3.5 .6c1.1 1.3 1.3 2.8 .4 3.5c-.9 .9-2.4 .4-3.5-.6zm-6-6.4c-1.3-.6-1.9-1.7-1.5-2.6c.4-.6 1.5-.9 2.8-.4c1.3 .7 1.9 1.8 1.5 2.6c-.4 .9-1.7 1.1-2.8 .4z"/></svg>

      </a>

    </MadeBy>
    
    </MainContainer>
  )
}

export default ChatbotApp