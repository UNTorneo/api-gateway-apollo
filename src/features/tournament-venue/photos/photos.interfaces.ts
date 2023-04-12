export interface Photo {
    id: Number,
    courtId: Number,
    url: String
}

export interface AddPhoto {
    courtId: Number,
    url: String,
}

export interface UpdatePhoto {
    id?: Number,
    courtId?: Number,
    url?: String,
}
