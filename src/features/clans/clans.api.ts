import { RESTDataSource } from '@apollo/datasource-rest';
import { RequestResponse, ErrorResponse, SucessResponse } from '../../core/interfaces/base-interfaces';
import { Clan } from './clan.interfaces';
import { ClanUser } from '../clans/clans_user/clan_user.interface';

export class ClanApi extends RESTDataSource {
    override baseURL: 'http://localhost:8080/';

    async getClans(): Promise<Clan[]> {
        console.log(`get clans`);
        return this.get<Clan[]>(`clans`);
    }

    async getClanById(id: number): Promise<Clan> {
        console.log(`get clan by id`);
        const stringId = id.toString();
        return this.get<Clan>(`clans`, {params: { stringId }});
    }

    async createClan(name: String, leaderId: number, createdAt: Date): Promise<RequestResponse> {
        console.log(`create clan: ${leaderId}, ${name}, ${createdAt}`);
        const res = await this.post<RequestResponse>(`clans`, {body: {leaderId, name, createdAt}});
        return res;
    }

    async updateClan(id: number, leaderId: number, name: String): Promise<RequestResponse> {
        console.log(`update clan with ${id}: ${leaderId}, ${name}`);
        const stringId = id.toString();
        const res = await this.put<RequestResponse>(`clans`, {params: {stringId}, body: {leaderId, name}});
        return res;
    }

    async deleteClan(id: number): Promise<RequestResponse> {
        console.log(`delete clan: ${id}`);
        const stringId = id.toString();
        const res = await this.delete<RequestResponse>(`clans/`, {params: { stringId }});
        return res;
    }

    async getUsersByClanId(clanId: number): Promise<ClanUser> {
        console.log(`get users by clan id: ${clanId}`);
        return this.get<ClanUser>(`/clans/users/${clanId}`);
    }

    async addUserToClan(clanId: number, userId: number): Promise<RequestResponse> {
        console.log(`add user ${userId} to clan ${clanId}`);
        const res = await this.post<RequestResponse>(`/clans/users/${clanId}`, {body: {userId}});
        return res;
    }
}