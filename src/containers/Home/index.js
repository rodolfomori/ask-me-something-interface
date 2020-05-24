import React, { useState, useEffect } from 'react'

import { Header, Sidebar, Question, NewQuestion } from '../../components'
import api from '../../services/api'
import { Container, ContainerHeader } from './styled'

function Home() {
  const [questions, setQuestions] = useState(null)

  useEffect(() => {
    async function loadData() {
      const response = await api.get('questions')
      setQuestions(response.data)
    }
    loadData()
  }, [])

  return (
    <>
      <ContainerHeader>
        <Header />
        <Sidebar />
      </ContainerHeader>
      <Container>
        <NewQuestion />
        {questions && questions.map((question) => <Question key={question.id} question={question} />)}
      </Container>
    </>
  )
}

export default Home
