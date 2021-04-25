import React from 'react'
import styled from 'styled-components'
import COLORS from './Colors'


const Header = () => {
  return (
    <Container>
      <Heading
        type="text"
        value="To do list" />
    </Container>
  )
}

const Container = styled.div`
  background: ${COLORS.lightGrey};
  height: 70px;
  border-radius: 24px;
  /* margin: 0 30px; */
  display: flex;
  padding: 0 20px;
  `

const Heading = styled.input`
  color: ${COLORS.darkGrey};
  font-size: 24px;
  border: none;
  background: none;
  font-weight: 500;
  /* margin: auto 0; */
  line-height: 1.8;

`


export default Header