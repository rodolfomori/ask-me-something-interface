import React from 'react'
import { FaPlus } from 'react-icons/fa'

import { Container, Button, Wrapper } from './styled'

function NewQuestion() {
  return (
    <Container>
      <Wrapper>
        <Button>
          <FaPlus />
        </Button>
        <p>Ask me Something!</p>
      </Wrapper>
    </Container>
  )
}

export default NewQuestion
