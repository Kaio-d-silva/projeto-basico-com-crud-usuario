import { notFount, ok, serverError } from "../../helpers/http-helper";
import User from "../../models/user-model";
import { Controller, HttpRequest, HttpResponse } from "../../protocols";
import { UsuarioService } from "../../service/usuario-service";

class ListarUsuarioController implements Controller {
  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const userId = httpRequest.params.id;
      const usuarioService = new UsuarioService();
      const usuario = await usuarioService.buscarUsuarioPorId(userId);
      if (!usuario && userId !== "{id}" && userId !== undefined) {
        return notFount({ error: "Usuário não encontrado" });
      } else if (userId !== "{id}" && userId !== undefined) {
        return ok(usuario);
      }
      const usuarios = await usuarioService.buscaTodosUsuarios();
      if (usuarios.length === 0) {
        return notFount({ error: "Nenhum usuário encontrado" });
      }
      return ok(usuarios);
    } catch (error: any) {
      return serverError();
    }
  }
}

export default ListarUsuarioController;
