import React from 'react'
import { FaFootballBall, FaGlobeAmericas, FaGamepad, FaTheaterMasks, FaPiggyBank } from 'react-icons/fa'

import { Container, Button, Wrapper } from './styled'

function Header() {
  return (
    <Container>
      <Wrapper>
        <Button>
          <FaGlobeAmericas />
        </Button>
        <p>Everything</p>
      </Wrapper>

      <Wrapper>
        <Button>
          <FaFootballBall />
        </Button>
        <p>Sports</p>
      </Wrapper>

      <Wrapper>
        <Button>
          <FaGamepad />
        </Button>
        <p>Games</p>
      </Wrapper>

      <Wrapper>
        <Button>
          <FaTheaterMasks />
        </Button>
        <p>Entertainment</p>
      </Wrapper>

      <Wrapper>
        <Button>
          <FaPiggyBank />
        </Button>
        <p>Finances</p>
      </Wrapper>
    </Container>
  )
}

export default Header
