import styled from 'styled-components'

export const Container = styled.div`
  padding: 10px;
  background: white;
  max-height: 327px;
  max-width: 200px;
  border-radius: 20px;
  margin: 50px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.145733);
  display: flex;
  cursor: pointer;

  &:hover {
    box-shadow: 10px 10px 15px rgb(255, 246, 137);
    transition: 0.3;
  }
  p {
    font-size: 20px;
  }
`

export const Wrapper = styled.div`
  margin: 10px;
  display: flex;
  align-items: center;
  p {
    margin-left: 10px;
    text-align: center;
    margin-top: 20px;
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
