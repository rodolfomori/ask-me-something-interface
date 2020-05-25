import React from 'react'
import { FaReply, FaHeart } from 'react-icons/fa'

import PropTypes from 'prop-types'

import { Container, Title, About, Avatar, WrapperText, WrapperIcons, ReplyLink } from './styled'

function Question(quest) {
  console.log(quest)
  return (
    <Container>
      <WrapperText>
        <Title>
          <Avatar src={`https://api.adorable.io/avatars/81/${quest.question.id}.png`} />

          {quest.question.title}
        </Title>
      </WrapperText>
      <WrapperIcons>
        <About>
          <p>
            {quest.question.answer
              ? `${quest.question.answer.length}  ${quest.question.answer.length > 1 ? 'Answers' : 'Answer'}`
              : '0 Answer'}
          </p>
        </About>
        <ReplyLink>
          AnswerMe!
          <FaReply />
        </ReplyLink>
      </WrapperIcons>
    </Container>
  )
}

export default Question

Question.propTypes = {
  quest: PropTypes.object,
}
