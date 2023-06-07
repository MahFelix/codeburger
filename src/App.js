import React from 'react';
import Burger from './assets/burgericon.svg'

import {Container,ContainerItens,Image, H1, Input, Button, InputLabel} from './styles'

function App() {
  return (

    <Container>
     <ContainerItens>
        <Image alt='Logo-Imagem ' src={Burger} />

          <H1>Faça seu pedido</H1>

              <InputLabel> Pedido </InputLabel>
        <Input placeholder=' 1 Coca-Cola, 1-X Salada'></Input>

              <InputLabel> Nome do cliente </InputLabel>
          <Input placeholder='Marta'></Input>

          <Button>
                Novo pedido
          </Button>

      </ContainerItens>

    </Container>

);



}

export default App;
