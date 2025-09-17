import { Router } from "express";
import adaptRoute from "../adapters/express-route-adapter";
import ListarPratosController from "../controllers/prato/listar-pratos";

export default (router:Router): void => {
    router.get('/pratos{/:id}', adaptRoute(new ListarPratosController()))
}