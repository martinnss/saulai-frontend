import React from 'react'
import '../Styles/home.css'

import PrimaryButton from '../Components/PrimaryButton';
import HeaderBar from '../Containers/HeaderBar';

import DarkContainerBackground from '../Components/DarkBackground';
import ClearBackground from '../Components/ClearBackground';
import CardGlowing from '../Containers/CardGlowing';
import CardSafari from '../Containers/CardSafari';
import CardWithCircles from '../Containers/CardWithCircles';
import BasicDiv from '../Components/BasicDiv';
import Footer from '../Containers/Footer';
import CardBasic from '../Containers/CardBasic';



const Home = () => {


    return (
    <body>

        <HeaderBar />
        <section id="main-section">
            <div className="main-section-text">
                <h1><span>Genio legal</span> en tu bolsillo </h1>
                <p className ="main-p">Saul AI es un asistente legal que lee documentos y contratos, resuelve consultas y detecta problemas legales</p>
                <PrimaryButton text="Pruébalo Gratis" height="3rem" width="15rem" />
            </div>
        </section>

        <section id="frase1">
            <div className="frase1">
                <h2>Enfocate en lo importante</h2>
                <p> 
                    <strong>
                    ¡Libérate de la carga de tener que armar un excel para llevar tus gastos! 
                    </strong>
                </p>
                <p>
                Gracias a <strong>Walleton</strong>, tu gestión financiera será automática. Solo registrate y obtén un panorama claro con un <strong>resumen de tus principales categorías de gastos</strong>
                </p>
                <br />
                <p>
                    ¡Controla tu dinero de manera inteligente!
                </p>
            </div>
        </section>

        <ClearBackground />
        <DarkContainerBackground />
        <ClearBackground>
            <CardGlowing />
        </ClearBackground>
        <ClearBackground>
            <CardSafari mode="dark" />
        </ClearBackground>
        <DarkContainerBackground>
            <CardSafari mode="light" />
        </DarkContainerBackground>
        <DarkContainerBackground>
            <CardWithCircles mode='light'/>
        </DarkContainerBackground>
        <ClearBackground>
            <CardWithCircles mode='dark'/>
        </ClearBackground>
        <BasicDiv>
            <h1>test children</h1>
        </BasicDiv>
        
        <CardBasic />
        
        <section id="users">
            <div className="users">
                <h2>Perfecto para...</h2>
                <p><strong>¡Todos!</strong> Con Walleton, puedes tener una visión clara de tus gastos en tiempo real </p>
                <p> <strong>¡De inmediato y sin esperar!</strong></p>
                <p className='just-emojis' style={{ fontSize: '32px' }}>👩‍⚕️👨‍🔧👩‍🍳👩‍🎓👨‍💼👩‍🔬👨‍🎨👩‍✈️👨‍🚀👩‍⚖️👨‍🚒👩‍🏭👨‍🌾👩‍🔧👨‍⚕️</p>

            </div>
        </section>


        <Footer />
    </body>
    );
};


export default Home