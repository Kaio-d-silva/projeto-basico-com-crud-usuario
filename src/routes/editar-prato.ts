import { Router } from "express";
import adaptRoute from "../adapters/express-route-adapter";
import EditarPratoController from "../controllers/prato/editar-prato"

export default (router: Router): void => {
   /**
   * @swagger
   * /api/pratos/{id}:
   *   put:
   *     summary: Atualiza o usuário por id
   *     tags: [Pratos]
   *     security:
   *       - bearerAuth: []
   *     parameters:
   *       - in: path
   *         name: id
   *         schema:
   *           type: integer
   *         required: true
   *         description: The user id
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             $ref: '#/components/schemas/Prato'
   *     responses:
   *       200:
   *         description: O prato foi atualizado com sucesso
   *       404:
   *         description: O prato não foi encontrado
   *       500:
   *         description: Algum erro aconteceu
   */

    router.put("/pratos/:id", adaptRoute(new EditarPratoController()))
}