import React from 'react'

import { parseISO, format } from 'date-fns'
import PropTypes from 'prop-types'

import { Container, Wrapper, Avatar, AnswerText, Date } from './styled'

function Answer({ answer }) {
  return (
    <Container>
      <Wrapper>
        <Avatar src={`https://api.adorable.io/avatars/81/${answer.id}.png`} />
        <AnswerText>{answer.text}</AnswerText>
        {/* <Like></Like> */}
      </Wrapper>
      <Date>{format(parseISO(answer.createdAt), "EEEE dd MMM yyyy H':'mm")}</Date>
    </Container>
  )
}

Answer.propTypes = {
  answer: PropTypes.object,
}

export default Answer
