import { Database } from "sileco.db";
import { DrinkDTO } from "../dto/drink.dto";
import { OrderDTO } from "../dto/order.dto";

const drinksDB = new Database('database/drinks.json');
const ordersDB = new Database('database/orders.json');
const coinsDB = new Database('database/coins.json');

class DrinksDAO {

    drinks: Array<DrinkDTO> = []

    constructor() {
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

    async getDrinks(): Promise<DrinkDTO[] | []> {
        return await drinksDB.fetch("drinks");
    }

    async getDrink(id: string): Promise<DrinkDTO | null> {
        const drinks = await drinksDB.fetch("drinks");
        const drink = await drinks.filter((d: DrinkDTO) => d.id == id)[0];
        return drink ? drink : null;
    }

    async purchase(id: string, payload: DrinkDTO[], order: OrderDTO): Promise<OrderDTO> {
        /**Modify drinks stock */
        drinksDB.set('drinks', payload);

        /**Store order */
        let orders = await ordersDB.fetch("orders");
        if (orders.length == 0)
            ordersDB.set('orders', [order]);
        else
            ordersDB.push('orders', order);

        /**Updating coins */
        coinsDB.set("coins", coinsDB.fetch("coins") + order.total);
        return order;
    }

    async refund(drinks: DrinkDTO[], orders: OrderDTO[], order: OrderDTO) {
        drinksDB.set('drinks', drinks);
        ordersDB.set('orders', orders);
        coinsDB.set("coins", coinsDB.fetch("coins") - order.total);
    }

    async getCoins() {
        return coinsDB.fetch("coins")
    }

}

export default new DrinksDAO();