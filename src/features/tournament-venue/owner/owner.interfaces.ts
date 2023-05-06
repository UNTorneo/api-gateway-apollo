export interface Owner {
    id: number,
    venueId: number,
    userId: String,
}

interface UserOwner {
    username: String,
    birthday: String,
    email: String,
    id: Number,
    isActive: Boolean,
}

export interface OwnerPopulated {
    id: number,
    venueId: number,
    user: UserOwner,
}