import { FaHeart } from 'react-icons/fa'

import styled from 'styled-components'

export const Container = styled.div`
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.145733);
  border-radius: 10px;
  margin: 20px 0;
  background-color: #f2f5f8;
`

export const Wrapper = styled.div`
  display: flex;
  padding: 15px;
`

export const Avatar = styled.img`
  border-radius: 50%;
  height: 40px;
  width: 40px;
  margin-right: 30px;
`

export const AnswerText = styled.div``

export const Like = styled(FaHeart)`
  width: 50px;
  height: 50px;
  margin-left: 30px;
`

export const Date = styled.p`
  margin-left: 15px;
  margin-bottom: 5px;
  font-weight: 200;
  font-size: 15px;
`
