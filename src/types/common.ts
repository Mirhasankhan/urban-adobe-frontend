import { userRoles } from "@/utils/roles"

export type IMeta = {
    page: number
    limit: number
    total: number
}

export type Inputs = {
    title: string,
    address: string,
    description: string
    price: string
    size: string
    bathroom: string
    bedroom: string
    kitchen: string
    video?: string
    year?: string
    type: string
    image: string
};

export type TRoles = keyof typeof userRoles

export interface SidbarItem {
    title: string
    path: string
    parentPath?: string
    child?: SidbarItem[]
}

export type TListing = {
    _id: string
    price: string
    type: string
    bedroom: string
    bathroom: string
    address: string
    title: string
    size: string
    description: string
    year: string
    kitchen: string
    status: string
    for: string
    name: string
    email: string
    refId: string
    sellerName: string
    sellerEmail: string
    image: {
        imageUrl: string
    }
}