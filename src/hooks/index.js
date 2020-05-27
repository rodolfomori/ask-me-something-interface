import React from 'react'

import PropTypes from 'prop-types'

import { SearchProvider } from './search'

const AppProvider = ({ children }) => <SearchProvider>{children}</SearchProvider>

export default AppProvider

AppProvider.propTypes = {
  children: PropTypes.any,
}
