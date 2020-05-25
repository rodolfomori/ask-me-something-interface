import { FaHeart } from 'react-icons/fa'

import styled from 'styled-components'

export const Container = styled.div`
  border: 1px solid;
  border-radius: 20px;
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
`
