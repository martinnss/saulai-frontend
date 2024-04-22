import React from 'react'

import ChatbotApp from '../Containers/ChatbotApp'
import MovingBackground from '../Components/MovingBackground'

const Chatbot = () => {
  return (
    <MovingBackground>
        <ChatbotApp />
    </MovingBackground>
  )
}

export default Chatbot