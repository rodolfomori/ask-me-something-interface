import styled from 'styled-components'

export const Container = styled.div`
  padding: 10px;
  background: white;
  max-height: 327px;
  min-height: 80px;
  max-width: 200px;
  border-radius: 20px;
  margin: 50px 0;
  margin-right: 50px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.145733);

  @media (max-width: 600px) {
    margin: 20px;
    max-width: 99%;
    display: flex;
  }
`

export const Wrapper = styled.div`
  margin: 10px;
  display: flex;
  align-items: center;
  p {
    margin-left: 10px;
  }
  @media (max-width: 600px) {
    margin: 5px;
  }
`

export const Button = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 10px;
  background-color: ${(props) => (props.searchData ? ' #5374ff' : '#ecf0f3')};
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    height: 35px;
    width: 35px;
    color: ${(props) => (props.searchData ? ' #ecf0f3' : '#92a3af')};
  }

  &:hover {
    background: #5374ff;
    svg {
      color: white;
    }
  }
`
