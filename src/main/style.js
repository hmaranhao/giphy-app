import styled from 'styled-components'

export const ContainerApp = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  background: #121212;
  padding: 10px;
`

export const DivInputBlock = styled.div`
  position: relative;

  &:focus-within {
    &:after {
      width: 85%;
      height: 1px;
      position: absolute;
      bottom: 9px;
      right: 5px;
      left: 25px;
      background: #FCA025;
      content: '';
    }
  }
   & > i {
      position: absolute;
      top: 18px;
      left: 15px;
      color: #FCA025;
   }
`

export const SearchInput = styled.input`
  height: 2.6rem;
  width: 20rem;
  margin: 5px;
  border-radius: 0.8rem;
  border: 2px solid #000;
  background: #121212;
  color: #FCA025;
  cursor: text;
  padding: 0 2rem;
  outline: none;
  


  @media(max-width: 500px) {
    width: 98%;
  }

  &:active {
    outline: none;
  }
`

export const DivFlexRow = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`

export const Button = styled.button`
  border: 0;
  margin: 0;
  padding: 0;
  min-height: 2.2rem;
  min-width: 5rem;
  border-radius: 0.4rem;
  background-color: #FCA025;
  color: #fff;
  font-weight: bold;
  transition: background-color 1s;
  cursor: pointer;
  outline: none;

  &:hover {
    background-color: #D88516
  }

  &:active {
    outline: none;
  }
`
export const MyFavoritesButton = styled.button`
  border: 0;
  margin: 0;
  padding: 0;
  min-height: 2.2rem;
  min-width: 8rem;
  border-radius: 0.4rem;
  background-color: #3BF409;
  color: #fff;
  font-weight: bold;
  transition: background-color 1s;
  cursor: pointer;
  outline: none;

  &:hover {
    background-color: #33D108;
  }

  &:active {
    outline: none;
  }
`