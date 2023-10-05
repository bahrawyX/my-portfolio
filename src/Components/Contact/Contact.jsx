import React from 'react'
import styled from 'styled-components';

function Contact() {
    const Container = styled.div`
    width: 50%;
    margin: 7rem auto;
    `;
    
    const Header = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`
    const Left = styled.div`
    width: 50%;
        p{
            color: hsl(219 14% 71%);
            font-weight: 400;
            width: 100%;

        }
    `;
    
  
        const Box=styled.div`
        border: 1px solid hsl(219 14% 71%);
        padding: 0.5rem 1rem;
        h2{
            color:#fff;
            font-weight: 700;
            margin-bottom: 1rem;

        }
        a{
            span,img{

                &:hover{
                    color: #fff;
                }
            }
        }

        `
 

return (
    <>
        <Container>
                <Header>
                    <div className="left flex ">
                        <h2 className='SectionHeadName'><span>#</span>Contact</h2>
                    </div>
                </Header>
                <div className="flex justify-between items-center">
                <Left>

                        <p>I’m interested in freelance opportunities,half time job . However, if you have other request or question, don’t hesitate to contact me</p>

                        </Left>


                <Box>
                        <h2>Message me here</h2>

                        <a href="">
                        <div className="contactIcon flex items-center ">
                            <img src="../images/icons/discord.svg" alt="" />
                            <span  className='icontext'>Bahrawy#4566</span>
                        </div>
                        </a>

                        <a href="">
                        <div className="contactIcon flex items-center ">
                            <img src="../images/icons/email.svg" alt="" />
                            <span  className='icontext'>manobahrawy1@gmail.com</span>
                        </div>
                        </a>

                    </Box>
                </div>
        </Container>
    
    
    
    </>
)
}

export default Contact