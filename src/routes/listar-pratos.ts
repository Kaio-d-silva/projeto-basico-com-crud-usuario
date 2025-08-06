import { Router } from "express";
import adaptRoute from "../adapters/express-route-adapter";
import ListarPratosController from "../controllers/prato/listar-pratos";

export default (router:Router): void => {
    /**
   * @swagger
   * /api/pratos/{id}:
   *   get:
   *     summary: Retorna a lista de pratos
   *     tags: [Pratos]
   *     security:
   *       - bearerAuth: []
   *     parameters:
   *       - in: path
   *         name: id
   *         schema:
   *           type: integer
   *         required: false
   *         description: The user id
   *     responses:
   *       200:
   *         description: A lista de usuários foi retornada com sucesso
   *         content:
   *           application/json:
   *             schema:
   *               type: array
   *               items:
   *                 $ref: '#/components/schemas/Prato'
   */
    router.get('/pratos{/:id}', adaptRoute(new ListarPratosController()))
}