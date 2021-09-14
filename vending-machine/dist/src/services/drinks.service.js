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
const drinks_dao_1 = __importDefault(require("../dao/drinks.dao"));
class DrinksService {
    constructor() { }
    getDrinks() {
        return __awaiter(this, void 0, void 0, function* () {
            return drinks_dao_1.default.getDrinks();
        });
    }
    ;
    getDrink(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield drinks_dao_1.default.getDrink(id);
        });
    }
    purchase(id, payload, order) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield drinks_dao_1.default.purchase(id, payload, order);
        });
    }
    refund(drinks, orders, order) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield drinks_dao_1.default.refund(drinks, orders, order);
        });
    }
    getCoins() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield drinks_dao_1.default.getCoins();
        });
    }
}
exports.default = new DrinksService();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJpbmtzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvc2VydmljZXMvZHJpbmtzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxtRUFBMEM7QUFLMUMsTUFBTSxhQUFhO0lBRWYsZ0JBQWdCLENBQUM7SUFDWCxTQUFTOztZQUNYLE9BQU8sb0JBQVMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNqQyxDQUFDO0tBQUE7SUFBQSxDQUFDO0lBRUksUUFBUSxDQUFDLEVBQVU7O1lBQ3JCLE9BQU8sTUFBTSxvQkFBUyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUN4QyxDQUFDO0tBQUE7SUFFSyxRQUFRLENBQUMsRUFBVSxFQUFFLE9BQW1CLEVBQUUsS0FBZTs7WUFDM0QsT0FBTyxNQUFNLG9CQUFTLENBQUMsUUFBUSxDQUFDLEVBQUUsRUFBRSxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDeEQsQ0FBQztLQUFBO0lBRUssTUFBTSxDQUFDLE1BQWtCLEVBQUUsTUFBa0IsRUFBRSxLQUFlOztZQUNoRSxPQUFPLE1BQU0sb0JBQVMsQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQztRQUN6RCxDQUFDO0tBQUE7SUFFSyxRQUFROztZQUNWLE9BQU8sTUFBTSxvQkFBUyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ3RDLENBQUM7S0FBQTtDQUVKO0FBRUQsa0JBQWUsSUFBSSxhQUFhLEVBQUUsQ0FBQyJ9