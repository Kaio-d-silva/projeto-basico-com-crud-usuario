import { Router } from "express";
import adaptRoute from "../adapters/express-route-adapter";
import DetalhesPratoController from "../controllers/prato/detalhes-prato";

export default (router: Router): void => {
  router.get("/pratos/:id",
    adaptRoute(new DetalhesPratoController()));
};
