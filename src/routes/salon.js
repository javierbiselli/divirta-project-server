import express from "express";
import salonsController from "../controllers/salon";

const router = express.Router();

router
  .get("/", salonsController.getSalons)
  .post("/", salonsController.createSalon)
  .get("/:id", salonsController.getSalonById)
  .delete("/:id", salonsController.deleteSalon)
  .put("/:id", salonsController.updateSalon)
  .put("/:id/comments/add", salonsController.addCommentToSalon);
// .delete("/:id/comments/delete/:id", salonsController.deleteCommentFromSalon);

export default router;
