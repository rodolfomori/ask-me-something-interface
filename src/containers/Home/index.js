import React, { useState, useEffect } from 'react'

import { Header, Sidebar, NewQuestion, InputSearch } from '../../components'
import { useSearch } from '../../hooks/search'
import api from '../../services/api'
import ModalAnswer from '../Modal Answer'
import ModalQuestion from '../Modal Question'
import { Container, ContainerHeader, AllQuestions, ContainerQuestions } from './styled'

function Home() {
  const { searchGeneralData, searchData } = useSearch()

  const [questions, setQuestions] = useState(null)
  const [openModalAnswer, setOpenModalAnswer] = useState(false)
  const [openModalQuestion, setOpenModalQuestion] = useState(false)
  const [modalQuestion, setModalQuestion] = useState({})

  const loadData = async () => {
    const response = await api.get('questions')
    setQuestions(response.data)
  }

  useEffect(() => {
    if (searchGeneralData) {
      const filterQuestions = questions.filter((quest) => quest.title.includes(searchGeneralData))
      setQuestions(filterQuestions)
    } else {
      loadData()
    }
  }, [searchGeneralData])

  useEffect(() => {
    if (searchData && searchData !== 'Everything') {
      console.log(searchData)
      const filterQuestions = questions.filter((quest) => quest.subject === searchData)
      setQuestions(filterQuestions)
    }
    if (searchData && searchData === 'Everything') {
      loadData()
    }
  }, [searchData])

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
      <InputSearch />
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
