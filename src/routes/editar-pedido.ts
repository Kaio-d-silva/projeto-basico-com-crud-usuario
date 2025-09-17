import { Router } from "express";
import adaptRoute from "../adapters/express-route-adapter";
import EditarPedidoController from "../controllers/pedido/editar-pedido"

export default (router: Router): void => {
    router.put("/pedidos/:id", adaptRoute(new EditarPedidoController()))
}