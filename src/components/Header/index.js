import React from 'react'

import askMe from '../../assets/img/askMeLogo.png'
import text from '../../assets/img/text.png'
import { Container, Logo, LogoText } from './styled'

function Header() {
  return (
    <Container>
      <Logo src={askMe} />
      <div>
        <LogoText src={text} />
        {/* <p>
          Our question and answer community was created for you to show that you know everything about a subject, and
          also for you who want to know everything about something. Whether to learn or to teach, our community is open
          to you!
        </p> */}
      </div>
    </Container>
  )
}

export default Header
