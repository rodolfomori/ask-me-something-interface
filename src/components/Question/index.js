import React from 'react'

import PropTypes from 'prop-types'

import { Container, Title, Text } from './styled'

function Question(quest) {
  console.log(quest)
  return (
    <Container>
      <Title>{quest.question.title}</Title>
    </Container>
  )
}

export default Question

Question.propTypes = {
  quest: PropTypes.object,
}
