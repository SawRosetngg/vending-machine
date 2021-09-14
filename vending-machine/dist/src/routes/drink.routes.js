"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DrinkRoutes = void 0;
const drinks_controller_1 = __importDefault(require("../controllers/drinks.controller"));
const common_routes_config_1 = require("./common.routes.config");
class DrinkRoutes extends common_routes_config_1.CommonRoutesConfig {
    constructor(app) {
        super(app, "DrinkRoutes");
    }
    configureRoutes() {
        this.app.route("/drinks")
            .get(drinks_controller_1.default.getDrinks);
        this.app.route("/drinks/:id")
            .get(drinks_controller_1.default.getDrink)
            .post(drinks_controller_1.default.purchase)
            .put(drinks_controller_1.default.refund);
        return this.app;
    }
}
exports.DrinkRoutes = DrinkRoutes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJpbmsucm91dGVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3JvdXRlcy9kcmluay5yb3V0ZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0EseUZBQWdFO0FBQ2hFLGlFQUE0RDtBQUU1RCxNQUFhLFdBQVksU0FBUSx5Q0FBa0I7SUFFL0MsWUFBWSxHQUF3QjtRQUNoQyxLQUFLLENBQUMsR0FBRyxFQUFFLGFBQWEsQ0FBQyxDQUFBO0lBQzdCLENBQUM7SUFFRCxlQUFlO1FBRVgsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDO2FBQ3BCLEdBQUcsQ0FBQywyQkFBZ0IsQ0FBQyxTQUFTLENBQUMsQ0FBQTtRQUVwQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUM7YUFDeEIsR0FBRyxDQUFDLDJCQUFnQixDQUFDLFFBQVEsQ0FBQzthQUM5QixJQUFJLENBQUMsMkJBQWdCLENBQUMsUUFBUSxDQUFDO2FBQy9CLEdBQUcsQ0FBQywyQkFBZ0IsQ0FBQyxNQUFNLENBQUMsQ0FBQTtRQUVqQyxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUM7SUFDcEIsQ0FBQztDQUVKO0FBbkJELGtDQW1CQyJ9