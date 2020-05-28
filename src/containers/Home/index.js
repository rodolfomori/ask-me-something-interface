import React, { useState, useEffect } from 'react'

import starwars from '../../assets/img/starwars.gif'
import { Header, Sidebar, NewQuestion, InputSearch } from '../../components'
import { useSearch } from '../../hooks/search'
import api from '../../services/api'
import isMobile from '../../utils/isMobile'
import ModalAnswer from '../Modal Answer'
import ModalQuestion from '../Modal Question'
import {
  Container,
  ContainerHeader,
  AllQuestions,
  ContainerQuestions,
  UnansweredButton,
  Wrapper,
  WrapperNoQuestion,
  AddQuestion,
} from './styled'

function Home() {
  const { searchGeneralData, searchData } = useSearch()
  const mobile = isMobile.any()

  const [questions, setQuestions] = useState(null)
  const [tempQuestions, setTempQuestions] = useState(null)
  const [openModalAnswer, setOpenModalAnswer] = useState(false)
  const [openModalQuestion, setOpenModalQuestion] = useState(false)
  const [modalQuestion, setModalQuestion] = useState({})
  const [justUnanswered, setJustUnanswered] = useState(false)

  const loadData = async () => {
    const response = await api.get('question')
    setQuestions(response.data)
    setTempQuestions(response.data)
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
      const filterQuestions = tempQuestions.filter((quest) => quest.subject === searchData)
      setQuestions(filterQuestions)
    }
    if (searchData && searchData === 'Everything') {
      loadData()
    }
    setJustUnanswered(false)
  }, [searchData])

  const setJustUnansweredQuestion = () => {
    if (!justUnanswered) {
      const justUnansweredQuestions = questions.filter((quest) => quest.answers.length < 1)
      setQuestions(justUnansweredQuestions)
    } else {
      if (searchData && searchData !== 'Everything') {
        const filterQuestions = tempQuestions.filter((quest) => quest.subject === searchData)

        setQuestions(filterQuestions)
      } else {
        setQuestions(tempQuestions)
      }
    }
    setJustUnanswered(!justUnanswered)
  }

  return (
    <Container>
      {openModalAnswer && (
        <ModalAnswer
          question={modalQuestion}
          closeModal={(close) => {
            setOpenModalAnswer(close)
            loadData()
          }}
        />
      )}
      {openModalQuestion && (
        <ModalQuestion
          closeModal={(close) => {
            setOpenModalQuestion(close)
            loadData()
          }}
        />
      )}
      <ContainerHeader>
        <Header />

        {mobile ? (
          <AddQuestion onClick={() => setOpenModalQuestion(true)}>Add your question!</AddQuestion>
        ) : (
          <NewQuestion
            openModal={() => {
              setOpenModalQuestion(true)
            }}
          />
        )}
        <Sidebar />
      </ContainerHeader>
      <Wrapper>
        <InputSearch />
        <UnansweredButton justUnanswered={justUnanswered} onClick={setJustUnansweredQuestion}>
          {!justUnanswered ? 'Just unanswered questions' : 'All Questions'}
        </UnansweredButton>
      </Wrapper>

      {questions && questions.length > 0 ? (
        mobile ? (
          <>
            {questions.map((question, index) => (
              <AllQuestions
                openModal={(quest) => {
                  setModalQuestion(quest)
                  setOpenModalAnswer(true)
                }}
                key={question.id}
                question={question}
              />
            ))}
          </>
        ) : (
          <ContainerQuestions>
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
          </ContainerQuestions>
        )
      ) : (
        <WrapperNoQuestion>
          <p>Any question here ?</p>
          <img src={starwars} />
          {!mobile && <AddQuestion onClick={() => setOpenModalQuestion(true)}>Add your question!</AddQuestion>}
        </WrapperNoQuestion>
      )}
    </Container>
  )
}

export default Home
