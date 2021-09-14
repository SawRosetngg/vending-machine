import ordersDao from "../dao/orders.dao";
import { OrdersInterface } from "../interface/orders.interface";

class OrderService implements OrdersInterface {
    constructor() { }

    async getOrder(id: string) {
        return await ordersDao.getOrder(id);
    }

    async getOrders() {
        return await ordersDao.getOrders();
    }


}

export default new OrderService();