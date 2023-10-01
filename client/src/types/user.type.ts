export type UserType = {
  access_token: string
  lastName: string
  password: string
  email: string
  firstName: string
  userName: string
  id: string
  address?: string
  birthDay?: string
  createdAt?: string
  deletedAt?: string
  gender?: string
  image?: string
  phone: string
  role?: string
  type?: UserType
  updatedAt?: string
}

export type ImageLocation = {
  id: string
  url: string
}
export type LocationType = {
  id: string
  address: string
  country: string
  createdAt?: string
  updatedAt?: string
  description: string
  distance: string
  startDate?: string
  endDate?: string
  name?: string
  price?: number
  servicePrice?: number
  tax: string
  type: number
  userId: string
  images: ImageLocation[]
  user: UserType
  rates?: number
}
