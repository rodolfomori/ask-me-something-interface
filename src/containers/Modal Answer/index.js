import React, { useState } from 'react'
import { FaReply } from 'react-icons/fa'
import { RiArrowGoBackLine } from 'react-icons/ri'
import { toast } from 'react-toastify'

import PropTypes from 'prop-types'

import { Answer } from '../../components'
import api from '../../services/api'
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
  const [textAreaAnswer, setTextAreaAnswer] = useState('')

  const sendAnswer = async () => {
    const response = await api.post('questions', {
      id: new Date(),
      title: textAreaAnswer,
      subject: 'Sports',
      answer: [],
      createdAt: '2018-01-01 12:00:00',
      updateAt: '2020-01-01 12:00:00',
    })

    toast.success('Thank you for your answer')
    setTimeout(() => {
      setModalClose()
    }, 3000)
  }

  const setModalClose = () => {
    closeModal && closeModal(false)
  }

  return (
    <>
      <AnswersComponent>
        <Header>
          <Back onClick={setModalClose}>
            <RiArrowGoBackLine /> <p>Back Home</p>
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
          <h3>{question.answer ? question.answer.length + ' Answers' : '0 Answer'}</h3>
        </WrapperBottom>
        <MyAnswerContainer>
          <MyAnswer
            onChange={(event) => {
              setTextAreaAnswer(event.target.value)
            }}
            placeholder="Answer Me Please!"
          />
          <SendButton onClick={sendAnswer}>
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
