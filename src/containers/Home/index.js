import React, { useState, useEffect } from 'react'

import { Header, Sidebar, NewQuestion } from '../../components'
import api from '../../services/api'
import ModalAnswer from '../Modal Answer'
import ModalQuestion from '../Modal Question'
import { Container, ContainerHeader, AllQuestions, ContainerQuestions } from './styled'

function Home() {
  const [questions, setQuestions] = useState(null)
  const [openModalAnswer, setOpenModalAnswer] = useState(false)
  const [openModalQuestion, setOpenModalQuestion] = useState(false)
  const [modalQuestion, setModalQuestion] = useState({})

  useEffect(() => {
    async function loadData() {
      const response = await api.get('questions')
      setQuestions(response.data)
    }
    loadData()
  }, [])

  return (
    <Container>
      {openModalAnswer && (
        <ModalAnswer
          question={modalQuestion}
          closeModal={(close) => {
            setOpenModalAnswer(close)
          }}
        />
      )}
      {openModalQuestion && (
        <ModalQuestion
          closeModal={(close) => {
            setOpenModalQuestion(close)
          }}
        />
      )}
      <ContainerHeader>
        <Header />
        <NewQuestion
          openModal={() => {
            setOpenModalQuestion(true)
          }}
        />
        <Sidebar />
      </ContainerHeader>
      <ContainerQuestions>
        {/* <NewQuestion /> */}
        {questions && (
          <>
            <div style={{ width: '100%' }}>
              {questions.map(
                (question, index) =>
                  index % 2 === 0 && (
                    <AllQuestions
                      openModal={(quest) => {
                        setModalQuestion(quest)
                        setOpenModalAnswer(true)
                      }}
                      key={question.id}
                      question={question}
                    />
                  )
              )}
            </div>
            <div style={{ width: '100%' }}>
              {questions.map(
                (question, index) =>
                  index % 2 !== 0 && (
                    <AllQuestions
                      openModal={(quest) => {
                        setModalQuestion(quest)
                        setOpenModalAnswer(true)
                      }}
                      key={question.id}
                      question={question}
                    />
                  )
              )}
            </div>
          </>
        )}
      </ContainerQuestions>
    </Container>
  )
}

export default Home
