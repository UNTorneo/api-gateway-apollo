import { RESTDataSource } from '@apollo/datasource-rest';
import * as Express from "express";
import { RequestResponse, ErrorResponse, SucessResponse } from '../../core/interfaces/base-interfaces';
import { Clan } from './clan.interfaces';
import { ClanUser } from '../clans/clans_user/clan_user.interface';
import { User } from '../users/user/users.interfaces';

export class ClanApi extends RESTDataSource {
    override baseURL = process.env.URL_MS_CLANS;

    async getClans(): Promise<Clan[]> {
        try {
            console.log(`get clans`);
            const res = await  this.get<Clan[]>(`clans`);
            console.log(res);
            return res
        } catch (error) {
            console.log(error);
            throw error
        }
    }

    async getClanById(id: number): Promise<Clan> {
        console.log(`get clan by id ${id}`);
        return this.get<Clan>(`clans/${id}`);
    }

    async createClan(name: String, leaderId: number, createdAt: String): Promise<RequestResponse> {
        console.log(`create clan: ${leaderId}, ${name}, ${createdAt}`);
        const res = await this.post<RequestResponse>(`clans`, {body: {leaderId, name, createdAt}});
        console.log(res);
        return res;
    }

    async updateClan(id: number, leaderId: number, name: String): Promise<RequestResponse> {
        console.log(`update clan with ${id}: ${leaderId}, ${name}`);
        const res = await this.put<RequestResponse>(`clans/${id}`, {body: {leaderId, name}});
        return res;
    }

    async deleteClan(id: number): Promise<RequestResponse> {
        console.log(`delete clan: ${id}`);
        const res = await this.delete<RequestResponse>(`clans/${id}`);
        return res;
    }

    async getUsersByClanId(clanId: number): Promise<User[]> {
        console.log(`get users by clan id: ${clanId}`);
        return this.get<User[]>(`clans/users/${clanId}`);
    }

    async addUserToClan(clanId: number, userId: number): Promise<RequestResponse> {
        console.log(`add user ${userId} to clan ${clanId}`);
        const res = await this.post<RequestResponse>(`clans/users/${clanId}`, {body: {userId}});
        return res;
    }
}