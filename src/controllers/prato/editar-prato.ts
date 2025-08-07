import { HttpRequest, HttpResponse } from "../../interfaces";
import { bodyParser } from "../../middlewares";
import Prato from "../../models/prato-model";

class EditarPratoController {
  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    const {
      nome,
      cozinha,
      descricao_resumida,
      descricao_detalhada,
      imagem,
      valor,
    } = httpRequest.body;
    const { id } = httpRequest.params
    try {
      const prato = await Prato.findByPk(id)
      console.log(`O id é : ${id}`)
      if (!prato){
        return{
          statusCode: 404,
          body: {error: "Prato não encontrado"}
        }
      }

      await prato.update({
        nome,
        cozinha,
        descricao_resumida,
        descricao_detalhada,
        imagem,
        valor,
      })

      return {
        statusCode: 200,
        body: prato,
      };
    } catch (error:any) {
        return{
            statusCode: 500,
            body: { error: error.message}
        }
    }
  }
}

export default EditarPratoController
