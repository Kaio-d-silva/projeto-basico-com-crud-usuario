import adaptRoute from "../adapters/express-route-adapter";
import { Router } from "express";
import CriarPratoController from "../controllers/prato/criar-prato";

export default (router: Router): void => {
    router.post("/pratos", adaptRoute(new CriarPratoController()))
};
