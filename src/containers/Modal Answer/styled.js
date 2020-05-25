import { FaHeart } from 'react-icons/fa'

import styled from 'styled-components'

export const BackBlur = styled.div`
  width: 100vw;
  height: 100vh;
  opacity: 0.5;
  margin: 0;
  background: black;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  z-index: 98;
`

export const AnswersComponent = styled.div`
  width: 70vw;
  height: 70vh;
  margin: 0;
  background: yellow;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  opacity: 1 !important;
  z-index: 99;
  border-radius: 20px;
  padding: 20px;
`

export const Header = styled.div``

export const WrapperTop = styled.div`
  display: flex;
  display: flex;
  justify-content: space-between;
`

export const Divider = styled.div`
  height: 5px;
  width: 90%;
  background: red;
  margin: 10px 0 2px 0;
`

export const WrapperBottom = styled.div`
  margin-bottom: 25px;
  svg {
    height: 40px;
    width: 40px;
  }
`

export const Like = styled(FaHeart)`
  width: 30px;
  height: 30px;
  margin-left: 30px;
  margin-right: 10px;
`

export const MyAnswerContainer = styled.div`
  display: flex;
`

export const SendButton = styled.button`
  margin-left: 10px;
  border-radius: 13px;
  padding: 7px;
  height: 50px;
`

export const MyAnswer = styled.textarea`
  resize: none;
  width: 100%;
  height: 80px;
  border-radius: 20px;
  padding: 10px;
  margin: 0px;
`
