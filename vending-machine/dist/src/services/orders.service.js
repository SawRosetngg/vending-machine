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
const orders_dao_1 = __importDefault(require("../dao/orders.dao"));
class OrderService {
    constructor() { }
    getOrder(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield orders_dao_1.default.getOrder(id);
        });
    }
    getOrders() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield orders_dao_1.default.getOrders();
        });
    }
}
exports.default = new OrderService();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXJzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvc2VydmljZXMvb3JkZXJzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxtRUFBMEM7QUFHMUMsTUFBTSxZQUFZO0lBQ2QsZ0JBQWdCLENBQUM7SUFFWCxRQUFRLENBQUMsRUFBVTs7WUFDckIsT0FBTyxNQUFNLG9CQUFTLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3hDLENBQUM7S0FBQTtJQUVLLFNBQVM7O1lBQ1gsT0FBTyxNQUFNLG9CQUFTLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDdkMsQ0FBQztLQUFBO0NBR0o7QUFFRCxrQkFBZSxJQUFJLFlBQVksRUFBRSxDQUFDIn0=