import { Router } from "express";
import authMiddleware from "../middlewares/auth-middleware";
import DeletarPratoController from "../controllers/prato/deletar-prato";
import adaptRoute from "../adapters/express-route-adapter";
export default (router: Router): void => {
  router.delete(
    "/pratos/:id",
    adaptRoute(new DeletarPratoController())
  );
};
