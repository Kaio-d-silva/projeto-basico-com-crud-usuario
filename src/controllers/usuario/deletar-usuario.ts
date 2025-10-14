import { noContet, notFount, serverError } from '../../helpers/http-helper';
import  User from '../../models/user-model';
import { Controller, HttpRequest, HttpResponse } from '../../protocols';
import { UsuarioService } from '../../service/usuario-service';
class DeletarUsuarioController implements Controller {
  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    const { id } = httpRequest.params;
    try {
      const usuarioService = new UsuarioService();
      const result = await usuarioService.deletarUsuario(Number(id));
      if (!result) {
        return notFount({ error: 'Não foi possível deletar o usuario' })
      }

      return noContet()
    } catch (error: any) {
      return serverError()
    }
  }
}

export default DeletarUsuarioController;
