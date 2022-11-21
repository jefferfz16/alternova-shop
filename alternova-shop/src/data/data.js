 export const Data = {
    "products": [
        {
            "name": "redbull",
            "unit_price": 5000,
            "stock": 5
        },
        {
            "name": "rice",
            "unit_price": 2000,
            "stock": 0
        },
        {
            "name": "papitas de limón margarita",
            "unit_price": 1500,
            "stock": 1
        },
        {
            "name": "meat / pound",
            "unit_price": 500,
            "stock": 8
        }
    ]
}

export const CartData = {
    products: [
    ]
}

export const OrderData = {
    items: [
    {
        product: {
            name: "meat / pound",
            unit_price: 500,
        },
        quantity: 10,
        totalProduct: 10 * 500
    }
],
    totalProduct: 10,
    totalOrder: 5000,
}