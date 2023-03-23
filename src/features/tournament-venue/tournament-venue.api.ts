import { RESTDataSource } from '@apollo/datasource-rest';
import { RequestResponse, ErrorResponse, SucessResponse } from '../../core/interfaces/base-interfaces';
import { Owner } from './owner/owner.interfaces';

export class TournamentVenueApi extends RESTDataSource {
    override baseURL = 'http://localhost:8080/';

    async getOwners(): Promise<Owner[]> {
        console.log(`getOwners`);
        return this.get<Owner[]>(`owner`);
    }

    async getOwner(id: number): Promise<Owner> {
        console.log(`getOwner: ${id}`);
        return this.get<Owner>(`owner?id=${id}`);
    }

    async getOwnerByVenueId(venueId: number): Promise<Owner> {
        console.log(`getOwnerByVenueId: ${venueId}`);
        return this.get<Owner>(`owner?venueId=${venueId}`);
    }

    async addOwner(venueId: number, userId: string): Promise<RequestResponse> {
        console.log(`addOwner: ${venueId}, ${userId}`);
        const res = await this.post<RequestResponse>(`owner`, { body: { venueId, userId } });
        console.log(`addOwner: ${JSON.stringify(res)}`);
        return res;
    }

    async deleteOwner(id: number): Promise<RequestResponse> {
        return this.delete<RequestResponse>(`owner?id=${id}`);
    }
}