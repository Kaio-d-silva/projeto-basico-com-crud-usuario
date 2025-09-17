import { Controller, HttpRequest,HttpResponse } from "../../interfaces";
import Pedido from "../../models/pedido-model";

class DeletarPedidoController implements Controller {
    async handle(httpRequest:HttpRequest): Promise<HttpResponse>{
        const { id } = httpRequest.params

        try {
            const pedido = await Pedido.findByPk(id)
            console.log('Pedido encontrado:', pedido);

            if(!pedido){
                return{
                    statusCode: 404,
                    body: {error: "Pedido não encontrado"}
                }
            }
            await pedido.destroy();
            return{
                statusCode: 204,
                body: {message: "Pedido deletado com sucesso"}
            }

            
        } catch (error:any) {
            return{
                statusCode:500,
                body: {error: error.message}
            }
        }
    }
}
export default DeletarPedidoController