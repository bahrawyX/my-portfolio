import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

function Projects() {

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
    min-height: 400px;
    max-height: 400px;
    align-items: center;
    background-color: #191825;
    color: #fff;
    border: 1px solid hsl(219 14% 71%);
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
    border: 1px solid #7752FE;
    padding: 0.5rem 1rem;    
    color: #fff;
    background-color: transparent;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    &:hover {
      background-color: #7752FE;
    }
    margin-bottom: 1rem;
  `;
return (
    <>
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
            </div>
        </Container>

    </>
)
}

export default Projects