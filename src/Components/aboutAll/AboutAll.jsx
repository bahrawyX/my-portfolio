import React from 'react'
import styled from 'styled-components';
import Skills from '../Skills/Skills';

function AboutAll() {
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
    
  
    const Box = styled.button`
        padding: 0.5rem 1rem;
        background-color: hsl(218 12% 18%);
        color: #fff;
        border: 1px solid hsl(219 14% 71%);
        margin-right: 1rem;
        margin-bottom: 1rem;
        cursor: pointer;
        &:hover {
            background-color: hsl(219 14% 71%);
            color: hsl(218 12% 18%);
        }

  `;
  const SkillBox = styled.div`
  background-color: hsl(218 12% 18%);
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
                        <h2 className='SectionHeadName'><span>#</span>about</h2>
                    </div>
                    <p className='  ml-8 text'> Who Am I ?</p>
        </Header>
            <div className="flex items-center justify-center">

            <img className='aboutimage' src="../images/about-me.png" alt="" />
            <Left className='ml-24'>
                <p>I’m a self-taught front-end developer based in Cairo, Egypt. I can develop responsive websites from scratch and raise them into modern user-friendly web experiences.</p>
                <p>Transforming my creativity and knowledge into a websites has been my passion for over a year. I have been helping various clients to establish their presence online. I always strive to learn about the newest technologies and frameworks.</p>
                <p>I always strive to learn about the newest technologies and frameworks.</p>
            </Left>
            </div>

            <Header  className='mt-32'>
                    <div className="left flex ">
                        <h2 className='SectionHeadName'><span>#</span>Skills</h2>
                    </div>
            </Header>
            <div className="flex flex-wrap">
                <SkillBox>
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
                </SkillBox>


                <SkillBox>
                    <HeaderTitle>
                        Talks
                    </HeaderTitle>
                    <Body>
                    <ul>
                        <li>English</li>
                        <li>Arabic</li>
                    </ul>
                    </Body>
                </SkillBox>
                
                
                <SkillBox>
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
                </SkillBox>
                
                <SkillBox>
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

                </SkillBox>


                <SkillBox>
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

                </SkillBox>

            </div>



        <Header  className='mt-32'>
                    <div className="left flex ">
                        <h2 className='SectionHeadName'><span>#</span>Fun Facts</h2>
                    </div>
        </Header>
            <div className="flex flex-wrap">
                <Box>
                    I like winter more than summer
                </Box>
                <Box>
                    I am Asc2 at valorant
                </Box>
                <Box>
                    I hate league of legends 
                </Box>
                <Box>
                    We Go Jim 
                </Box>
                <Box>
                My favorite movie is Intersteller 
                </Box>
                <Box>
                I like Borgir
                </Box>
            </div>

        </Container>

    
    </>
)
}

export default AboutAll