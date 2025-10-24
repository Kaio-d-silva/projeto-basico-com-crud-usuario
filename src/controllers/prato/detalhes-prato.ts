import { serverError, ok, notFount } from "../../helpers/http-helper";
import Prato from "../../models/prato-model";
import { Controller, HttpRequest, HttpResponse } from "../../protocols";

export default class DetalhesPratoController implements Controller {
    async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
        try {
            const { id } = httpRequest.params
            const prato = await Prato.findByPk(id);
            if (!prato) {
                return notFount("Prato não encontrado")
            }
            return ok(prato)
            
        } catch (error: any) {
            return serverError()
        }
    }
}