import React from 'react'

import askMe from '../../assets/img/askMeLogo.png'
import isMobile from '../../utils/isMobile'
import Animations from '../Ask Animated'
import { Container, Logo, Wrapper } from './styled'

function Header() {
  const mobile = isMobile.any()
  return (
    <Container>
      <Logo src={askMe} />
      <Wrapper>{!mobile && <Animations style={{ width: '280px' }} />}</Wrapper>
    </Container>
  )
}

export default Header
