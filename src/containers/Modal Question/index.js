import React, { useState } from 'react'
import { FaReply } from 'react-icons/fa'
import { RiArrowGoBackLine } from 'react-icons/ri'
import { toast } from 'react-toastify'

import PropTypes from 'prop-types'

import { AskAnimated } from '../../components'
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
  QuestionComponent,
  SelectSubject,
} from './styled'

function ModalQuestion({ closeModal }) {
  const [textAreaQuestion, setTextAreaQuestion] = useState('')
  const [selectedSubject, setSelectedSubject] = useState(null)

  console.log(selectedSubject)
  const setModalClose = () => {
    closeModal && closeModal(false)
  }

  const subject = [
    { id: 1, type: 'Everything' },
    { id: 2, type: 'Sports' },
    { id: 3, type: 'Games' },
    { id: 4, type: 'Entertainment' },
    { id: 5, type: 'Finances' },
  ]

  const sendQuestion = async () => {
    const response = await api.post('question', {
      // id: new Date(),
      title: textAreaQuestion,
      subject: selectedSubject.type,
      // answer: [],
      // createdAt: '2018-01-01 12:00:00',
      // updateAt: '2020-01-01 12:00:00',
    })
    toast.success('Question successfully added!')
    setTimeout(() => {
      setModalClose()
    }, 3000)
  }

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
          <MyAnswer
            onChange={(event) => {
              setTextAreaQuestion(event.target.value)
            }}
            placeholder="Ask Me Please!"
          />
          <SendButton disabled={!selectedSubject || !textAreaQuestion} onClick={sendQuestion}>
            Ask Now!
            <FaReply />
          </SendButton>
        </MyAnswerContainer>
        <SelectSubject
          placeholder="Subject..."
          key={(sub) => sub.id}
          name="subject"
          options={subject}
          onChange={setSelectedSubject}
          getOptionValue={(sub) => sub.type}
          getOptionLabel={(sub) => sub.type}
        />
        {/* {loop && <AskAnimated />} */}
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
