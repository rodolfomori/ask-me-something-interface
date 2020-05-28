import { shade } from 'polished'
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

export const Wrapper = styled.div`
  display: flex;
  align-items: center;

  margin: 20px;
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
export const UnansweredButton = styled.button`
  margin-left: 33px;
  padding: 7px;
  height: 40px;
  border: none;
  border-radius: 10px;
  background: #5374ff;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.145733);
  color: ${(props) => (props.justUnanswered ? 'white' : 'black')};
  svg {
    height: 25px;
    width: 25px;
  }

  &:hover {
    background: ${(props) => (props.justUnanswered ? shade('0.1', '#5374ff') : shade('0.05', 'white'))};
    transition: 0.3;
  }
  background-color: ${(props) => (props.justUnanswered ? ' #5374ff' : 'white')};
`

export const WrapperNoQuestion = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  align-items: center;
  p {
    text-align: center;
    font-size: 30px;
    font-weight: 500;
    margin-bottom: 20px;
  }
  img {
    width: max-content;
    border-radius: 20px;
  }
  display: flex;
  flex-direction: column;
  margin-top: 50px;
`
export const AddQuestion = styled.button`
  margin-top: 25px;
  height: 50px;
  width: 200px;
  border-radius: 10px;
  border: none;
  background: #5374ff;
  color: white;
  font-size: 17px;
  font-weight: 300;
  &:hover {
    background: ${shade('0.1', '#5374ff')};
    transition: 0.3;
  }
`
