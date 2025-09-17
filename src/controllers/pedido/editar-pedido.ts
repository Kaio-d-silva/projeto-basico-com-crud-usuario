import { Controller, HttpRequest, HttpResponse } from "../../interfaces";
import Pedido from "../../models/pedido-model";

class EditarPedidoController implements Controller {
  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    const { status } = httpRequest.body;

    const { id } = httpRequest.params
    
    try {
      const prato = await Pedido.findByPk(id)
      if (!prato) {
        return {
          statusCode: 404,
          body: { error: "Prato não encontrado" }
        }
      }

      await prato.update({
        status
      })

      return {
        statusCode: 200,
        body: prato,
      };
    } catch (error: any) {
      return {
        statusCode: 500,
        body: { error: error.message }
      }
    }
  }
}

export default EditarPedidoController
