import { it } from "node:test";
import { Controller, HttpRequest, HttpResponse, Pedidos } from "../../interfaces";
import Pedido from "../../models/pedido-model";

class CriarPedidoController implements Controller {
    async handle(httpResquest: HttpRequest): Promise<HttpResponse>{
        try {
            const { usuarioId, itens }:Pedidos = httpResquest.body;

            if (!usuarioId || !itens ){
                return {
                    statusCode: 400,
                    body: { error : 'Preencha todos os campos'}
                }
            }

            itens.forEach((item) => {
                if (!item.pratoId || !item.quantidade || !item.precoUnitario){
                    return {
                        statusCode: 400,
                        body: { error : 'Preencha todos os campos dos itens'}
                    }
                }
                if (item.quantidade <= 0 || item.precoUnitario <= 0){
                    return {
                        statusCode: 400,
                        body: { error : 'Quantidade e preço unitário devem ser maiores que zero'}
                    }
                }
                if (!Number.isInteger(item.quantidade)){
                    return {
                        statusCode: 400,
                        body: { error : 'Quantidade deve ser um número inteiro'}
                    }
                }
                if (typeof item.precoUnitario !== 'number'){
                    return {
                        statusCode: 400,
                        body: { error : 'Preço unitário deve ser um número'}
                    }
                }   
            });

            let totalPedido = 0;
            for (const item of itens){
                totalPedido =+ item.quantidade * item.precoUnitario; 
            }

            console.log('produtoId do primeiro item:', itens[0].pratoId);
            console.log('quantidade do primeiro item:', itens[0].quantidade);

            const pedido = await Pedido.create({
                usuarioId,
                itens,
                total: totalPedido,
                status: "PENDENTE",
                prato_id: itens[0].pratoId,
                quantidade: itens[0].quantidade
            });

            return {
                statusCode: 201,
                body: pedido
            }


        } catch (error: any) {
            return{
                statusCode: 500,
                body: { error : error.message }
            }
        }
    }
}

export default CriarPedidoController