import React from 'react'
import styled from 'styled-components';
import styles from './AboutAll.module.css'
import IntialTransition from '../Cool/IntialTransition';
import Design from '../Particles/Design';
import HoverEffect from '../Hover/HoverEffect';
import Footer from '../Footer/Footer';

const FadeUpAnimation = styled.div`
animation-name: fadeUp;
animation-duration: 1.2s;
animation-timing-function: ease-in-out;
animation-fill-mode: forwards;
animation-delay:1.5s;

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
animation-delay:1.5s;

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
animation-delay:1.5s;

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

function AboutAll() {
   
return (
    <>
        <IntialTransition Title="About Me"/>
<Design />

        <div className={styles.Container}>
        <div className={styles.Header}>
                    <div className="left flex ">
                            <HoverEffect>
                                 <h2 className='SectionHeadName'><span>#</span>about</h2>
                            </HoverEffect>

                    </div>
                    <p className='ml-8 text'> Who Am I ?</p>
        </div>
           <div className={`flex items-center ${styles.aboutBodyContainer}`}>
            
            <FadeLeftAnimation>
            <img className='aboutimage' src="../images/me7.jpg" alt="" />
            </FadeLeftAnimation>
            <FadeRightAnimation>
            <div  className={styles.Left}>
                <HoverEffect>
                    <p>I’m a Computer Science Student , front-end developer .I can develop responsive websites from scratch and raise them into modern user-friendly web experiences.</p>
                    <p>Transforming my creativity and knowledge into a websites has been my passion for over a year. I have been helping various clients to establish their presence online. I always strive to learn about the newest technologies and frameworks.</p>
                    <p>I always strive to learn about the newest technologies and frameworks.</p>
                </HoverEffect>
            </div>
            </FadeRightAnimation>
            </div>

            <div  className={styles.Header}>
                    <div className="left flex ">
                        <h2 className='SectionHeadName'><span>#</span>Skills</h2>
                    </div>
            </div>
            <FadeUpAnimation>
            <div className={`flex flex-wrap ${styles.boxContainer}`}>
                <div className={styles.SkillBox}>
                    <h3 className={styles.HeaderTitle}>
                        Language
                    </h3>
                    <div className={styles.Body}>
                        <ul>
                            <li>JavaScript</li>
                            <li>Java</li>
                            <li>C++</li>
                            <li>Python</li>
                            <li>SQL</li>
                        </ul>
                    </div>
                </div>
                
                <div className={styles.SkillBox}>
                    <h3 className={styles.HeaderTitle}>
                        Others
                    </h3>
                    <div className={styles.Body}>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>SASS</li>
                        <li>Redux</li>
                        <li>Styled Components</li>
                    </ul>
                    </div>
                </div>

                {/* <div className={styles.SkillBox}>
                    <h3 className={styles.HeaderTitle}>
                        Talks
                    </h3>
                    <div className={styles.Body}>
                    <ul>
                        <li>English</li>
                        <li>Arabic</li>
                    </ul>
                    </div>
                </div> */}
                

                
                <div className={styles.SkillBox}>
                    <h3 className={styles.HeaderTitle}>
                        Frameworks
                    </h3>
                    <div className={styles.Body}>
                    <ul>
                        <li>React</li>
                        <li>Tailwind</li>
                        <li>Bootstrap</li>
                        <li>jQuery</li>
                    </ul>
                    </div>

                </div>


                <div className={styles.SkillBox}>
                    <h3 className={styles.HeaderTitle}>
                    Tools
                    </h3>
                    <div className={styles.Body}>
                    <ul>
                        <li>Git</li>
                        <li>GitHub</li>
                        <li>Figma</li>
                        <li>VsCode</li>
                        <li>Vs</li>
                        <li>atom</li>
                    </ul>
                    </div>

                </div>

            </div>
            </FadeUpAnimation>


        <div  className={styles.Header}>
                    <div className="left flex  ">
                        <h2 className='SectionHeadName'><span>#</span>Fun Facts</h2>
                    </div>
        </div>
        <div className="flex flex-wrap  justify-center">
                <button className={styles.Box}>
                    I like winter more than summer
                </button>
                <button className={styles.Box}>
                    I am Asc2 at Valorant
                </button>
                <button className={styles.Box}>
                    I hate League of Legends
                </button>
                <button className={styles.Box}>
                    We Go Jim
                </button>
                <button className={styles.Box}>
                    My favorite movie is Interstellar
                </button>
                <button className={styles.Box}>
                    I like Borgir
                </button>
                </div>

        </div>

    <Footer />
    </>
)
}
export  default AboutAll