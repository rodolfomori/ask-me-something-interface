import React from 'react'

import PropTypes from 'prop-types'

import askme from '../../assets/img/askmemore.png'
import { Container, Wrapper, Logo } from './styled'

function NewQuestion({ openModal }) {
  const setModalOpen = () => {
    openModal && openModal()
  }
  return (
    <Container onClick={setModalOpen}>
      <Wrapper>
        <Logo src={askme} />
        <p>click me to ask</p>
      </Wrapper>
    </Container>
  )
}

NewQuestion.propTypes = {
  openModal: PropTypes.func,
}

export default NewQuestion
