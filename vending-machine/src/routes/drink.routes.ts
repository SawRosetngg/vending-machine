import express from "express";
import DrinksController from "../controllers/drinks.controller";
import { CommonRoutesConfig } from "./common.routes.config";

export class DrinkRoutes extends CommonRoutesConfig {

    constructor(app: express.Application) {
        super(app, "DrinkRoutes")
    }

    configureRoutes(): express.Application {

        this.app.route("/drinks")
            .get(DrinksController.getDrinks)

        this.app.route("/drinks/:id")
            .get(DrinksController.getDrink)
            .post(DrinksController.purchase)
            .put(DrinksController.refund)

        return this.app;
    }

}