import styled from 'styled-components'

export const Container = styled.div`
  padding: 10px;
  background: white;
  height: 327px;
  width: 200px;
  border-radius: 20px;
  margin: 50px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.145733);
  display: flex;
`

export const Wrapper = styled.div`
  margin: 10px;
  display: flex;
  align-items: center;
  p {
    margin-left: 10px;
    text-align: center;
  }
  justify-content: space-between;
  flex-direction: column;
`

export const Button = styled.button`
  width: 100px;
  height: 100px;
  border-radius: 10px;
  background-color: white;
  border: none;
  display: flex;
  justify-content: center;
`

export const Logo = styled.img`
  width: 100%;
`

export const MoreIcon = styled.img`
  width: 100%;
  color: #5374ff;
`
