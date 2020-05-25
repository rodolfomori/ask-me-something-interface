import React from 'react'
import { FaReply } from 'react-icons/fa'

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
} from './styled'

function ModalAnswer() {
  const closeModal = () => {
    console.log('close')
  }

  return (
    <>
      <AnswersComponent>
        <Header>
          <WrapperTop>
            <h2>Por que o céu é azul ?</h2>
            <div style={{ display: 'flex' }}>
              <h3>Sports</h3>
              <Like />
              <p>24</p>
            </div>
          </WrapperTop>
          <Divider />
          <WrapperBottom>
            <h3>25 respostas</h3>
          </WrapperBottom>
        </Header>
        <MyAnswerContainer>
          <MyAnswer />
          <SendButton>
            Answer!
            <FaReply />
          </SendButton>
        </MyAnswerContainer>
        <Answer />
      </AnswersComponent>
      <BackBlur onClick={closeModal}></BackBlur>
    </>
  )
}

export default ModalAnswer
