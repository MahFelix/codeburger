import React, { useState, useRef}  from 'react';
import axios from 'axios'
import Burger from '../../assets/burgericon.svg'

import {Container,ContainerItens,Image, H1, Input, Button, InputLabel,} from './styles'

function App() {
  const [pedidos, setPedidos] = useState([])
  const InputPedido = useRef()
  const InputName = useRef()



  async function AddNewPedido() {
    const {data: newPedido} = await axios.post('http://localhost:3001/users', {
      age: InputPedido.current.value,
      name: InputName.current.value,
    } )

    console.log(newPedido)

    setPedidos([...pedidos,newPedido]);


}


  return (

    <Container>
     <ContainerItens>
        <Image alt='Logo-Imagem ' src={Burger} />

          <H1>Faça seu pedido!</H1>

              <InputLabel>Pedido</InputLabel>
        <Input  ref={InputPedido} placeholder=' 1 Coca-Cola, 1-X Salada'></Input>

              <InputLabel>Nome do cliente</InputLabel>
          <Input  ref={InputName} placeholder=' Marta '></Input>

          <Button to="/Pedidos" onClick={AddNewPedido}>
                Novo pedido
          </Button>


      </ContainerItens>
    </Container>

);



}

export default App;
