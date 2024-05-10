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
    margin-top: ${(props) => (props.isAsked ? 'auto' : '5rem')};
    position:relative;

    bottom: ${(props) => (props.isAsked ? '3rem' :  'auto' )};

    transition:  bottom 25s; 
    @media only screen and (max-width: 820px) {

      position: relative; /* Asegura que el posicionamiento relativo se herede correctamente */

  }
`

const ChatBubble = styled.div`
  display: flex;
  justify-content: center; /* Centra horizontalmente */
  align-items: center; /* Centra verticalmente */
  background-color: #f0f0ff5a;
  backdrop-filter: blur(10px);
  border-radius: 8px;
  border: 1px solid #b0b0b036;
  width: 50rem;
  height: 40vh;
  margin-bottom: 10px;
  padding: 1rem;

  & > h1 {
    font-size: 1.3rem;
    background: linear-gradient(315deg, #66008e 40%, #000276 80%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: ${appearAnimation} 5s forwards;
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

  margin-top: 10rem;
  
  @media only screen and (max-width: 820px) {
    width: 80%;
  }
`;

const ChatbotApp = () => {
  const [answer, setAnswer]  = useState(null);

  const [sharedStatus, setSharedStatus] = useState(false);

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
    <MainContainer isAsked={sharedStatus}>
        <span >
            <h1>{sharedStatus? "Saul AI":"Pregúntame lo que quieras"}</h1> <br />
            <p>{sharedStatus? "":"Sobre la Ley EAT🤔"}</p>

        </span>
        {
              sharedStatus ? (
              <ChatBubbleContainer >
                <ChatBubble>
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
        
    </MainContainer>
  )
}

export default ChatbotApp