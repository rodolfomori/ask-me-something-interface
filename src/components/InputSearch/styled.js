import { shade } from 'polished'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  max-width: 100%;
`

export const MainInput = styled.input`
  width: 300px;
  height: 40px;
  border-radius: 10px;
  padding: 10px;
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
export const Clear = styled.button`
  padding: 7px;
  height: 40px;
  border: none;
  border-radius: 50px;
  margin-left: 5px;
  background: #ef9d49;
  margin: 0;
  margin-left: 10px;
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
