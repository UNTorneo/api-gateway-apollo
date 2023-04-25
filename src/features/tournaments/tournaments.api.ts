import { AugmentedRequest, RESTDataSource } from "@apollo/datasource-rest";
import { RequestResponse } from '../../core/interfaces/base-interfaces';
import {Tournament, AddTournament, UpdateTournament} from './tournament/tournament.interfaces';
import https from "https";

const agent = new https.Agent({
    rejectUnauthorized: false
})

export class TournamentApi extends RESTDataSource {
    override baseURL = process.env.URL_MS_TOURNAMENTS;

    // constructor() {
    //     super((input, init) => {
    //         return fetch(input, {
    //             ...init,
    //             agent: agent
    //         })
    //     });
    //     this.baseURL = 'https://localhost:32774/';
    // }
    
    // willSendRequest(request: any) {
    //     request.agent = agent;
    // }

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
        return this.post<RequestResponse>('api/Tournament', {body: addTournament});
    }

    async deleteTournament(id: String): Promise<RequestResponse> {
        return this.delete<RequestResponse>(`api/Tournament/${id}`);
    }

    async updateTournament(id: String, updateTournament: UpdateTournament): Promise<RequestResponse> {
        return this.put<RequestResponse>(`api/Tournament/${id}`, {body: updateTournament});
    }

    //* Teams
    // Queries

    // Mutations

    //* Matches
    // Queries

    // Mutations

}