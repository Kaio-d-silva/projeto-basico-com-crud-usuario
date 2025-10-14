import { notFount, ok, serverError } from "../../helpers/http-helper";
import Prato from "../../models/prato-model";
import { Controller, HttpRequest, HttpResponse } from "../../protocols";

export default class DeletarPratoController implements Controller {
    async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
        try {
            const { id } = httpRequest.params;

            const prato = await Prato.findByPk(id);

            if (!prato) {
                return notFount({ error: 'Prato não encontrado' })
            }

            await prato.destroy();

            return ok(prato)

        } catch (error: any) {
            return serverError()
        }
    }
}