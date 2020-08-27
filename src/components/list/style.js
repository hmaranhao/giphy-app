import styled from 'styled-components'


export const Container = styled.div`
  background-color: #000;
  width: 70vw;
  height: 90vh;
  border-radius: 0.8rem;
  overflow: hidden auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr;
  grid-auto-flow: row;
  grid-gap: 0.5rem;
  padding: 0.5rem;
`

export const Card = styled.div`
  width: 100%;
  height: 15rem;
  background-color: #fff;
`
