import React from 'react'

// 🎁 C O M P O N E N T S
import Page from '../components/atoms/Page'
import Hero from '../components/sections/Hero'
import Section from  '../components/atoms/Section'
import Container from  '../components/atoms/Container'
import Row from  '../components/atoms/Row'
import Column from  '../components/atoms/Column'
import H1 from  '../components/atoms/H1'
import P from  '../components/atoms/P'
import Img from  '../components/atoms/Img'
import Button from  '../components/atoms/Button'
import ButtonLink from  '../components/atoms/ButtonLink'
import NavItem from '../components/atoms/NavItem'

// 📸 A S S E T ST S
import plug_and_play from '../assets/images/plugandplay.png'
import doItYourSelf from '../assets/images/doityourself1.png'

// 💫 M A I N   C O M P O N E N TN T
const Home = () => {

  // Helper to scroll to a specific section
  const scrollToRef = (ref) => {
    window.scrollTo(0, ref.current.offsetTop - 200)
  }
  const buySectionRef = React.useRef(null)
  const learnRef = React.useRef(null)
  const onClickBuy = () => {scrollToRef(buySectionRef)}
  const onClickLearn = () => {scrollToRef(learnRef)}

  return (
    <Page>
      <Hero 
        onClickBuy={onClickBuy} 
        onClickLearn={onClickLearn} 
      />

      {/* Buy Section
      TODO: should be extracted to components/sections/Buy.js */}
      <Section >
        <div ref={buySectionRef}></div>
        <Container>
          <Row>
            <Column center>
              <H1>What is RaspiHive?</H1>
              <P>Running an IOTA Node was never easier. Just connect RaspiHive to power and the internet.</P>
              <NavItem linkTo='/about' style={{ marginLeft: 25, marginRight: 25, backgroundColor: 'var(--primary)', borderRadius: 50 }}>About</NavItem>
            </Column>
            <Column>
              <Img src={doItYourSelf}></Img>
            </Column>
          </Row>
        </Container>
      </Section>

      {/* Learn Section
      TODO: should be extracted to components/sections/Learn.js */}
      <Section>
        <div ref={learnRef}></div>
        <Container>
          <Row>
            <Column>
              <Img src={plug_and_play}></Img>
            </Column>
            <Column center>
              <H1>Do it yourself</H1>
              <P>All what you need is a Raspberry PI, and a Screen. You can follow our instructions with detailed step by step descriptions. </P>
              <ButtonLink 
                href="http://docs.raspihive.org"
              >To the Docs</ButtonLink>
            </Column>
          </Row>
        </Container>
      </Section>
    </Page>
  )
}

export default Home