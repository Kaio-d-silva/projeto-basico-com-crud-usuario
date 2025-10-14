import { notFount, unauthorized, ok, serverError } from '../../helpers/http-helper';
import { Controller, HttpRequest, HttpResponse } from '../../protocols';
import { LoginService } from '../../service/login-service';

export class LoginController implements Controller {
  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { email, senha } = httpRequest.body;

      const loginService = new LoginService();

      const response = await loginService.login({ email, senha });

      if (!response) {
        return unauthorized({ message: 'Credenciais inválidas' })
      }

      const perfil = await loginService.buscarPerfilPorUserId(response);
      if (!perfil) {
        return notFount({ message: 'Usuário não encontrado, verificar cadastro.' })
      }
      const user = perfil.user;

      const { token, refreshToken } = loginService.gerarTokens(user);

      // Retornar sucesso (você pode adicionar lógica para gerar tokens aqui)
      return ok({
        message: 'Login realizado com sucesso',
        token,
        refreshToken,
      })
    } catch (error) {
      return serverError()
    }
  }
}

export default LoginController;
