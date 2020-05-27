import React, { createContext, useState, useContext, useCallback } from 'react'

import PropTypes from 'prop-types'

const SearchContext = createContext({})

const SearchProvider = ({ children }) => {
  const [searchData, setSearchData] = useState('')
  const [searchGeneralData, setSearchGeneralData] = useState('')

  const addSearchData = useCallback(async (getOption) => {
    setSearchData(getOption)
  }, [])

  const searchFor = useCallback(async (getWord) => {
    setSearchGeneralData(getWord)
  }, [])

  const value = React.useMemo(() => ({ searchFor, searchGeneralData, searchData, addSearchData }), [
    searchFor,
    searchGeneralData,
    searchData,
    addSearchData,
  ])

  return <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
}

function useSearch() {
  const context = useContext(SearchContext)

  if (!context) {
    throw new Error(`useSearch must be used within a SearchProvider`)
  }

  return context
}

export { SearchProvider, useSearch }

SearchProvider.propTypes = {
  children: PropTypes.any,
}
