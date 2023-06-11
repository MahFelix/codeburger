import React, {useState, useEffect, useRef} from 'react';
import Embru from '../../assets/embalagemicon.svg'



import {Container,ContainerItens,Image, H1, Input, Button,User,Buton} from './styles'

function Pedidos() {

  const [pedidos, setPedidos] = useState([])
  const InputPedido = useRef()



function DeletePedido(PedidoId){
 const newPedido = pedidos.filter(pedido => pedido.id !== PedidoId)

 setPedidos(newPedido)
}

function goBackPage(){

}
  return (

    <Container>
     <ContainerItens>
        <Image alt='Logo-Imagem ' src={Embru}/>

          <H1>Pedidos</H1>

        <Input ref={InputPedido} placeholder=' 1 Coca-Cola, 1-X Salada'>
        </Input>

          <Button onClick={goBackPage}>
                Voltar
          </Button>


      </ContainerItens>
    </Container>

);



}

export default Pedidos;
