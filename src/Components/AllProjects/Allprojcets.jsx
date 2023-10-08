import React from 'react'
import styled from 'styled-components';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

function Allprojects() {

    const Container = styled.div`
    width: 50%;
    margin: 0 auto;
    margin-top: 7rem;
    `;
    const Header = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`
    const Card = styled.div`
    width: 32%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #191825;
    color: #fff;
    border: 1px solid hsl(219 14% 71%);
    min-height: 400px;
    max-height: 400px;
`


    const Apps = styled.div`
    width: 100%;
    padding: 0.5rem 1rem;
    display: flex;
    
    justify-content: flex-start;
    color:hsl(219 14% 71%);
    border-top: 1px solid hsl(219 14% 71%);
    border-bottom: 1px solid hsl(219 14% 71%);

    ul {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: flex-start;
        align-items: center;
        li {
            margin-right: 1rem;
            font-size: 1rem;
            font-weight: 400;
            list-style: none;
            &:after {
                content: ',';
            }
            &:last-child {
                &:after {
                    content: '';
                }
            }
        }

    `
    const Desc = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    width: 100%;
    padding: 0.5rem 1rem;
    h4{
        font-size: 1.5rem;
        font-weight: 500;
        font-quality: italic;
        
    }
    p{
        color: hsl(219 14% 71%);
        font-size: 1rem;
        font-weight: 400;
        margin: 0.5rem 0;

    }
    `




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
    margin-bottom: 1rem;
  `;
return (
    <>
    <Navbar />  
        <Container>
            <Header>
                <div className="left flex ">
                    <h2 className='SectionHeadName'><span>#</span>Projects</h2>
                </div>

            </Header>
            <div className='CardContainer'>

            <Card>
                <img src="../images/myprojects/a-sic.png" alt="" />
                <Apps>
                <ul>
                        <li>React</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JS</li>
                        <li>jQuery</li>
                </ul>
                </Apps>
                <Desc>
                    <h4>A-sic</h4>
                    <p>Digital coins app </p>
                    <Button>
                        <a href="https://a-sic.vercel.app/" target='_blank'>Live -&gt;</a>    
                    </Button>
                </Desc>
            </Card>

            <Card>
            <img src="../images/myprojects/weatherreact.png" alt="" />
                <Apps>
                    <ul>
                        <li>React</li>
                        <li>API</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JS</li>
                    </ul>
                </Apps>
                <Desc>
                    <h4>Weather React App</h4>
                    <p>Ukrainian social network designed for programmers</p>
                    <Button>
                        <a href="https://weaher-x-react-nqvy.vercel.app/" target='_blank'>Live -&gt;</a>    
                    </Button>
                </Desc>
            </Card>
            <Card>
                <img src="../images/projects/feedrum.webp" alt="" />
                <Apps>
                <ul>
                        <li>React</li>
                        <li>SCSS</li>
                        <li>Python</li>
                        <li>Next</li>
                    </ul>
                </Apps>
                <Desc>
                    <h4>Deplos</h4>
                    <p>Game servers hosting</p>
                    <Button>Live -&gt;  </Button>
                </Desc>
            </Card>
            </div>
        </Container>
        
        <Container>
            <Header>
                <div className="left flex ">
                    <h2 className='SectionHeadName'><span>#</span>Small</h2>
                </div>

            </Header>
            <div className='CardContainer'>

                
            <Card>
                <img src="../images/myprojects/MixOrMatch.png" alt="" />
                <Apps>
                <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JS</li>
                    </ul>
                </Apps>
                <Desc>
                    <h4>Mix Or Match</h4>
                    <p>Card Game</p>
                    <Button>
                        <a href="https://mix-or-match-seven.vercel.app/" target='_blank'>
                            Live -&gt; 
                        </a>
                    </Button>
                </Desc>
            </Card>
            
            <Card>
                <div className="cardImage">
                    <img className='ProjectCard' src="../images/myprojects/ttt.png" alt="" />
                </div>
                <Apps>
                    <ul>
                        <li>Html</li>
                        <li>Css</li>
                        <li>Js</li>
                    </ul>
                </Apps>
                <Desc>
                    <h4>Tik Tak Toe</h4>
                    <p>X O Game</p>
                    
                    <Button>
                        <a href="https://tic-tak-toe-nine.vercel.app/" target='_blank'>Live -&gt; </a>  
                        </Button>
                </Desc>
            </Card>
            <Card>
            <div className="cardImage">
                    <img className='ProjectCard' src="../images/myprojects/jim.png" alt="" />
                </div>
                <Apps>
                <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JS</li>
                    </ul>
                </Apps>
                <Desc>
                    <h4>Weather Checking</h4>
                    <p>Weather telling web app </p>
                    <Button>
                        <a href="https://weather-lovat-xi.vercel.app/" target='_blank'>Live -&gt;</a>
                    </Button>
                </Desc>
            </Card>
            <Card className="my-5">
            <div className="cardImage">
                    <img className='ProjectCard' src="../images/myprojects/crud.png" alt="" />
                </div>
                <Apps>
                <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JS</li>
                    </ul>
                </Apps>
                <Desc>
                    <h4>CRUD</h4>
                    <p>CRUD web app </p>
                    <Button>
                        <a href="https://crud-system-eight.vercel.app/" target='_blank'>Live -&gt;</a>
                    </Button>
                </Desc>
            </Card>
            </div>
        </Container>
        <Footer />
   
    </>
)
}

export default Allprojects