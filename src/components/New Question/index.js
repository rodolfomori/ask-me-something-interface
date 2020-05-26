import React from 'react'

import PropTypes from 'prop-types'

import askme from '../../assets/img/askmemore.png'
import more from '../../assets/img/moreicon.png'
import { Container, Button, Wrapper, Logo, MoreIcon } from './styled'

function NewQuestion({ openModal }) {
  const setModalOpen = () => {
    openModal && openModal()
  }
  return (
    <Container>
      <Wrapper>
        <Logo src={askme} />
        <Button onClick={setModalOpen}>
          <MoreIcon src={more} />
        </Button>
      </Wrapper>
    </Container>
  )
}

NewQuestion.propTypes = {
  openModal: PropTypes.func,
}

export default NewQuestion
