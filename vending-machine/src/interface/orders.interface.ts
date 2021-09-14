import { OrderDTO } from "../dto/order.dto";

export interface OrdersInterface {
    getOrder: (id: string) => Promise<OrderDTO | null>;
    getOrders: () => Promise<OrderDTO[] | []>;
}