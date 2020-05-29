import styled from 'styled-components'

export const Container = styled.div`
  padding: 10px;
  background: white;
  border-radius: 20px;
  margin: 50px;
  margin-left: 20px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.145733);
  display: flex;
  margin-right: 0;

  h1 {
    padding: 5px;
    text-align: -webkit-auto;
  }

  @media (max-width: 600px) {
    width: fit-content;
    margin: 20px;
  }
`
export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 600px) {
    width: 80%;
  }
`
export const Logo = styled.img`
  border-radius: 20px;
  background: #8f9ca9;
  max-height: 307px;
  max-width: 100%;
`
