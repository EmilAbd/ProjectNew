export interface IProduct {
    id: number,
    name: string,
    description: string,
    ean: string,
    upc: string,
    image: string,
    images: [
        {
            title: string,
            description: string,
            url: string
        },
        {
            title: string,
            description: string,
            url: string
        },
        {
            title: string,
            description: string,
            url: string
        }
    ],
    net_price: number,
    taxes: string,
    price: string,
    categories: [
        string,
        string,
        string,
        string,
        string,
        string,
        string
    ],
    tags: [
        string,
        string,
        string,
        string
    ]
}