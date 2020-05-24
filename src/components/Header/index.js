import React from 'react'

import askMe from '../../assets/img/askMeLogo.png'
import { Container, Logo } from './styled'

function Header() {
  return (
    <Container>
      <Logo src={askMe} />
    </Container>
  )
}

export default Header
