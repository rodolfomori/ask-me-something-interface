import React from 'react'

import { Container, Wrapper, Avatar, AnswerText, Like, Date } from './styled'

function Answer() {
  const id = 123123
  return (
    <Container>
      <Wrapper>
        <Avatar src={`https://api.adorable.io/avatars/81/${id}.png`} />
        <AnswerText>
          asdas asd asd asd asd asd asd as asdasd asdasdasdas das ads das asd asd asda s asdasd asdasdasdasdas asdasdasd
          asd asd asd asd asd a asd asd asdasdasd asdasd asd asda sd ad asda sd
        </AnswerText>
        <Like></Like>
      </Wrapper>
      <Date>25 de Janeiro de 2020</Date>
    </Container>
  )
}

export default Answer
