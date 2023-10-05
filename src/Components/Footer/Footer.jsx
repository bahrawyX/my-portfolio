import React from 'react'
import styled from 'styled-components'

function Footer() {
        const Section= styled.section`
            width: 100%;
            border-top: 1px solid #fff;

        
        `
        const Container= styled.div`
            width: 50%;
            margin: 0 auto;
        
        `

        const Left=styled.div`
            width: 50%;
            text-align: left;
            color: #fff;
            `
        const Right=styled.div`
            text-align: right;
            width: 50%;
            color: #fff;
            `
            const Socials=styled.div`

            color: #fff;
            display: flex;
            flex-wrap: wrap;
            flex-direction: column;
            padding: 0.5rem 1rem;
            h2{
                font-size: 1.5rem;
                font-weight: 600;
                
            }
        
            `
    
return (
    <>
    <Section>
        <Container>
            <div className="flex justify-between">
                <Left className="left">
                    <div className="flex w-6 my-5">
                        <img className="h-8 w-auto" src="../images/logo.svg" alt="Bahrawy" /> <span  className='logoText px-2 text-2xl'>Bahrawy</span>
                    </div>
                    <p className="text-white">Web designer and front-end developer based in Egypt</p>
                </Left>
                <Right className="">
                        <Socials className='mt-5'>
                            <h2 className='mr-4'>
                                Socials
                            </h2>
                            <div className="icons">
                                <img src="../images/icons/discord.svg" alt="" />
                                <img src="../images/icons/github.svg" alt="" />
                                <img src="../images/icons/linkedin.svg" alt="" />
                                <img src="../images/icons/email.svg" alt="" />
                            </div>
                        </Socials>
                </Right>
            </div>
                <div className="text-center">
                    <p className="text-white  mt-5 mb-2">© 2021 Bahrawy. All rights reserved.</p>
                </div>

        </Container>
    </Section>
    </>
)
}

export default Footer