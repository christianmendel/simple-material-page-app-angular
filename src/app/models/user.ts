import { Contact } from "./contact";

export interface User {
    _id: string
    name: string,
    contact: Contact
    isAdmin: boolean
    permissions: string[]
    annotation: string
    language: number
    coin: number
    receiveNotificationsInEmail: boolean
    receiveNotificationsInApp: boolean
    password: string
}