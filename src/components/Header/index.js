import React from 'react'

import askMe from '../../assets/img/askMeLogo.png'
import { Container, Logo } from './styled'

function Header() {
  return (
    <Container>
      <Logo src={askMe} />
      {/* <div>
        <h1>Ask about everything you wanna know, and be surprised by the answers.</h1>
        <p>
          Our question and answer community was created for you to show that you know everything about a subject, and
          also for you who want to know everything about something. Whether to learn or to teach, our community is open
          to you!
        </p>
      </div> */}
    </Container>
  )
}

export default Header
