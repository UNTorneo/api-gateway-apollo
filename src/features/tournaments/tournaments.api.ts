import { AugmentedRequest, RESTDataSource } from "@apollo/datasource-rest";
import { RequestResponse } from '../../core/interfaces/base-interfaces';
import { Tournament, AddTournament, UpdateTournament } from './tournament/tournament.interfaces';
import { Team, AddTeam, UpdateTeam, TeamUserPopulated } from './teams/teams.interfaces';
import { Match, AddMatch, UpdateMatch } from './matches/matches.interfaces';
import https from "https";

const agent = new https.Agent({
    rejectUnauthorized: false
})

export class TournamentApi extends RESTDataSource {
    override baseURL = process.env.URL_MS_TOURNAMENTS;

    //* Tournaments
    // Queries
    async getTournaments(): Promise<Tournament[]> {
        console.log('getTournaments');
        const response = await this.get<Tournament[]>('api/Tournament');
        console.log('response :>> ', response);
        return response;
    }

    async getTournament(id: String): Promise<Tournament> {
        console.log('getTournament', id);
        return this.get<Tournament>(`api/Tournament/${id}`);
    }

    async getTournamentsInProgress(): Promise<Tournament[]> {
        console.log('getTournamentsInProgress');
        return this.get<Tournament[]>('api/Tournament/in-progress');
    }

    async getTournamentsByStatus(status: String): Promise<Tournament[]> {
        console.log('getTournamentsByStatus:', status);
        return this.get<Tournament[]>(`api/Tournament/by-status?status=${status}`);
    }

    // Mutations
    async addTournament(addTournament: AddTournament): Promise<RequestResponse> {
        return this.post<RequestResponse>('api/Tournament', { body: addTournament });
    }

    async updateTournament(id: String, updateTournament: UpdateTournament): Promise<RequestResponse> {
        return this.put<RequestResponse>(`api/Tournament/${id}`, { body: updateTournament });
    }

    async deleteTournament(id: String): Promise<RequestResponse> {
        return this.delete<RequestResponse>(`api/Tournament/${id}`);
    }

    //* Teams
    // Queries
    async getTeams(): Promise<Team[]> {
        const response = await this.get<Team[]>('api/Team');
        return response;
    }

    async getTeam(id: String): Promise<TeamUserPopulated> {
        console.log('getTournament', id);
        return this.get<TeamUserPopulated>(`api/Team/${id}`);
    }

    // Mutations
    async addTeam(addTeam: AddTeam): Promise<RequestResponse> {
        const response = await this.post<RequestResponse>('api/Team', { body: addTeam });
        console.log('response :>> ', response);
        return response;
    }

    async updateTeam(id: String, updateTeam: UpdateTeam): Promise<RequestResponse> {
        return this.put<RequestResponse>(`api/Team/${id}`, { body: updateTeam });
    }

    async deleteTeam(id: String): Promise<RequestResponse> {
        return this.delete<RequestResponse>(`api/Team/${id}`);
    }

    async registerTeam(teamId: String, tournamentId: String): Promise<RequestResponse> {
        return this.patch<RequestResponse>(`api/Team/tournament-register/${teamId}/${tournamentId}`);
    }

    //* Matches
    // Queries
    async getMatches(): Promise<Match[]> {
        const response = await this.get<Match[]>('api/Match');
        return response;
    }

    async getMatch(id: String): Promise<Match> {
        const response = await this.get<Match>(`api/Match/${id}`);
        return response;
    }

    async getTournamentMatches(tournamentId: String): Promise<Match[]> {
        const response = await this.get<Match[]>(`api/Match/tournament-matches/${tournamentId}`);
        return response;
    }

    async getTeamMatches(teamId: String): Promise<Match[]> {
        const response = await this.get<Match[]>(`api/Match/team-matches/${teamId}`);
        return response;
    }

    // Mutations
    async addMatch(addMatch: AddMatch): Promise<RequestResponse> {
        return this.post<RequestResponse>('api/Match', { body: addMatch });
    }

    async updateMatch(id: String, updateMatch: UpdateMatch): Promise<RequestResponse> {
        return this.put<RequestResponse>(`api/Match/${id}`, { body: updateMatch });
    }

    async deleteMatch(id: String): Promise<RequestResponse> {
        return this.delete<RequestResponse>(`api/Match/${id}`);
    }
}