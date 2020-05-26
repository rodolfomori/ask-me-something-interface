import React from 'react'
import { FaReply, FaHeart } from 'react-icons/fa'

import PropTypes from 'prop-types'

import { Container, Title, About, Avatar, WrapperText, WrapperIcons, ReplyLink } from './styled'

function Question({ question: quest, openModal }) {
  const setModalOpen = (question) => {
    openModal && openModal(question)
  }

  return (
    <Container>
      <WrapperText>
        <Title>
          <Avatar src={`https://api.adorable.io/avatars/81/${quest.id}.png`} />
          {quest.title}
        </Title>
      </WrapperText>
      <WrapperIcons>
        <About>
          <p>
            {quest.answer ? `${quest.answer.length}  ${quest.answer.length > 1 ? 'Answers' : 'Answer'}` : '0 Answer'}
          </p>
        </About>
        <ReplyLink onClick={() => setModalOpen(quest)}>
          AnswerMe!
          <FaReply />
        </ReplyLink>
      </WrapperIcons>
    </Container>
  )
}

Question.propTypes = {
  question: PropTypes.object,
  openModal: PropTypes.func,
}

export default Question
