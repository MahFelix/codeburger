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

color: #FFFFFF;

`

export const Input = styled.input `

width: 370px;
height: 101px;
border: none;
background: rgba(255, 255, 255, 0.25);
border-radius: 14px;

font-family: 'Roboto';
font-style: normal;
font-weight: 300;
font-size: 18px;
line-height: 21px;
padding:15px;
margin-bottom: 150px;

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
margin-right: 190px;
margin-bottom: 30px;



color: #EEEEEE;
`


export const Image = styled.img `
width: 342px;
height: 354px;
left: 36px;
top: 11px;
margin-top: 11px;

`

export const Button = styled(Link)`

width: 342px;
height: 68px;

margin-bottom: 50px;

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

color: #FFFFFF;

background: #2c2c31;
cursor: pointer;

`



export const User = styled.li`
display: flex;
align-items: center;
justify-content: space-around;

width: 350px;
height: 101px;
border-right: none;
background: rgba(255, 255, 255, 0.25);
border-radius: 14px;

font-family: 'Roboto';
font-style: normal;
font-weight: 300;
font-size: 18px;
line-height: 21px;
margin-right: 25px;
margin-bottom: 36px;
margin-top: 36;
margin-left:0;

color: #FFFF;


div{
  display: flex;
  flex-direction: column;

}

`
export const Buton = styled.button`

background: none;
border: none;
cursor: pointer;

`