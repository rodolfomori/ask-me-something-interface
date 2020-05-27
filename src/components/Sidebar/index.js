import React from 'react'
import { FaFootballBall, FaGlobeAmericas, FaGamepad, FaTheaterMasks, FaPiggyBank } from 'react-icons/fa'

import { useSearch } from '../../hooks/search'
import { Container, Button, Wrapper } from './styled'

function Header() {
  const { addSearchData, searchData } = useSearch()

  const searchFor = (category) => {
    addSearchData(category)
  }

  return (
    <Container>
      <Wrapper>
        <Button searchData={searchData === 'Everything'} onClick={() => searchFor('Everything')}>
          <FaGlobeAmericas />
        </Button>
        <p>Everything</p>
      </Wrapper>

      <Wrapper>
        <Button searchData={searchData === 'Sports'} onClick={() => searchFor('Sports')}>
          <FaFootballBall />
        </Button>
        <p>Sports</p>
      </Wrapper>

      <Wrapper>
        <Button searchData={searchData === 'Games'} onClick={() => searchFor('Games')}>
          <FaGamepad />
        </Button>
        <p>Games</p>
      </Wrapper>

      <Wrapper>
        <Button searchData={searchData === 'Entertainment'} onClick={() => searchFor('Entertainment')}>
          <FaTheaterMasks />
        </Button>
        <p>Entertainment</p>
      </Wrapper>

      <Wrapper>
        <Button searchData={searchData === 'Finances'} onClick={() => searchFor('Finances')}>
          <FaPiggyBank />
        </Button>
        <p>Finances</p>
      </Wrapper>
    </Container>
  )
}

export default Header
