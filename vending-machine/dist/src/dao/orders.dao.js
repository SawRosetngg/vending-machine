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
Object.defineProperty(exports, "__esModule", { value: true });
const sileco_db_1 = require("sileco.db");
const ordersDB = new sileco_db_1.Database('database/orders.json');
class OrdersDAO {
    constructor() { }
    getOrder(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const orders = yield ordersDB.fetch("orders");
            const order = yield orders.filter((o) => o.id == id)[0];
            return order ? order : null;
        });
    }
    getOrders() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield ordersDB.fetch("orders");
        });
    }
}
exports.default = new OrdersDAO();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXJzLmRhby5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kYW8vb3JkZXJzLmRhby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHlDQUFxQztBQUdyQyxNQUFNLFFBQVEsR0FBRyxJQUFJLG9CQUFRLENBQUMsc0JBQXNCLENBQUMsQ0FBQztBQUV0RCxNQUFNLFNBQVM7SUFFWCxnQkFBZ0IsQ0FBQztJQUVYLFFBQVEsQ0FBQyxFQUFVOztZQUNyQixNQUFNLE1BQU0sR0FBRyxNQUFNLFFBQVEsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDOUMsTUFBTSxLQUFLLEdBQUcsTUFBTSxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBVyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2xFLE9BQU8sS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUNoQyxDQUFDO0tBQUE7SUFFSyxTQUFTOztZQUNYLE9BQU8sTUFBTSxRQUFRLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzFDLENBQUM7S0FBQTtDQUVKO0FBRUQsa0JBQWUsSUFBSSxTQUFTLEVBQUUsQ0FBQyJ9