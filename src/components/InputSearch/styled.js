import { shade } from 'polished'
import styled from 'styled-components'

export const Container = styled.div``

export const MainInput = styled.input`
  margin-left: 20px;
  margin-bottom: 15px;
  width: 300px;
  height: 40px;
  border-radius: 10px;
  padding: 10px;
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

export const MainButton = styled.button`
  padding: 7px;
  height: 40px;
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
export const Logo = styled.img`
  width: 100%;
`
