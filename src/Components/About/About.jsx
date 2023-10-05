import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

function About() {
    const Container = styled.div`
    width: 50%;
    margin: 7rem auto;
    display: flex;
    
    align-items: center;
    justify-content: space-between;
    `;
    
    const Header = styled.div`
    width: 100%;
    display: flex;
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

return (
    <>
        <Container>
            <Left>
                <Header>
                    <div className="left flex ">
                        <h2 className='SectionHeadName'><span>#</span>about</h2>
                    </div>
                </Header>
                <p>I’m a self-taught front-end developer based in Cairo, Egypt. I can develop responsive websites from scratch and raise them into modern user-friendly web experiences.</p>
                <p>Transforming my creativity and knowledge into a websites has been my passion for over a year. I have been helping various clients to establish their presence online. I always strive to learn about the newest technologies and frameworks.</p>
                    <Button>
                        <NavLink  to='/about'>
                            View all -&gt;
                        </NavLink>
                    </Button>
            </Left>

            <img className='aboutimage' src="../images/about-me.png" alt="" />
        </Container>
    
    
    
    </>
)
}

export default About