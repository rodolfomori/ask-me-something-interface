import React, { useState } from 'react'
import { FaReply } from 'react-icons/fa'
import { RiArrowGoBackLine } from 'react-icons/ri'
import { toast } from 'react-toastify'

import PropTypes from 'prop-types'

import { AskAnimated } from '../../components'
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
  QuestionComponent,
} from './styled'

function ModalQuestion({ closeModal }) {
  const [loop, setLoop] = useState(true)
  const setModalClose = () => {
    closeModal && closeModal(false)
  }

  const sendQuestion = () => {
    toast.success('Question successfully added!')
    setTimeout(() => {
      setModalClose()
    }, 3000)
  }

  setInterval(() => {
    setLoop(false)
    setLoop(true)
  }, 12000)
  return (
    <>
      <QuestionComponent>
        <Header>
          <Back onClick={setModalClose}>
            <RiArrowGoBackLine /> <p>Back Home</p>
          </Back>
        </Header>

        <WrapperTop></WrapperTop>
        <Divider />
        <WrapperBottom></WrapperBottom>
        <MyAnswerContainer>
          <MyAnswer placeholder="Ask Me Please!" />
          <SendButton onClick={sendQuestion}>
            Ask Now!
            <FaReply />
          </SendButton>
        </MyAnswerContainer>
        {loop && <AskAnimated />}
      </QuestionComponent>
      <BackBlur onClick={setModalClose}></BackBlur>
    </>
  )
}

ModalQuestion.propTypes = {
  closeModal: PropTypes.func,
  question: PropTypes.object,
}

export default ModalQuestion
