import { DrinkDTO } from "../dto/drink.dto";
import { OrderDTO } from "../dto/order.dto";

export interface DrinksInterface {
    getDrinks: () => Promise<DrinkDTO[] | []>;
    getDrink: (id: string) => Promise<DrinkDTO | null>;
    purchase: (id: string, payload: DrinkDTO[], order: OrderDTO) => Promise<any>;
    refund: (payload: DrinkDTO[], orders: OrderDTO[], order: OrderDTO) => Promise<any>;
    getCoins: () => Promise<any>;
}