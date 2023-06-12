import styled from 'styled-components';
import { Link } from 'react-router-dom'

export const ContainerItens = styled.div `


 background: #0A0A10;

width: 414px;
height: 896px;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
justify-content: space-between;


`

export const Container = styled.div `

width: 100vw;
height: 100vh;
display: flex;
align-items: center;
justify-content: center;


`



export const H1 = styled.h1 `

width: 213px;
height: 33px;
left: 101px;
top: 390px;

font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 28px;
line-height: 33px;
text-align: center;

margin-bottom: 36px;

color: #FFFFFF;

`

export const Input = styled.input `

width: 370px;
height: 68px;
border: none;
background: rgba(255, 255, 255, 0.25);
border-radius: 14px;

font-family: 'Roboto';
font-style: normal;
font-weight: 300;
font-size: 18px;
line-height: 21px;
padding-left: 12px;
margin-bottom: 36px;

outline: none;

color: #FFFF;

`

export const InputLabel = styled.p`
width: 150px;
height: 1px;
left: 40px;
font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 55px;
display: flex;
padding: 0;
margin-right: 195px;
margin-bottom: 35px;



color: #EEEEEE;
`


export const Image = styled.img `
width: 342px;
height: 354px;
left: 36px;
top: 11px;
margin-top: 11px;

`

export const Button = styled(Link) `

width: 342px;
height: 68px;


font-family: 'Roboto';
font-style: normal;
font-weight: 900;
font-size: 17px;
line-height: 2px;
/* or 15% */

display: flex;
justify-content: center;
align-items: center;
text-align: center;

margin-bottom: 51px;
margin-top: 36px;

color: #FFFFFF;

background: #D93856;
cursor: pointer;

&:hover{
  opacity:0.7;
}

`
