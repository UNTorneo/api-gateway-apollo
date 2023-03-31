export interface Schedule {
    id: Number,
    openHour: String,
    closeHour: String,
    weekDay: Number,
    courtId: Number,
    price: Number,
}

export interface AddSchedule {
    openHour: String,
    closeHour: String,
    weekDay: Number,
    courtId: Number,
    price: Number,
}

export interface UpdateSchedule {
    id?: Number,
    openHour?: String,
    closeHour?: String,
    weekDay?: Number,
    courtId?: Number,
    price?: Number,
}
