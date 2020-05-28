import React, { useRef, useState, useEffect } from 'react'

import { useSearch } from '../../hooks/search'
import { Container, MainInput, MainButton, Clear } from './styled'

function InputSearch() {
  const { searchFor, searchGeneralData } = useSearch()
  const [enableClear, setEnableClear] = useState(false)

  useEffect(() => {
    if (searchGeneralData) {
      setEnableClear(true)
    } else {
      setEnableClear(false)
    }
  }, [searchGeneralData])

  const inputRef = useRef(null)
  console.log(searchGeneralData)
  return (
    <Container>
      <MainInput placeholder="search for ..." ref={inputRef} />

      <MainButton onClick={() => searchFor(inputRef.current.value)}>Search</MainButton>

      {enableClear && (
        <Clear
          onClick={() => {
            searchFor('')
          }}
        >
          Clear
        </Clear>
      )}
    </Container>
  )
}

export default InputSearch
