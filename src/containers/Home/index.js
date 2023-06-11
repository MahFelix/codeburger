import React, { useState, useRef}  from 'react';
import axios from 'axios'
import Burger from '../../assets/burgericon.svg'
import Trash from '../../assets/lixeira.svg'

import {Container,ContainerItens,Image, H1, Input, Button, InputLabel, User,Buton} from './styles'

function App() {
  const [pedidos, setPedidos] = useState([])
  const InputPedido = useRef()
  const InputName = useRef()



  async function AddNewPedido() {
    const data = await axios.post('http://localhost:3001/users', {
      age: InputPedido.current.value,
      name: InputName.current.value,
    } )
//  setPedidos([...pedidos,{id: Math.random(), pedido: InputPedido.current.value, name:InputName.current.value}])

}


function DeletePedido(PedidoId){
 const newPedido = pedidos.filter(pedido => pedido.id !== PedidoId)

 setPedidos(newPedido)
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

          <Button onClick={AddNewPedido}>
                Novo pedido
          </Button>

          <ul>
            { pedidos.map( pedidos => (
              <User key={pedidos.id }>
                <p> {pedidos.pedido}</p> <p> {pedidos.name}</p>
                <Buton onClick={() =>DeletePedido(pedidos.id)}>
                  <img src={Trash} alt='lata-de-lixo'></img>
                </Buton>
              </User>

            ))

            }

          </ul>

      </ContainerItens>
    </Container>

);



}

export default App;
