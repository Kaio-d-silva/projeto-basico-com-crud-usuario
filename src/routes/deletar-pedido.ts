import { Router } from "express";
import authMiddleware from "../middlewares/auth-middleware";
import {DeletarPedidoController} from "../controllers/pedido/deletar-pedido";
import adaptRoute from "../adapters/express-route-adapter";
export default (router: Router): void => {
  router.delete(
    "/pedidos/:id",
    adaptRoute(new DeletarPedidoController())
  );
};
