import { HttpRequest, HttpResponse } from "../../interfaces"

class ListarPratosController {
    async handle(): Promise<HttpResponse> {
        try {

            const pratos = [
                {
                    "nome": "Feijoada",
                    "cozinha": "Brasileira",
                    "descricao_resumida": "Prato típico da culinária brasileira",
                    "descricao_detalhada": "Prato feito com feijão preto e carne de porco",
                    "imagem": "https://cdn.pixabay.com/photo/2025/04/24/01/29/trees-9554109_1280.jpg",
                    "valor": "20,40"
                  }
            ]

            return{
                statusCode: 200,
                body: pratos
            }
        } catch (error: any) {
            return {
                statusCode: 500,
                body: error.message
            }
        }
    }

}

export default ListarPratosController;