import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import './Hero.css';
import IntialTransition from '../Cool/IntialTransition.jsx';
import Navline from '../Line/Navline.jsx';
import HoverEffect from '../Hover/HoverEffect.jsx';
import Design from '../Particles/Design';
import { Link } from 'react-router-dom';
const FadeUpAnimation = styled.div`
  animation-name: fadeUp;
  animation-duration: 1.2s;
  animation-timing-function: ease-in-out;
  animation-fill-mode: forwards;
  animation-delay: 1.5s;

  @keyframes fadeUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
const FadeLeftAnimation = styled.div`
  animation-name: fadeLeft;
  animation-duration: 1.2s;
  animation-timing-function: ease-in-out;
  animation-fill-mode: forwards;
  animation-delay: 1.5s;


  @keyframes fadeLeft {
    from {
      opacity: 0;
      transform: translateX(-20px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;
const FadeRightAnimation = styled.div`
  animation-name: fadeRight;
  animation-duration: 1.2s;
  animation-timing-function: ease-in-out;
  animation-fill-mode: forwards;
  animation-delay: 1.5s;

  @keyframes fadeRight {
    from {
      opacity: 0;
      transform: translateX(20px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;


function Hero() {


  return (

    <div className='hero'>
      <Design />

      <IntialTransition Title="Bahrawy" />
      <section className='Section hero' >
        <div className='Container'>
          <div className='Left'>
            <FadeRightAnimation>

              <HoverEffect>
                <h2 className='Header' >
                  Bahrawy is a <span>Web Designer </span> <br /> and{' '}
                  <span>  Front-End </span> Developer
                </h2>
              </HoverEffect>
              <p className='SupTitle'>
                He crafts responsive websites where technologies meet creativity
              </p>

              <div className="buttons">
                <button className="raise  Button" >   <a href='../BahrawyCV.pdf' download> Download CV -&gt;</a></button>
                <div className="heroStats">
                  <FadeLeftAnimation>
                    <p>Currently Looking For Work</p>
                  </FadeLeftAnimation>
                </div>
              </div>



            </FadeRightAnimation>
          </div>

          <div className='right Right'>
            <img src='../images/mee.jpg' className='HeroImg Image' alt='Bahrawy-Photo' />

          </div>
        </div>
        <FadeUpAnimation>
          <div className='Box'>
            <HoverEffect>
              <h4 className='MainBoxText'>
                {/* Debugging is like being the detective in a crime movie where you are also the murderer */}
                It's was never a bug – it's always an undocumented feature
              </h4>
              <p className='Author'><nobr>-Bahrawy</nobr></p>
            </HoverEffect>
            <FadeUpAnimation>
              <div className='SubBox'>
                <HoverEffect>
                  <p><nobr>-Bahrawy</nobr></p>
                </HoverEffect>
              </div>
            </FadeUpAnimation>
          </div>
        </FadeUpAnimation>
      </section>
    </div>
  );
}


export default Hero;
