import drinksDao from "../dao/drinks.dao";
import { DrinkDTO } from "../dto/drink.dto";
import { OrderDTO } from "../dto/order.dto";
import { DrinksInterface } from "../interface/drinks.interface";

class DrinksService implements DrinksInterface {

    constructor() { }
    async getDrinks() {
        return drinksDao.getDrinks();
    };

    async getDrink(id: string) {
        return await drinksDao.getDrink(id);
    }

    async purchase(id: string, payload: DrinkDTO[], order: OrderDTO) {
        return await drinksDao.purchase(id, payload, order);
    }

    async refund(drinks: DrinkDTO[], orders: OrderDTO[], order: OrderDTO) {
        return await drinksDao.refund(drinks, orders, order);
    }

    async getCoins() {
        return await drinksDao.getCoins();
    }

}

export default new DrinksService();