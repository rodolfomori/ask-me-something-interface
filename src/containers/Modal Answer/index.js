import React, { useState } from 'react'
import { FaReply } from 'react-icons/fa'
import { RiArrowGoBackLine } from 'react-icons/ri'

import PropTypes from 'prop-types'

import { Answer } from '../../components'
import {
  SendButton,
  MyAnswer,
  MyAnswerContainer,
  BackBlur,
  AnswersComponent,
  Header,
  Divider,
  WrapperBottom,
  WrapperTop,
  Like,
  Back,
} from './styled'

function ModalAnswer({ closeModal, question: quest }) {
  const [question, setQuestion] = useState(quest)

  console.log(question)
  const setModalClose = () => {
    closeModal && closeModal(false)
  }

  return (
    <>
      <AnswersComponent>
        <Header>
          <Back onClick={setModalClose}>
            <RiArrowGoBackLine /> Back Home
          </Back>
          <div style={{ display: 'flex' }}>
            <h3>Sports</h3>
            <Like />
            <p>24</p>
          </div>
        </Header>

        <WrapperTop>
          <h2>{question.title}</h2>
        </WrapperTop>
        <Divider />
        <WrapperBottom>
          <h3>{question.answer ? question.answer.length : '0'} respostas</h3>
        </WrapperBottom>
        <MyAnswerContainer>
          <MyAnswer placeholder="Answer Me Please!" />
          <SendButton>
            Answer!
            <FaReply />
          </SendButton>
        </MyAnswerContainer>
        {question.answer && question.answer.map((answer) => <Answer key={answer.id} answer={answer} />)}
      </AnswersComponent>
      <BackBlur onClick={setModalClose}></BackBlur>
    </>
  )
}

ModalAnswer.propTypes = {
  closeModal: PropTypes.func,
  question: PropTypes.object,
}

export default ModalAnswer
