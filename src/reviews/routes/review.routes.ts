import express from "express";
import { review } from "../factories/review.factory";

const reviewsRoutes = express.Router();

//o bind é encarregado de manter o escopo do this
reviewsRoutes.get("/", review.getAll.bind(review));
reviewsRoutes.get("/:id", review.getById.bind(review));
reviewsRoutes.post("/", review.create.bind(review));
reviewsRoutes.put("/:id", review.update.bind(review));


export default reviewsRoutes;
