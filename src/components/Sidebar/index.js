import React from 'react'
import { FaFootballBall, FaGlobeAmericas, FaGamepad, FaTheaterMasks, FaPiggyBank } from 'react-icons/fa'

import { useSearch } from '../../hooks/search'
import isMobile from '../../utils/isMobile'
import { Container, Button, Wrapper } from './styled'

function Header() {
  const { addSearchData, searchData } = useSearch()
  const mobile = isMobile.any()

  const searchFor = (category) => {
    addSearchData(category)
  }

  return (
    <Container>
      <Wrapper>
        <Button searchData={searchData === 'Everything'} onClick={() => searchFor('Everything')}>
          <FaGlobeAmericas />
        </Button>
        {!mobile && <p>Everything</p>}
      </Wrapper>

      <Wrapper>
        <Button searchData={searchData === 'Sports'} onClick={() => searchFor('Sports')}>
          <FaFootballBall />
        </Button>
        {!mobile && <p>Sports</p>}
      </Wrapper>

      <Wrapper>
        <Button searchData={searchData === 'Games'} onClick={() => searchFor('Games')}>
          <FaGamepad />
        </Button>
        {!mobile && <p>Games</p>}
      </Wrapper>

      <Wrapper>
        <Button searchData={searchData === 'Entertainment'} onClick={() => searchFor('Entertainment')}>
          <FaTheaterMasks />
        </Button>
        {!mobile && <p>Entertainment</p>}
      </Wrapper>

      <Wrapper>
        <Button searchData={searchData === 'Finances'} onClick={() => searchFor('Finances')}>
          <FaPiggyBank />
        </Button>
        {!mobile && <p>Finances</p>}
      </Wrapper>
    </Container>
  )
}

export default Header
