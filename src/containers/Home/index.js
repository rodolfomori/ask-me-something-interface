import React, { useState, useEffect } from 'react'

import { Header, Sidebar, NewQuestion } from '../../components'
import api from '../../services/api'
import ModalAnswer from '../Modal Answer'
import { Container, ContainerHeader, AllQuestions, ContainerQuestions } from './styled'

function Home() {
  const [questions, setQuestions] = useState(null)
  const [openModalAnswer, setOpenModalAnswer] = useState(true)

  const openAnswer = () => {
    setOpenModalAnswer(true)
  }

  useEffect(() => {
    async function loadData() {
      const response = await api.get('questions')
      setQuestions(response.data)
    }
    loadData()
  }, [])

  return (
    <Container>
      {openModalAnswer && <ModalAnswer />}

      <ContainerHeader>
        <Header />
        <Sidebar />
      </ContainerHeader>
      <ContainerQuestions>
        {/* <NewQuestion /> */}
        {questions && (
          <>
            <div style={{ width: '100%' }}>
              {questions.map(
                (question, index) => index % 2 === 0 && <AllQuestions key={question.id} question={question} />
              )}
            </div>
            <div style={{ width: '100%' }}>
              {questions.map(
                (question, index) => index % 2 !== 0 && <AllQuestions key={question.id} question={question} />
              )}
            </div>
          </>
        )}
      </ContainerQuestions>
    </Container>
  )
}

export default Home
