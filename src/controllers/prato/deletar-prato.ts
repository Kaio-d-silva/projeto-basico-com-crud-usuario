import { parentPort } from "worker_threads";
import { HttpRequest,HttpResponse } from "../../interfaces";
import Prato from "../../models/prato-model";

class DeletarPratoController{
    async handle(httpRequest:HttpRequest): Promise<HttpResponse>{
        const { id } = httpRequest.params

        try {
            console.log(`teste de id ${id}`)
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
                body: {}
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