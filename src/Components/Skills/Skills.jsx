import React from 'react'
import styled from 'styled-components';
import styles from './Skills.module.css'
import { AnimatePresence } from 'framer-motion';
function Skills() {
    const Container = styled.div`
    width: 50%;
    margin: 7rem auto;
    
    `;
    
    const Header = styled.div`
    width: 100%;
    justify-content: space-between;
`
    const Left = styled.div`
    margin-top: 3rem;
    width: 70%;
        p{
            color: hsl(219 14% 71%);
            font-weight: 400;
            width: 100%;
            margin-bottom: 1rem;

        }
    `;
    
  
    const Box = styled.div`
        background-color: #191825;
        color: #fff;
        margin-right: 1rem;
        margin-bottom: 1rem;
        cursor: pointer;


  `;
    const HeaderTitle = styled.h3`
        width: 100%; 
        color: hsl(219 14% 71%);
        font-weight: 400;
        padding: 0.5rem 1rem;       
        border: 1px solid hsl(219 14% 71%);
    `
    const Body = styled.div`
        padding: 0.5rem 1rem;
        height: auto !important;
        font-weight: 400;
            text-align: left;
            ul{
                list-style: none;
                padding: 0;
                margin: 0;
                display: flex;
                li{
                    margin-bottom: 0.5rem;
                    color: hsl(219 14% 71%);
                    &:after{
                        content: ',';
                        clear: both;
                    }
                    &:last-child{
                        &:after{
                            content: '';
                        }
                    }
                    margin-right: 1rem;
                }

            }
        border: 1px solid hsl(219 14% 71%);
            border-top: none;
    `

return (
    <>
<AnimatePresence>

        <div className={styles.Container}>
        <div className={styles.Header}>
                    <div className="left flex ">
                        <h2 className='SectionHeadName'><span>#</span>Skills</h2>
                    </div>
        </div>
            <div className="flex flex-wrap">
                <div className={styles.Box}>
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


                <div className={styles.Box}>
                    <div className={styles.HeaderTitle}>
                        Talks
                    </div>
                    <div className={styles.Body}>
                    <ul>
                        <li>English</li>
                        <li>Arabic</li>
                    </ul>
                    </div>
                </div>
                
                
                <div className={styles.Box}>
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
                
                <div className={styles.Box}>
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


                <div className={styles.Box}>
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

        </div>

</AnimatePresence>
    
    </>
)
}

export default Skills