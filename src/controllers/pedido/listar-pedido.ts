import { Controller,HttpRequest, HttpResponse } from "../../interfaces"
import Pedido from "../../models/pedido-model";

class ListarPedidosController implements Controller {
    async handle(httpRequest:HttpRequest): Promise<HttpResponse> {
        try {

            const pedidoId = httpRequest.params.id
            const pedido = await Pedido.findByPk(pedidoId)
            if (!pedido && pedidoId !== '{id}' && pedidoId !== undefined ){
                return{
                    statusCode: 404,
                    body: { error: 'pedido não encontrado'}
                }
            }else if(pedidoId !== '{id}' && pedidoId !== undefined){
                return{
                    statusCode: 200,
                    body: pedido
                }
            }

            const pedidos = await Pedido.findAll()
            if (pedidos.length === 0){
                return{
                    statusCode: 404,
                    body: { error: 'Nenhum pedido encontrado'}
                }
            }
            return{
                statusCode: 200,
                body: pedidos
            }
        } catch (error: any) {
            return {
                statusCode: 500,
                body: error.message
            }
        }
    }

}

export default ListarPedidosController;