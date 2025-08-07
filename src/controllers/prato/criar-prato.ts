import { HttpRequest, HttpResponse } from "../../interfaces";
import Prato from "../../models/prato-model";

class CriarPratoController {
    async handle(httpResquest: HttpRequest): Promise<HttpResponse>{
        try {
            const { nome, cozinha, descricao_resumida, descricao_detalhada, imagem, valor  } = httpResquest.body;

            if (!nome || !cozinha || !descricao_resumida || !descricao_detalhada || !valor){
                return {
                    statusCode: 400,
                    body: { error : 'Preencha todos os campos'}
                }
            }

            if (valor.type != 'number' && valor.value < 0){
                return{
                    statusCode: 400,
                    body: {error: "O valor deve ser numerico"}
                }
            }
            // const prato = {
            //     nome,
            //     cozinha,
            //     descricao_resumida,
            //     descricao_detalhada,
            //     imagem,
            //     valor
            // }

            // console.log(testePrato)
            const prato = await Prato.create({
                nome, 
                cozinha,
                descricao_resumida,
                descricao_detalhada,
                imagem,
                valor
            });
            return {
                statusCode: 201,
                body: prato
            }


        } catch (error: any) {
            return{
                statusCode: 500,
                body: { error : error.message }
            }
        }
    }
}

export default CriarPratoController