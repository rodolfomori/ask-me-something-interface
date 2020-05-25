import styled from 'styled-components'

import { Question } from '../../components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
`
export const ContainerHeader = styled.div`
  /* color: ${(props) => props.theme.palette.primary.main}; */
  display: flex;
  justify-content: space-between;

`

export const ContainerQuestions = styled.div`
  /* column-count: 2;
  -webkit-column-gap: 1em;
  -moz-column-gap: 1em;
  column-gap: 1em; */
  display: flex;
  flex-direction: row;
  width: 100%;
`

export const AllQuestions = styled(Question)`
  /* background-color: Gainsboro;
  color: white;
  -webkit-column-break-inside: avoid;
  page-break-inside: avoid;
  break-inside: avoid;
  margin: 1rem 0 1rem 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center; */
`
