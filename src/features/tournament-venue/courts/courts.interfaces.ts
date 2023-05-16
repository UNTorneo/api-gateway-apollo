export interface Court {
    id: Number,
    venueId: Number,
    sportId: String,
    isActive: Boolean,
    name: String,
}

export interface AddCourt {
    venueId: Number,
    sportId: String,
    isActive: Boolean,
    name: String,
}

export interface UpdateCourt {
    venueId?: Number,
    sportId?: String,
    isActive?: Boolean,
    name?: String,
}