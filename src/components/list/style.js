import styled from 'styled-components'


export const Container = styled.div`
  background-color: #000;
  width: 100%;
  height: 100%;
  border-radius: 0.8rem;
  overflow: hidden auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr;
  grid-auto-flow: row;
  grid-gap: 0.5rem;
  padding: 0.5rem;

  @media(max-width: 700px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media(max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media(max-width: 400px) {
    grid-template-columns: 1fr;
  }

  ::-webkit-scrollbar-track {
    background-color: #1a1a1a;
  }
  ::-webkit-scrollbar {
      width: 2px;
      background: #1a1a1a;
  }
  ::-webkit-scrollbar-thumb {
      background: #FCA025;
      border-radius: 20px;
  }
`

export const Card = styled.div`
  width: 100%;
  height: 15rem;
  background-color: #fff;
`

export const CardHover = styled.div`
  width: 100%;
  height: 15rem;
  position: ${props => props.display && 'absolute'};
  top: 0;
  z-index: 1;  
  background-color: rgba(0,0,0, 0.8);
  display: ${props => !props.display ? 'none' : 'flex'};
  align-items: center;
  justify-content: space-evenly;
  cursor: pointer;
  font-size: 2rem;
  color: #FCA025;

  & div:hover {
    color: #D88516
  }

  & p {
    font-size: 0.8rem;
    font-weight: bold;
  }
`
