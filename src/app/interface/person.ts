export interface IPerson {
    id: number,
    firstname: string,
    lastname: string,
    email: string,
    phone: string,
    birthday: string,
    gender: string,
    address: {
        id: 0,
        street: string,
        streetName: string,
        buildingNumber: string,
        city: string,
        zipcode: string,
        country: string,
        county_code: string,
        latitude: number,
        longitude: number
        },
    website: string,
    image: string
}