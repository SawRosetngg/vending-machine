import { Database } from "sileco.db";
import { OrderDTO } from "../dto/order.dto";

const ordersDB = new Database('database/orders.json');

class OrdersDAO {

    constructor() { }

    async getOrder(id: string): Promise<OrderDTO | null> {
        const orders = await ordersDB.fetch("orders");
        const order = await orders.filter((o: OrderDTO) => o.id == id)[0];
        return order ? order : null;
    }

    async getOrders(): Promise<OrderDTO[] | []> {
        return await ordersDB.fetch("orders");
    }

}

export default new OrdersDAO();