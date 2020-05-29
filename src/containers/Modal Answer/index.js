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
  Back,
} from './styled'

function ModalAnswer({ closeModal, question: quest }) {
  const [question, setQuestion] = useState(quest)
  const [textAreaAnswer, setTextAreaAnswer] = useState('')

  const sendAnswer = async () => {
    try {
      const response = await api.post('answer', {
        question_id: question.id,
        text: textAreaAnswer,
      })
      toast.success('Thank you for your answer')

      console.log(response.data)

      const newQUestion = question
      // newQUestion.answers.push(response.data)
      setQuestion(newQUestion)
      setTextAreaAnswer('')
    } catch (err) {
      toast.error('Ohh no, we had a problem. Try again please!')
      console.error(err)
    }
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
            <h3>{question.subject}</h3>
          </div>
        </Header>

        <WrapperTop>
          <h2>{question.title}</h2>
        </WrapperTop>
        <Divider />
        <WrapperBottom>
          <h3>{question.answers ? question.answers.length + ' Answers' : '0 Answer'}</h3>
        </WrapperBottom>
        <MyAnswerContainer>
          <MyAnswer
            value={textAreaAnswer}
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
        {question.answers && question.answers.map((answer) => <Answer key={answer.id} answer={answer} />)}
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
