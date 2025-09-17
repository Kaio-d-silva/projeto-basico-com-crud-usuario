import { Router } from "express";
import adaptRoute from "../adapters/express-route-adapter";
import ListarPedidosController from "../controllers/pedido/listar-pedido";

export default (router:Router): void => {
    router.get('/pedidos', adaptRoute(new ListarPedidosController()))
}