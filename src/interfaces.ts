export interface WatchQty {
    watchId: number,
    qty: number
}

export interface Admin { 
    id: number,
    uid: number,
    imageUrl: string,
    imageUpload: string,
    firstName: string,
    lastName: string,
    role: string,
    email: string,
    password: string
}

export interface Customer {
    id: number,
    uid: number,
    imageUrl: string,
    imageUpload: string,
    role: string,
    email: string,
    password: string,
    firstName: string,
    lastName: string,
    cart: Cart,
    cartId: number
}

export interface Cart {
    id: number,
    customer: Customer,
    customerId: number,
    watches: CartWatch[]
}

export interface CartWatch {
    id: number,
    cart: Cart,
    watch: Watch,
    isInCart: boolean,
    watchId: number,
    cartId: number
}

export interface Watch {
    id: number,
    name: string,
    brand: string,
    imageUrl: string,
    imageUpload: string,
    price: number,
    desc: string,
    caseColour: string,
    bandColour: string,
    bandType: string,
    movementType: string,
    faceSize: string,
    stock: number,
    cart: CartWatch[]
}