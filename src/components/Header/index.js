import React, { useState } from 'react'

import askMe from '../../assets/img/askMeLogo.png'
import text from '../../assets/img/text.png'
import Animations from '../Ask Animated'
import { Container, Logo, Wrapper } from './styled'

function Header() {
  const [loop, setLoop] = useState(true)

  setInterval(() => {
    setLoop(false)
    setLoop(true)
  }, 12000)

  return (
    <Container>
      <Logo src={askMe} />
      <Wrapper style={{ display: 'flex' }}>
        {loop && <Animations />}
        {/* <LogoText src={text} /> */}
      </Wrapper>
    </Container>
  )
}

export default Header
