type Product = {
    name: string
    desc: string
    price: number
}

export const products: Product[] = [
    {
        name: 'Product 1',
        desc: 'A nice thing',
        price: 9.99,
    },
    {
        name: 'Product 2',
        desc: 'Another thing',
        price: 3.45,
    },
    {
        name: 'Product 3',
        desc: 'Something else',
        price: 6.51,
    },
    {
        name: 'Product 4',
        desc: 'Best thing of all',
        price: 14.11,
    },
    { name: 'Shipping', desc: 'Cost', price: 0.0 },
]

export const total = () => products.reduce((tot, { price }) => tot + price, 0)
