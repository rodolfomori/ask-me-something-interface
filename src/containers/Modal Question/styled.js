import { FaHeart } from 'react-icons/fa'

import { shade } from 'polished'
import styled from 'styled-components'

export const BackBlur = styled.div`
  width: 100vw;
  height: 100%;
  opacity: 0.5;
  margin: 0;
  background: black;
  position: fixed;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  z-index: 98;
`

export const QuestionComponent = styled.div`
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.145733);
  overflow: auto;
  width: 70vw;
  height: 70vh;
  margin: 0;
  position: fixed;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  z-index: 99;
  border-radius: 10px;
  padding: 20px;
  background: #e8eaee;
  opacity: 1 !important;

  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-track {
    background: none;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #5374ff;
    border-radius: 10px;
  }
`

export const Back = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  width: 120px;
  svg {
    width: 20px;
    height: 20px;
    margin-right: 10px;
  }
  &:hover {
    text-decoration: underline;
  }
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
`

export const WrapperTop = styled.div`
  margin-top: 25px;
  display: flex;
  display: flex;
  justify-content: space-between;
`

export const Divider = styled.div`
  height: 5px;
  width: 90%;
  background: #5374ff;
  margin: 10px 0 2px 0;
`

export const WrapperBottom = styled.div`
  margin-bottom: 25px;
  svg {
    height: 25px;
    width: 25px;
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
  align-items: center;
`

export const SendButton = styled.button`
  padding: 7px;
  height: 80px;
  border: none;
  border-radius: 10px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  background: #5374ff;
  margin: 0;
  color: white;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.145733);

  svg {
    height: 25px;
    width: 25px;
  }

  &:hover {
    background: ${shade('0.1', '#5374ff')};
    transition: 0.3;
  }
`

export const MyAnswer = styled.textarea`
  resize: none;
  width: 100%;
  height: 80px;
  border-radius: 10px;
  padding: 10px;
  margin: 0;
  font-size: 14px;
  background-color: white;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border: none;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.145733);

  &::placeholder {
    font-size: 16px;
    font-family: 'Roboto';
  }
`
