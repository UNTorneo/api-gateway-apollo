export interface Team {
    id: String,
    name: String,
    clanId?: String,
    members: String[],
    tournaments: String[],
    createdAt: Date,
    updatedAt: Date,
}

export interface TeamUser {
    username: String,
    birthday: String,
    email: String,
    id: Number,
}

export interface TeamUserPopulated {
    id: String,
    name: String,
    clanId?: String,
    members: TeamUser[],
    tournaments: String[],
    createdAt: Date,
    updatedAt: Date,
}

export interface AddTeam {
    name: String,
    clanId?: String,
    members: String[],
    tournaments: String[],
}

export interface UpdateTeam {
    name?: String,
    clanId?: String,
    members?: String[],
    tournaments?: String[],
}