class Order{
    constructor(public id: number, public address: string, public number: number, public optionalAddress: string, public paymentOption: string, public orderItems: OrderItem[] = []){

    }
}

class OrderItem{
    constructor(public quantity: number, public menuID: string){

    }
}


export {Order, OrderItem}
