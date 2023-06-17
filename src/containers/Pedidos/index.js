import React, {useState, useEffect} from 'react';
import axios from 'axios'
import Embru from '../../assets/embalagemicon.svg'
import Trash from '../../assets/lixeira.svg'



import {Container,ContainerItens,Image, H1, Button,User,Buton} from './styles'

function Pedidos() {
  const [pedidos, setPedidos] = useState([])




async function DeletePedido(PedidoId){
  await axios.delete(`http://localhost:3000/users/${PedidoId}`)
 const newPedidos = pedidos.filter(pedido => pedido.id !== PedidoId)

 setPedidos(newPedidos)

}

useEffect(()=> {
    async function fetchpedidos(){
   const {data:niwP} = await axios.get('http://localhost:3000/users')

   setPedidos(niwP)
   }

   fetchpedidos()

  },[])


  return (

    <Container>
     <ContainerItens>
        <Image alt='Logo-Imagem ' src={Embru}/>

          <H1>Pedidos</H1>

  <ul>
            { pedidos.map( pedidos => (
              <User key={pedidos.id }>
                <div>
                <p> {pedidos.pedido}</p>
                <p><b> {pedidos.name}</b></p>
               </div>
                 <Buton onClick={() =>DeletePedido(pedidos.id)}>
                  <img src={Trash} alt='lata-de-lixo'></img>
                </Buton>
              </User>

            ))

            }

          </ul>

          <Button to="/" >
                Voltar
          </Button>
      </ContainerItens>
    </Container>

);



}

export default Pedidos;
