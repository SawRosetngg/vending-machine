import express from 'express';
import shortid from 'shortid';
import { OrderDTO } from '../dto/order.dto';

import HttpException from '../exceptions/http.exceptions';
import NotFoundException from '../exceptions/notfound.exceptions';
import drinksService from '../services/drinks.service'
import ordersService from '../services/orders.service';

class DrinksController {

    async getDrinks(req: express.Request, res: express.Response) {
        const drinks = await drinksService.getDrinks();
        const coins = await drinksService.getCoins();
        res.status(200).json({ drinks, coins })
    }

    async getDrink(req: express.Request, res: express.Response) {
        const drink = await drinksService.getDrink(req.params.id);
        res.status(200).json(drink)
    }

    async purchase(req: express.Request, res: express.Response, next: express.NextFunction) {
        const { id } = req.params;
        const { quantity } = req.body;
        try {
            const drink = await drinksService.getDrink(id);
            if (!drink) {
                return next(new NotFoundException("Drinks doesn't exists."));
            }
            if (drink.stock < Number(quantity)) {
                return next(new HttpException(403, "Drinks outof stock."));
            }
            /**Placed order. */
            const order: OrderDTO = {
                id: shortid.generate(),
                drink: drink.id,
                quantity: Number(quantity),
                price: drink.price,
                total: Number(quantity) * drink.price
            }
            let drinks = await drinksService.getDrinks();
            drinks = drinks.map(d => {
                let newDrink = d;
                if (newDrink.id == id) {
                    return {
                        ...newDrink,
                        stock: newDrink.stock - Number(quantity)
                    }
                }
                return newDrink;
            });

            let result = await drinksService.purchase(req.params.id, drinks, order);
            res.status(200).json({ message: "Successfully bought drinks", order: result })
        } catch (error) {
            console.log(error)
            return next(new HttpException(500, "Server exception."));
        }

    }

    async refund(req: express.Request, res: express.Response, next: express.NextFunction) {
        const { id } = req.params;
        const { orderId } = req.body;
        try {
            const order = await ordersService.getOrder(orderId);
            if (!order) {
                return next(new NotFoundException("Order doesn't exists."));
            }
            let drinks = await drinksService.getDrinks();
            drinks = drinks.map(d => {
                let newDrink = d;
                if (newDrink.id == id) {
                    return {
                        ...newDrink,
                        stock: newDrink.stock + Number(order.quantity)
                    }
                }
                return newDrink;
            });
            let orders = await ordersService.getOrders()
            orders = orders.filter(o => o.id != orderId);

            await drinksService.refund(drinks, orders, order);
            res.status(200).json({ message: "Successfully refund order", order: order })
        } catch (error) {
            console.log(error)
            return next(new HttpException(500, "Server exception."));
        }
    }
}

export default new DrinksController()


