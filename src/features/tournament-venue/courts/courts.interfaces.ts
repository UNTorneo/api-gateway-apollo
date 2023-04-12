export interface Court {
    id: Number,
    venueId: Number,
    sportId: String,
    isActive: Boolean,
}

export interface AddCourt {
    venueId: Number,
    sportId: String,
    isActive: Boolean,
}

export interface UpdateCourt {
    venueId?: Number,
    sportId?: String,
    isActive?: Boolean,
}