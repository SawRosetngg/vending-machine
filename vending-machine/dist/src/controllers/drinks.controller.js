"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const shortid_1 = __importDefault(require("shortid"));
const http_exceptions_1 = __importDefault(require("../exceptions/http.exceptions"));
const notfound_exceptions_1 = __importDefault(require("../exceptions/notfound.exceptions"));
const drinks_service_1 = __importDefault(require("../services/drinks.service"));
const orders_service_1 = __importDefault(require("../services/orders.service"));
class DrinksController {
    getDrinks(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const drinks = yield drinks_service_1.default.getDrinks();
            const coins = yield drinks_service_1.default.getCoins();
            res.status(200).json({ drinks, coins });
        });
    }
    getDrink(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const drink = yield drinks_service_1.default.getDrink(req.params.id);
            res.status(200).json(drink);
        });
    }
    purchase(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const { quantity } = req.body;
            try {
                const drink = yield drinks_service_1.default.getDrink(id);
                if (!drink) {
                    return next(new notfound_exceptions_1.default("Drinks doesn't exists."));
                }
                if (drink.stock < Number(quantity)) {
                    return next(new http_exceptions_1.default(403, "Drinks outof stock."));
                }
                /**Placed order. */
                const order = {
                    id: shortid_1.default.generate(),
                    drink: drink.id,
                    quantity: Number(quantity),
                    price: drink.price,
                    total: Number(quantity) * drink.price
                };
                let drinks = yield drinks_service_1.default.getDrinks();
                drinks = drinks.map(d => {
                    let newDrink = d;
                    if (newDrink.id == id) {
                        return Object.assign(Object.assign({}, newDrink), { stock: newDrink.stock - Number(quantity) });
                    }
                    return newDrink;
                });
                let result = yield drinks_service_1.default.purchase(req.params.id, drinks, order);
                res.status(200).json({ message: "Successfully bought drinks", order: result });
            }
            catch (error) {
                console.log(error);
                return next(new http_exceptions_1.default(500, "Server exception."));
            }
        });
    }
    refund(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const { orderId } = req.body;
            try {
                const order = yield orders_service_1.default.getOrder(orderId);
                if (!order) {
                    return next(new notfound_exceptions_1.default("Order doesn't exists."));
                }
                let drinks = yield drinks_service_1.default.getDrinks();
                drinks = drinks.map(d => {
                    let newDrink = d;
                    if (newDrink.id == id) {
                        return Object.assign(Object.assign({}, newDrink), { stock: newDrink.stock + Number(order.quantity) });
                    }
                    return newDrink;
                });
                let orders = yield orders_service_1.default.getOrders();
                orders = orders.filter(o => o.id != orderId);
                yield drinks_service_1.default.refund(drinks, orders, order);
                res.status(200).json({ message: "Successfully refund order", order: order });
            }
            catch (error) {
                console.log(error);
                return next(new http_exceptions_1.default(500, "Server exception."));
            }
        });
    }
}
exports.default = new DrinksController();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJpbmtzLmNvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29udHJvbGxlcnMvZHJpbmtzLmNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFDQSxzREFBOEI7QUFHOUIsb0ZBQTBEO0FBQzFELDRGQUFrRTtBQUNsRSxnRkFBc0Q7QUFDdEQsZ0ZBQXVEO0FBRXZELE1BQU0sZ0JBQWdCO0lBRVosU0FBUyxDQUFDLEdBQW9CLEVBQUUsR0FBcUI7O1lBQ3ZELE1BQU0sTUFBTSxHQUFHLE1BQU0sd0JBQWEsQ0FBQyxTQUFTLEVBQUUsQ0FBQztZQUMvQyxNQUFNLEtBQUssR0FBRyxNQUFNLHdCQUFhLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDN0MsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQTtRQUMzQyxDQUFDO0tBQUE7SUFFSyxRQUFRLENBQUMsR0FBb0IsRUFBRSxHQUFxQjs7WUFDdEQsTUFBTSxLQUFLLEdBQUcsTUFBTSx3QkFBYSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQzFELEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFBO1FBQy9CLENBQUM7S0FBQTtJQUVLLFFBQVEsQ0FBQyxHQUFvQixFQUFFLEdBQXFCLEVBQUUsSUFBMEI7O1lBQ2xGLE1BQU0sRUFBRSxFQUFFLEVBQUUsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDO1lBQzFCLE1BQU0sRUFBRSxRQUFRLEVBQUUsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDO1lBQzlCLElBQUk7Z0JBQ0EsTUFBTSxLQUFLLEdBQUcsTUFBTSx3QkFBYSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFDL0Ms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