export interface Venue {
    id: Number
    location: String
    description: String
    isActive: Boolean
}

export interface AddVenue {
    location: String
    description: String
    isActive: Boolean
}

export interface UpdateVenue {
    location?: String
    description?: String
    isActive?: Boolean
}