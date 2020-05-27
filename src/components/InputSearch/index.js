import React, { useRef } from 'react'

import { useSearch } from '../../hooks/search'
import { Container, MainInput, MainButton } from './styled'

function InputSearch() {
  const { searchFor } = useSearch()
  const inputRef = useRef(null)

  return (
    <Container>
      <MainInput placeholder="search for ..." ref={inputRef} />
      <MainButton onClick={() => searchFor(inputRef.current.value)}>Search</MainButton>
    </Container>
  )
}

export default InputSearch
