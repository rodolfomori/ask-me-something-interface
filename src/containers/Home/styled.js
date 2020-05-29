import { shade } from 'polished'
import styled from 'styled-components'

import { Question } from '../../components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
  }
`
export const ContainerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  display: flex;

  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

export const ContainerQuestions = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 20px;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`

export const AllQuestions = styled(Question)``

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

  @media (max-width: 600px) {
    margin: 0;
    margin-top: 20px;
  }
`

export const WrapperNoQuestion = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  margin-bottom: 50px;
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
    max-width: 80%;
  }
  display: flex;
  flex-direction: column;
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
