import React from 'react'
import styled from 'styled-components';

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

        <Container>
        <Header>
                    <div className="left flex ">
                        <h2 className='SectionHeadName'><span>#</span>Skills</h2>
                    </div>
        </Header>
            <div className="flex flex-wrap">
                <Box>
                    <HeaderTitle>
                        Language
                    </HeaderTitle>
                    <Body>
                        <ul>
                            <li>JavaScript</li>
                            <li>Java</li>
                            <li>C++</li>
                            <li>Python</li>
                            <li>SQL</li>
                        </ul>
                    </Body>
                </Box>


                <Box>
                    <HeaderTitle>
                        Talks
                    </HeaderTitle>
                    <Body>
                    <ul>
                        <li>English</li>
                        <li>Arabic</li>
                    </ul>
                    </Body>
                </Box>
                
                
                <Box>
                    <HeaderTitle>
                        Others
                    </HeaderTitle>
                    <Body>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>SASS</li>
                        <li>Redux</li>
                        <li>Styled Components</li>
                    </ul>
                    </Body>
                </Box>
                
                <Box>
                    <HeaderTitle>
                        Frameworks
                    </HeaderTitle>
                    <Body>
                    <ul>
                        <li>React</li>
                        <li>Tailwind</li>
                        <li>Bootstrap</li>
                        <li>jQuery</li>
                    </ul>
                    </Body>

                </Box>


                <Box>
                    <HeaderTitle>
                    Tools
                    </HeaderTitle>
                    <Body>
                    <ul>
                        <li>Git</li>
                        <li>GitHub</li>
                        <li>Figma</li>
                        <li>VsCode</li>
                        <li>Vs</li>
                        <li>atom</li>
                    </ul>
                    </Body>

                </Box>

            </div>

        </Container>

    
    </>
)
}

export default Skills