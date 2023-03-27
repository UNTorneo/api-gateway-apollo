import { RESTDataSource } from '@apollo/datasource-rest';
import { RequestResponse, ErrorResponse, SucessResponse } from '../../core/interfaces/base-interfaces';
import { Sport } from './sport/sport.interfaces';
import { Mode } from './mode/mode.interfaces'
export class sportsApi extends RESTDataSource{
    override baseURL = 'http://127.0.0.1:3000/';

    async getSport(id:String): Promise<Sport>{
        try{
            console.log(`getSport`);
            const res = await this.get<Sport>(`sport/${id}`); 
            console.log(res);
            return res;
        }catch(error){
            console.log(error);
        }   
    }

    async getSports(): Promise<Sport[]>{
        try{
            console.log(`getSports`);
            const res = await this.get<Sport[]>(`sport/all`); 
            console.log(res);
            return res;
        }catch(error){
            console.log(error);
        }
        
    }

    async addSport(name: String,description: String,imgs: String[],logo: String,recommendation: String[]): Promise<RequestResponse>{
        try{
            console.log(`addSport`);
            return await this.post<RequestResponse>(`sport`,{body:{name,description,imgs,logo,recommendation}});
        }catch(error){
            console.log(error);
        }
    }

    async deleteSport(id: String): Promise<RequestResponse>{
        try{
            console.log(`deleteSport`);
            return await this.delete<RequestResponse>(`sport/${id}`);
        }catch(error){
            console.log(error);
        }
    }

    async addMode(sportId: String,winningPoints: number,teamsNumber:number,playersPerTeam: number,description: String,substitutePlayers:number): Promise<RequestResponse>{
        try{
            console.log(`addMode`);
            return await this.post<RequestResponse>(`mode`,{body:{sportId,winningPoints,teamsNumber,playersPerTeam,description,substitutePlayers}});
        }catch(error){
            console.log(error);
        }
    }

    async getModes(sportId:String): Promise<Mode[]>{
        try{
            console.log(`getMode`);
            const res = await this.get<Mode[]>(`mode/${sportId}`); 
            console.log(res);
            return res;
        }catch(error){
            console.log(error);
        }   
    }

    async deleteMode(modeId: String, sportId: String): Promise<RequestResponse>{
        try{
            console.log(`deleteMode`);
            return await this.delete<RequestResponse>(`mode/${modeId}/${sportId}`);
        }catch(error){
            console.log(error);
        }
    }
}