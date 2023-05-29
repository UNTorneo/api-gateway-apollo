import { RESTDataSource } from '@apollo/datasource-rest';
import { RequestResponse, ErrorResponse, SucessResponse } from '../../core/interfaces/base-interfaces';
import { Sport } from './sport/sport.interfaces';
import { Mode } from './mode/mode.interfaces'
import { RequestOptions } from 'https';
import { redisClient } from '../../core/redis/redis';
export class sportsApi extends RESTDataSource {
    override baseURL = 'https://sports-ms-4yiv26znhq-uc.a.run.app/'//process.env.URL_MS_SPORTS + "/";
    protected override throwIfResponseIsError(options): Promise<void> {
        console.log('sportsApi throwIfResponseIsError: ', options);
        return;
    }

    async getSport(id: String): Promise<Sport> {
        try {
            console.log(this.baseURL + `getSport`);
            const res = await this.get<Sport>(`sport/${id}`);
            console.log(res);
            return res;
        } catch (error) {
            console.log(error);
        }
    }

    async getSports(): Promise<Sport[]> {
        try {
            console.log(this.baseURL + `getSports`);
            const res = await this.get<Sport[]>(`sport/all`);
            console.log(res);
            return res;
        } catch (error) {
            console.log(error);
        }

    }

    async addSport(name: String, description: String, imgs: String[], logo: String, recommendation: String[]): Promise<RequestResponse> {
        try {
            console.log(`addSport`);
            return await this.post<RequestResponse>(`sport`, { body: { name, description, imgs, logo, recommendation } });
        } catch (error) {
            console.log(error);
        }
    }

    async updateSport(id: String, name: String, description: String, imgs: String[], logo: String, recommendation: String[]): Promise<RequestResponse> {
        try {
            console.log(`addSport`);
            return await this.put<RequestResponse>(`sport/${id}`, { body: { name, description, imgs, logo, recommendation } });
        } catch (error) {
            console.log(error);
        }
    }

    async deleteSport(id: String): Promise<RequestResponse> {
        try {
            console.log(`deleteSport`);
            return await this.delete<RequestResponse>(`sport/${id}`);
        } catch (error) {
            console.log(error);
        }
    }

    async addMode(sportId: String, name: String, winningPoints: number, teamsNumber: number, playersPerTeam: number, description: String, substitutePlayers: number): Promise<RequestResponse> {
        try {
            console.log(`addMode`);
            return await this.post<RequestResponse>(`mode`, { body: { sportId, name, winningPoints, teamsNumber, playersPerTeam, description, substitutePlayers } });
        } catch (error) {
            console.log(error);
        }
    }

    async updateMode(id: String, name: String, winningPoints: number, teamsNumber: number, playersPerTeam: number, description: String, substitutePlayers: number): Promise<RequestResponse> {
        try {
            console.log(`updateMode`);
            return await this.put<RequestResponse>(`mode/${id}`, { body: { id, name, winningPoints, teamsNumber, playersPerTeam, description, substitutePlayers } });
        } catch (error) {
            console.log(error);
        }
    }

    async getMode(modeId: String): Promise<Mode> {
        try {
            console.log(`getMode`);
            const res = await this.get<Mode>(`mode/${modeId}/mode`);
            console.log(res);
            return res;
        } catch (error) {
            console.log(error);
        }
    }

    async getModes(sportId: String): Promise<Mode[]> {
        try {
            console.log(`getMode`);
            const res = await this.get<Mode[]>(`mode/${sportId}`);
            console.log(res);
            return res;
        } catch (error) {
            console.log(error);
        }
    }

    async deleteMode(modeId: String, sportId: String): Promise<RequestResponse> {
        try {
            console.log(`deleteMode`);
            return await this.delete<RequestResponse>(`mode/${modeId}/${sportId}`);
        } catch (error) {
            console.log(error);
        }
    }
}