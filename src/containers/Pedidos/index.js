import React from 'react';
import Embalagem from './assets/Embalagem.svg'

import {Container,ContainerItens,Image, H1, Input, Button} from './styles'

function App() {
  return (

    <Container>
     <ContainerItens>
        <Image alt='Logo-Imagem ' src={Embalagem} />

          <H1>Pedidos</H1>

          <Input> </Input>

          <Button>
                Voltar
          </Button>

      </ContainerItens>

    </Container>

);



}

export default App;
