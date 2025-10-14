import { created, serverError } from "../../helpers/http-helper";
import { UpdatePedidoDTO } from "../../interfaces";
import { Controller, HttpRequest, HttpResponse } from "../../protocols";
import { PedidoService } from "../../service/pedido-service";

export class AtualizarPedidoController implements Controller {
    async handle(httpRequest: HttpRequest): Promise<HttpResponse> {

        try {

            const pedidoService = new PedidoService();
            const pedidoData: UpdatePedidoDTO = httpRequest.body;
            const id = httpRequest?.params.id;
            const pedidoAtualizado = await pedidoService.updatePedido(id, pedidoData);
            return created(pedidoAtualizado)

        } catch (error: any) {
            return serverError()

        }
    }
}