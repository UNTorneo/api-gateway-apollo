import { RESTDataSource } from '@apollo/datasource-rest';
import { RequestResponse } from '../../core/interfaces/base-interfaces';
import { TokenResponse } from './token/token.interfaces';
import { User } from './user/users.interfaces';
import { City } from './city/cities.interfaces';
import { Country } from './country/countries.interfaces';

export class UsersApi extends RESTDataSource {
    override baseURL = process.env.URL_MS_USERS+'/';
    protected override throwIfResponseIsError(options): Promise<void> {
        console.log('UsersApi throwIfResponseIsError: ', options);
        return;
    }

    //Login
    //Mutations

    async login(email: String, password: String): Promise<TokenResponse> {
        try {
            console.log(`login`);
            return this.post<TokenResponse>(`login`, { body: { email, password } });
        } catch (error) {
            console.log(error);
        }
    }

    //Users
    //Querys

    async getUser(id: Number): Promise<User> {
        try {
            console.log(`getUser`);
            const res = await this.get<User>(`users/${id}`);
            console.log(res);
            return res;
        } catch (error) {
            console.log(error);
        }
    }

    async getUsers(): Promise<User[]> {
        try {
            console.log(`getUsers`);
            const res = await this.get<User[]>(`users`);
            console.log(res);
            return res;
        } catch (error) {
            console.log(error);
        }

    }

    //Mutations

    async addUser(name: String, lastName: String, username: String, birthday: Date, email: String, password: String, countryId: Number, cityId: Number, latitude: Number, longitude: Number, photoUrl: String): Promise<RequestResponse> {
        try {
            console.log(`addUser`);
            return await this.post<RequestResponse>(`users`, { body: { name, lastName, username, birthday, email, password, countryId, cityId, latitude, longitude, photoUrl } });
        } catch (error) {
            console.log(error);
        }
    }

    async updateUser(id: Number, name: String, lastName: String, username: String, birthday: Date, email: String, password: String, countryId: Number, cityId: Number, latitude: Number, longitude: Number, photoUrl: String): Promise<RequestResponse> {
        try {
            console.log(`updateUser`);
            return await this.put<RequestResponse>(`users/${id}`, { body: { name, lastName, username, birthday, email, password, countryId, cityId, latitude, longitude, photoUrl } });
        } catch (error) {
            console.log(error);
        }
    }

    async deleteUser(id: Number): Promise<RequestResponse> {
        try {
            console.log(`deleteUser`);
            return await this.delete<RequestResponse>(`users/${id}`);
        } catch (error) {
            console.log(error);
        }
    }

    //Cities
    //Querys

    async getCity(id: Number): Promise<City> {
        try {
            console.log(`getCity`);
            const res = await this.get<City>(`cities/${id}`);
            console.log(res);
            return res;
        } catch (error) {
            console.log(error);
        }
    }

    async getCities(): Promise<City[]> {
        try {
            console.log(`getCities`);
            const res = await this.get<City[]>(`cities`);
            console.log(res);
            return res;
        } catch (error) {
            console.log(error);
        }

    }

    //Mutations

    async addCity(name: String): Promise<RequestResponse> {
        try {
            console.log(`addCity`);
            return await this.post<RequestResponse>(`cities`, { body: { name } });
        } catch (error) {
            console.log(error);
        }
    }

    async updateCity(id: Number, name: String): Promise<RequestResponse> {
        try {
            console.log(`updateCity`);
            const res = await this.put<RequestResponse>(`cities/${id}`, { body: { name } });
            console.log(res);
            return res;
        } catch (error) {
            console.log(error);
        }
    }

    async deleteCity(id: Number): Promise<RequestResponse> {
        try {
            console.log(`deleteCity`);
            return await this.delete<RequestResponse>(`cities/${id}`);
        } catch (error) {
            console.log(error);
        }
    }

    //Countries
    //Querys

    async getCountry(id: Number): Promise<Country> {
        try {
            console.log(`getCountry`);
            const res = await this.get<Country>(`countries/${id}`);
            console.log(res);
            return res;
        } catch (error) {
            console.log(error);
        }
    }

    async getCountries(): Promise<Country[]> {
        try {
            console.log(`getCountries`);
            const res = await this.get<Country[]>(`countries`);
            console.log(res);
            return res;
        } catch (error) {
            console.log(error);
        }

    }

    //Mutations

    async addCountry(name: String): Promise<RequestResponse> {
        try {
            console.log(`addCountry`, name);

            return await this.post<RequestResponse>(`countries`, { body: { name } });
        } catch (error) {
            console.log(error);
        }
    }

    async updateCountry(id: Number, name: String): Promise<RequestResponse> {
        try {
            console.log(`updateCountry`);
            return await this.put<RequestResponse>(`countries/${id}`, { body: { name } });
        } catch (error) {
            console.log(error);
        }
    }

    async deleteCountry(id: Number): Promise<RequestResponse> {
        try {
            console.log(`deleteCountry`);
            return await this.delete<RequestResponse>(`countries/${id}`);
        } catch (error) {
            console.log(error);
        }
    }

}