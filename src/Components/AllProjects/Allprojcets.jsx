import React from 'react';
import styles from './Allprojects.module.css'; // Import your CSS
import { AnimatePresence, motion } from 'framer-motion';
import styled from 'styled-components';
import ProjectCard from './ProjectCard';
import IntialTransition from '../Cool/IntialTransition';
import Design2 from '../Particles/Design2';
import HoverEffect from '../Hover/HoverEffect';
import Footer from '../Footer/Footer';
function Allprojects() {

const FadeLeftAnimation = styled.div`
  animation-name: fadeLeft;
  animation-duration: 1.2s;
  animation-timing-function: ease-in-out;
  animation-fill-mode: forwards;

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


  return (
    <AnimatePresence>
      <IntialTransition Title="Projects" />
      <Design2 />

    <motion.div  exit={{ opacity: 0 }}>

    <div className={styles.allprojects}> {/* Use styles for the 'allprojects' class */}
    <FadeLeftAnimation>
      <div className={styles.Container}> {/* Use styles for the 'Container' class */}

        <div className={styles.Header}> {/* Use styles for the 'Header' class */}

          <div className='left flex '> {/* Use styles for 'left' and 'flex' classes */}
            <h2 className="SectionHeadName"> {/* Use styles for the 'SectionHeadName' class */}
              <HoverEffect>
               <span>#</span>Projects

              </HoverEffect>

            </h2>
          </div>
        </div>



        <div className={styles.CardContainer}> {/* Use styles for the 'CardContainer' class */}

    
          <ProjectCard imgSrc="../images/myprojects/a-sic.png" apps={['React', 'HTML', 'CSS', 'JS', 'jQuery']}
           title="A-sic" description="Digital coins app" liveLink="https://a-sic.vercel.app" />

          <ProjectCard imgSrc="../images/myprojects/b81.png" apps={[ 'HTML', 'CSS', 'JS', 'Api','Context']}
            title=" Al-Azhar UNI " description="University E-Learning " liveLink="https://www.spealazhar.org/" />
            
            <ProjectCard imgSrc="../images/myprojects/b30.png" apps={['React','Three Js', 'HTML', 'CSS', 'JS',]}
            title="3d" description=" 3d fully made website" liveLink="https://3d-js.vercel.app/" />

            <ProjectCard imgSrc="../images/myprojects/b40.png" apps={['React', 'HTML', 'CSS', 'JS', 'Api']}
            title="React Weather app " description="Weather Checking App" liveLink="https://weaher-x-react-nqvy.vercel.app/" />
            
            <ProjectCard imgSrc="../images/myprojects/b91.png" apps={['React', 'HTML', 'CSS', 'JS', 'Api']} 
              title="Real Estate Company " description="Best place to buy or sell states" liveLink="https://real-estate-six-vert.vercel.app/" />
  

            <ProjectCard imgSrc="../images/myprojects/b20.png" apps={['React', 'HTML', 'CSS',]} 
              title="Xstream" description="Demo website for a start up" liveLink="https://company-react-wine.vercel.app/" />
          
            <ProjectCard imgSrc="../images/myprojects/b60.png" apps={[ 'HTML', 'CSS', 'JS' ]}
              title="Card Matching Game " description="Try to match the cards before the time ends " liveLink="https://mix-or-match-seven.vercel.app/" />


            <ProjectCard imgSrc="../images/myprojects/b10.png" apps={['BootStrap', 'HTML', 'CSS', 'JS', 'jQuery']} 
              title="Angora" description="Company WebSite" liveLink="https://project-mocha-two.vercel.app/" />

            <ProjectCard imgSrc="../images/myprojects/b50.png" apps={['HTML', 'CSS', 'JS']}
              title="Tic Tac Toe" description="The old Tic Tac Toe with new Design" liveLink="https://tic-tak-toe-nine.vercel.app/" />

            <ProjectCard imgSrc="../images/myprojects/b70.png" apps={[ 'HTML', 'CSS', 'JS']}
              title="Crud System App " description="Create  Read Update Delete for your business " liveLink="https://crud-system-eight.vercel.app/" />
        </div>
      </div>
      </FadeLeftAnimation>
      <FadeRightAnimation>
      </FadeRightAnimation>

    </div>
    </motion.div>

    <Footer />

    </AnimatePresence>


  );
}
export default Allprojects;