import express from "express"
import { addFood, listFood, removeFood } from "../controllers/foodController.js"


const foodRouter = express.Router();

foodRouter.post("/add",addFood)
foodRouter.get("/list",listFood)
foodRouter.delete("/remove", removeFood)


export default foodRouter;