import { Link } from 'react-router-dom'

import styled from 'styled-components'

export const Container = styled.div`
  padding: 10px;
  background: white;
  border-radius: 20px;
  margin: 20px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.145733);
  height: fit-content;
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  svg {
    height: 30px;
    width: 50px;
  }
`

export const WrapperText = styled.div`
  display: flex;
  flex: row;
  flex-direction: column;
  justify-content: space-between;
`

export const WrapperIcons = styled.div`
  display: flex;
  flex: row;
  justify-content: space-between;
  flex-direction: row;
`

export const About = styled.div`
  font-weight: 300;
  margin-top: 10px;
  margin-left: 5px;
  display: flex;
`

export const Title = styled.div`
  font-weight: 400;
  display: flex;
`

export const Avatar = styled.img`
  border-radius: 50%;
  width: 40px;
  height: 40px;
  margin: 0 10px 8px 0;
`

export const ReplyLink = styled.button`
  border: none;
  display: flex;
  align-items: center;
  svg {
    transform: rotateY(180deg);
  }
`
