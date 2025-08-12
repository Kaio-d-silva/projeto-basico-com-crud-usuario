import adaptRoute from "../adapters/express-route-adapter";
import { Router } from "express";
import CriarPratoController from "../controllers/prato/criar-prato";
import { authMiddleware } from "../middlewares";

export default (router: Router): void => {
  /**
   * @swagger
   * components:
   *   securitySchemes:
   *     bearerAuth:
   *       type: http
   *       scheme: bearer
   *       bearerFormat: JWT
   */

  /**
   * @swagger
   * components:
   *   schemas:
   *     Prato:
   *       type: object
   *       required:
   *         - nome
   *         - cozinha
   *         - descricao_resumida
   *         - descricao_detalhada
   *         - valor
   *       properties:
   *         nome:
   *           type: string
   *           description: Nome do prato
   *         cozinha:
   *           type: string
   *           description: A qual cozinha o prato pertence
   *         descricao_resumida:
   *           type: string
   *           description: Resumo dos detalhes
   *         descricao_detalhada:
   *           type: string
   *           description: Todos os detalhes do prato
   *         imagem:
   *           type: string
   *           description: url da imagem
   *         valor:
   *           type: number
   *           description: O Valor do prato
   *       example:
   *         nome : Feijoada
   *         cozinha : Brasileira
   *         descricao_resumida : Prato típico da culinária brasileira
   *         descricao_detalhada : Prato feito com feijão preto e carne de porco
   *         imagem : https://cdn.pixabay.com/photo/2025/04/24/01/29/trees-9554109_1280.jpg
   *         valor : 20.40        
   */

  /**
   * @swagger
   * tags:
   *   name: Pratos
   *   description: Gerenciamento de usuários API
   */

  /**
   * @swagger
   * /api/pratos:
   *   post:
   *     summary: Cria um novo usuário
   *     tags: [Pratos]
   *     security:
   *       - bearerAuth: []
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             $ref: '#/components/schemas/Prato'
   *     responses:
   *       201:
   *         description: O prato foi criado com sucesso!
   *       400:
   *         description: Todos os dados são necessarios
   *       500:
   *         description: Algum erro aconteceu
   */

    router.post("/pratos",
    authMiddleware, 
    adaptRoute(new CriarPratoController()))
};
