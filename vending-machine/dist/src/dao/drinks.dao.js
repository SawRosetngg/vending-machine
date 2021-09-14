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
const drinksDB = new sileco_db_1.Database('database/drinks.json');
const ordersDB = new sileco_db_1.Database('database/orders.json');
const coinsDB = new sileco_db_1.Database('database/coins.json');
class DrinksDAO {
    constructor() {
        this.drinks = [];
        drinksDB.set('drinks', [
            {
                "id": 1,
                "name": "Coke",
                "price": 20,
                "icon": "https://toppng.com/uploads/preview/coke-11538594118bozpkbnfjz.png",
                "stock": 10
            },
            {
                "id": 2,
                "name": "Pepsi",
                "price": 25,
                "icon": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOVgDBw5d_ThnFkT01DfqujcDqsReZoPsdVnQhpq4JR3LrJ4cYwxrzQT0UVfWXRLw_VU0&usqp=CAU",
                "stock": 10
            },
            {
                "id": 3,
                "name": "Dew",
                "price": 30,
                "icon": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxpOyZXrHVa4yFyNtecs2Q89JTXakpfq0N7j6Mkmq6dDXCNp8uCs6Fg6d7wEJBqaGZRXw&usqp=CAU",
                "stock": 10
            },
        ]);
        ordersDB.set("orders", []);
        coinsDB.set("coins", 100);
    }
    getDrinks() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield drinksDB.fetch("drinks");
        });
    }
    getDrink(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const drinks = yield drinksDB.fetch("drinks");
            const drink = yield drinks.filter((d) => d.id == id)[0];
            return drink ? drink : null;
        });
    }
    purchase(id, payload, order) {
        return __awaiter(this, void 0, void 0, function* () {
            /**Modify drinks stock */
            drinksDB.set('drinks', payload);
            /**Store order */
            let orders = yield ordersDB.fetch("orders");
            if (orders.length == 0)
                ordersDB.set('orders', [order]);
            else
                ordersDB.push('orders', order);
            /**Updating coins */
            coinsDB.set("coins", coinsDB.fetch("coins") + order.total);
            return order;
        });
    }
    refund(drinks, orders, order) {
        return __awaiter(this, void 0, void 0, function* () {
            drinksDB.set('drinks', drinks);
            ordersDB.set('orders', orders);
            coinsDB.set("coins", coinsDB.fetch("coins") - order.total);
        });
    }
    getCoins() {
        return __awaiter(this, void 0, void 0, function* () {
            return coinsDB.fetch("coins");
        });
    }
}
exports.default = new DrinksDAO();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJpbmtzLmRhby5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kYW8vZHJpbmtzLmRhby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHlDQUFxQztBQUlyQyxNQUFNLFFBQVEsR0FBRyxJQUFJLG9CQUFRLENBQUMsc0JBQXNCLENBQUMsQ0FBQztBQUN0RCxNQUFNLFFBQVEsR0FBRyxJQUFJLG9CQUFRLENBQUMsc0JBQXNCLENBQUMsQ0FBQztBQUN0RCxNQUFNLE9BQU8sR0FBRyxJQUFJLG9CQUFRLENBQUMscUJBQXFCLENBQUMsQ0FBQztBQUVwRCxNQUFNLFNBQVM7SUFJWDtRQUZBLFdBQU0sR0FBb0IsRUFBRSxDQUFBO1FBR3hCLFFBQVEsQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFO1lBQ25CO2dCQUNJLElBQUksRUFBRSxDQUFDO2dCQUNQLE1BQU0sRUFBRSxNQUFNO2dCQUNkLE9BQU8sRUFBRSxFQUFFO2dCQUNYLE1BQU0sRUFBRSxtRUFBbUU7Z0JBQzNFLE9BQU8sRUFBRSxFQUFFO2FBQ2Q7WUFDRDtnQkFDSSxJQUFJLEVBQUUsQ0FBQztnQkFDUCxNQUFNLEVBQUUsT0FBTztnQkFDZixPQUFPLEVBQUUsRUFBRTtnQkFDWCxNQUFNLEVBQUUsc0lBQXNJO2dCQUM5SSxPQUFPLEVBQUUsRUFBRTthQUNkO1lBQ0Q7Z0JBQ0ksSUFBSSxFQUFFLENBQUM7Z0JBQ1AsTUFBTSxFQUFFLEtBQUs7Z0JBQ2IsT0FBTyxFQUFFLEVBQUU7Z0JBQ1gsTUFBTSxFQUFFLHNJQUFzSTtnQkFDOUksT0FBTyxFQUFFLEVBQUU7YUFDZDtTQUNKLENBQUMsQ0FBQztRQUNILFFBQVEsQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQzNCLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFFSyxTQUFTOztZQUNYLE9BQU8sTUFBTSxRQUFRLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzFDLENBQUM7S0FBQTtJQUVLLFFBQVEsQ0FBQyxFQUFVOztZQUNyQixNQUFNLE1BQU0sR0FBRyxNQUFNLFFBQVEsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDOUMsTUFBTSxLQUFLLEdBQUcsTUFBTSxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBVyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2xFLE9BQU8sS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUNoQyxDQUFDO0tBQUE7SUFFSyxRQUFRLENBQUMsRUFBVSxFQUFFLE9BQW1CLEVBQUUsS0FBZTs7WUFDM0QseUJBQXlCO1lBQ3pCLFFBQVEsQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1lBRWhDLGlCQUFpQjtZQUNqQixJQUFJLE1BQU0sR0FBRyxNQUFNLFFBQVEsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDNUMsSUFBSSxNQUFNLENBQUMsTUFBTSxJQUFJLENBQUM7Z0JBQ2xCLFFBQVEsQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQzs7Z0JBRWhDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBRW5DLG9CQUFvQjtZQUNwQixPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUMzRCxPQUFPLEtBQUssQ0FBQztRQUNqQixDQUFDO0tBQUE7SUFFSyxNQUFNLENBQUMsTUFBa0IsRUFBRSxNQUFrQixFQUFFLEtBQWU7O1lBQ2hFLFFBQVEsQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1lBQy9CLFFBQVEsQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1lBQy9CLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQy9ELENBQUM7S0FBQTtJQUVLLFFBQVE7O1lBQ1YsT0FBTyxPQUFPLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFBO1FBQ2pDLENBQUM7S0FBQTtDQUVKO0FBRUQsa0JBQWUsSUFBSSxTQUFTLEVBQUUsQ0FBQyJ9