import adaptRoute from "../adapters/express-route-adapter";
import { Router } from "express";
import CriarPedidoController from "../controllers/pedido/criar-pedido";

export default (router: Router): void => {
    router.post("/pedidos", adaptRoute(new CriarPedidoController()))
};
