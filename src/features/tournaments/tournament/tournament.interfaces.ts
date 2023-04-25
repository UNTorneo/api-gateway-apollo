export interface Tournament {
    id: String,
    name: String,
    teams: String[],
    sportId: String,
    modeId: String, 
    clanId?: String,
    venueId?: String,
    venueName?: String,
    access: String,
    status: String,
    createdAt: Date,
    updatedAt: Date,
}

export interface AddTournament {
    name: String,
    teams: String[],
    sportId: String,
    modeId: String, 
    clanId?: String,
    venueId?: String,
    venueName?: String,
    access: String,
    status: String,
}

export interface UpdateTournament {
    name?: String,
    teams?: String[],
    sportId?: String,
    modeId?: String, 
    clanId?: String,
    venueId?: String,
    venueName?: String,
    access?: String,
    status?: String,
}