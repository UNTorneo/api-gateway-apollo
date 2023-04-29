export interface Match {
    id: String,
    tournamentId: String,
    homeTeam: String,
    visitingTeam: String,
    homeTeamScore: Number,
    visitingTeamScore: Number,
    date: Date,
    status: String,
    createdAt: Date,
    updatedAt: Date,
}

export interface AddMatch {
    tournamentId: String,
    homeTeam: String,
    visitingTeam: String,
    homeTeamScore?: Number,
    visitingTeamScore?: Number,
    date: Date,
    status: String,
}

export interface UpdateMatch {
    tournamentId?: String,
    homeTeam?: String,
    visitingTeam?: String,
    homeTeamScore?: Number,
    visitingTeamScore?: Number,
    date?: Date,
    status?: String,
}