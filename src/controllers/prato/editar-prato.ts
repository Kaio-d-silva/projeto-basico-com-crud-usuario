import { HttpRequest, HttpResponse } from "../../interfaces";
import { bodyParser } from "../../middlewares";

class EditarPratoController {
  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const {
        nome,
        cozinha,
        descricao_resumida,
        descricao_detalhada,
        imagem,
        valor,
      } = httpRequest.body;

      const prato = {
        nome: nome,
        cozinha: cozinha,
        descricao_resumida: descricao_resumida,
        descricao_detalhada: descricao_detalhada,
        imagem:
          imagem,
        valor: valor,
      };

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
