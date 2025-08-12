import { Controller, HttpRequest,HttpResponse } from "../../interfaces";
import Prato from "../../models/prato-model";

class DeletarPratoController implements Controller {
    async handle(httpRequest:HttpRequest): Promise<HttpResponse>{
        const { id } = httpRequest.params

        try {
            const prato = await Prato.findByPk(id)


            if(!prato){
                return{
                    statusCode: 404,
                    body: {error: "Prato não encontrado"}
                }
            }
            await prato.destroy();
            return{
                statusCode: 204,
                body: {message: "Prato deletado com sucesso"}
            }

            
        } catch (error:any) {
            return{
                statusCode:500,
                body: {error: error.message}
            }
        }
    }
}
export default DeletarPratoController