import React from 'react';
import styled from 'styled-components';
import Navbar from '../Navbar/Navbar.jsx';


const FadeUpAnimation = styled.div`
  animation-name: fadeUp;
  animation-duration: 1.2s;
  animation-timing-function: ease-in-out;
  animation-fill-mode: forwards;

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

function Hero() {
  const Section = styled.div`
    height: 93vh;
    width: 50%;
    background-color: #191825;
    margin: 0 auto;
  `;

  const Container = styled.div`
  width: 1024px;
    height: 85%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  `;

  const Right = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  `;

  const Image = styled.img`
    width: 100%; /* Make the image take up the entire width of the right section */
    margin: 0 auto; /* Center the image */
    display: block; /* Remove the extra bottom space */
    z-index: 100; 
  `;

  const Left = styled.div`
    width: 50%;
    color: #fff;
  `;

  const Header = styled.h2`
    font-size: 2rem;
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 2rem;
    span {
      color: hsl(287 60% 65%);
    }
  `;

  const SupTitle = styled.p`
    font-size: 1.2rem;
    font-weight: 300;
    margin-bottom: 2rem;
  `;

  const Button = styled.button`
    border: 1px solid hsl(287 60% 65%);
    padding: 0.5rem 1rem;    
    color: #fff;
    background-color: transparent;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    &:hover {
      background-color: hsl(287 60% 65%);
    }
  `;
  const Box = styled.div`
    width: 80%;
    padding: 1rem;
    background-color: #191825;
    text-align: center;
    border: 1px solid hsl(287 60% 65%);
    margin: 0 auto;
    position: relative;
    top:-50px;
    
  `;

    const MainBoxText = styled.h4`
    color: #fff;
    font-weight: 500;
    font-size: 1.5rem;
    position: relative;

    &:before {
        content: "“";
        font-size: 70px;
        height: 50px;
        color: #fff;
        position: absolute;
        background-color: #191825;
        top: -3.2rem;
        left: 0;


    }
    `;
    const SubBox = styled.div`
    color: #fff;
    font-size: 1.2rem;
    position: absolute;
    width: 20%;
    padding: 0.5rem;
    border: 1px solid hsl(287 60% 65%);
    right: -1px;
    bottom: -2.9rem;

    &:before {
      content: "”";
      font-size: 70px;
      height: 32px;
      color: #fff;
      position: absolute;
      background-color: #191825;
      top: -2rem;
      right: 10px;


  }
    `

  
    return (
      
      <>

        <Navbar />
        <Section>
          <Container>
            <Left>
              <FadeUpAnimation>
                <Header>
                  <nobr>Bahrawy is a <span> web designer </span></nobr> <br /> and{' '}
                  <span>front-end </span> developer
                </Header>
              </FadeUpAnimation>
              <FadeUpAnimation>
                <SupTitle>
                  He crafts responsive websites where technologies meet creativity
                </SupTitle>
              </FadeUpAnimation>
              <FadeUpAnimation>
                <Button>Contact Me -&gt;</Button>
              </FadeUpAnimation>
            </Left>
            <Right className='right'>
              <FadeUpAnimation>
                <Image className='Image-Outline  ' src='../images/logo-outline.svg' alt='Bahrawy-Photo' />
              </FadeUpAnimation>
              <FadeUpAnimation>
                <Image src='../images/hero.png' className='HeroImg' alt='Bahrawy-Photo' />
              </FadeUpAnimation>
              <Image src='../images/hero.png' className='HeroImg' alt='Bahrawy-Photo' />
                <svg width="250px" height="200px" fill='#fff' class="dots" viewBox="0 0 104 104">
                    <circle cx="4" cy="4" r="4"></circle><circle cx="4" cy="28" r="4"></circle><circle cx="4" cy="52" r="4"></circle><circle cx="4" cy="76" r="4"></circle><circle cx="4" cy="100" r="4"></circle><circle cx="28" cy="4" r="4"></circle><circle cx="28" cy="28" r="4"></circle><circle cx="28" cy="52" r="4"></circle><circle cx="28" cy="76" r="4"></circle><circle cx="28" cy="100" r="4"></circle><circle cx="52" cy="4" r="4"></circle><circle cx="52" cy="28" r="4"></circle><circle cx="52" cy="52" r="4"></circle><circle cx="52" cy="76" r="4"></circle><circle cx="52" cy="100" r="4"></circle><circle cx="76" cy="4" r="4"></circle><circle cx="76" cy="28" r="4"></circle><circle cx="76" cy="52" r="4"></circle><circle cx="76" cy="76" r="4"></circle><circle cx="76" cy="100" r="4"></circle><circle cx="100" cy="4" r="4"></circle><circle cx="100" cy="28" r="4"></circle><circle cx="100" cy="52" r="4"></circle><circle cx="100" cy="76" r="4"></circle><circle cx="100" cy="100" r="4"></circle>
                </svg>
              <div className="heroStats">
              <FadeUpAnimation>
                <p>Currently Looking For Work</p>

                </FadeUpAnimation>
              </div>
            </Right>
          </Container>
          <Box>
            <FadeUpAnimation>
              <MainBoxText>
                Debugging is like being the detective in a crime movie where you are also the murderer
              </MainBoxText>
            </FadeUpAnimation>
            <FadeUpAnimation>
              <SubBox>
                <p><nobr>-Bahrawy</nobr></p>
              </SubBox>
            </FadeUpAnimation>
          </Box>
        </Section>
      </>
    );
  }
  

export default Hero;
