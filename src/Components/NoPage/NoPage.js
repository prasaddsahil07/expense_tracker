import React from 'react'
import styled from 'styled-components'

function NoPage() {
  return (
    <NoPageStyled>
        <h2>ERROR : 404 (NO Page found)</h2>
    </NoPageStyled>
  )
}

const NoPageStyled = styled.h1`
    font-size: 40px;
    font-weight: 100;
    font-family: "museo", Helvetica Neue, Helvetica, sans-serif;
`

export default NoPage
