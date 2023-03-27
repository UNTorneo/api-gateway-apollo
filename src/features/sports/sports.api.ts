import { RESTDataSource } from '@apollo/datasource-rest';
import { RequestResponse, ErrorResponse, SucessResponse } from '../../core/interfaces/base-interfaces';
import { Sport } from './sport/sport.interfaces';

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
}