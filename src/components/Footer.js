import React from 'react'
import styled from 'styled-components'

const Footer = () => {
  return (
    <StyledFooter>
      <p className="footer-link">Friends</p>
      <p className="footer-link">About</p>
      <p className="footer-link">Community</p>
    </StyledFooter>
  )
}

const StyledFooter = styled.div`
  flex-direction: row;
  
  .footer-link {
    color: white;
    font-size: 27px;
    text-decoration: none;
    padding-left: 80px;
    padding-right: 80px;
  }

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`

export default Footer