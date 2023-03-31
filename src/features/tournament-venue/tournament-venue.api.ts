import { RESTDataSource } from '@apollo/datasource-rest';
import { RequestResponse, ErrorResponse, SucessResponse } from '../../core/interfaces/base-interfaces';
import { Owner } from './owner/owner.interfaces';
import { AddCourt, Court, UpdateCourt } from './courts/courts.interfaces';
import { AddPhoto, Photo, UpdatePhoto } from './photos/photos.interfaces';
import { AddSchedule, Schedule, UpdateSchedule } from './schedule/schedule.interfaces';

export class TournamentVenueApi extends RESTDataSource {
    override baseURL = 'http://localhost:8080/';

    //Owners
    //Querys
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

    //Mutations
    async addOwner(venueId: number, userId: string): Promise<RequestResponse> {
        console.log(`addOwner: ${venueId}, ${userId}`);
        const res = await this.post<RequestResponse>(`owner`, { body: { venueId, userId } });
        console.log(`addOwner: ${JSON.stringify(res)}`);
        return res;
    }

    async deleteOwner(id: number): Promise<RequestResponse> {
        return this.delete<RequestResponse>(`owner?id=${id}`);
    }

    //Courts
    // Querys
    async getCourts(): Promise<Court[]> {
        return this.get<Court[]>(`court`);
    }
    async getCourt(id: Number): Promise<Court[]> {
        return this.get<Court[]>(`court?id=${id}`);
    }
    async getCourtsByVenueId(venueId: Number): Promise<Court[]> {
        return this.get<Court[]>(`court?venueId=${venueId}`);
    }
    async getCourtsBySportId(sportId: String): Promise<Court[]> {
        return this.get<Court[]>(`court?sportId=${sportId}`);
    }

    // Mutations
    async addCourt(court: AddCourt): Promise<RequestResponse> {
        return this.post<RequestResponse>(`court`, { body: court });
    }

    async deleteCourt(id: Number): Promise<RequestResponse> {
        return this.delete<RequestResponse>(`court?id=${id}`);
    }

    async updateCourt(id: Number, court: UpdateCourt): Promise<RequestResponse> {
        return this.put<RequestResponse>(`court?id=${id}`, { body: court });
    }

    //Photos
    // Querys
    async getPhotos(): Promise<Photo[]> {
        return this.get<Photo[]>(`photo`);
    }
    async getPhoto(id: Number): Promise<Photo[]> {
        return this.get<Photo[]>(`photo?id=${id}`);
    }
    async getPhotosByCourtId(venueId: Number): Promise<Photo[]> {
        return this.get<Photo[]>(`photo?venueId=${venueId}`);
    }

    // Mutations
    async addPhoto(photo: AddPhoto): Promise<RequestResponse> {
        return this.post<RequestResponse>(`photo`, { body: photo });
    }

    async deletePhoto(id: Number): Promise<RequestResponse> {
        return this.delete<RequestResponse>(`photo?id=${id}`);
    }

    async updatePhoto(id: Number, photo: UpdatePhoto): Promise<RequestResponse> {
        return this.put<RequestResponse>(`photo?id=${id}`, { body: photo });
    }

    //Schedule
    // Querys
    async getSchedules(): Promise<Schedule[]> {
        return this.get<Schedule[]>(`schedule`);
    }
    async getSchedule(id: Number): Promise<Schedule[]> {
        return this.get<Schedule[]>(`schedule?id=${id}`);
    }
    async getSchedulesByCourtId(venueId: Number): Promise<Schedule[]> {
        return this.get<Schedule[]>(`schedule?venueId=${venueId}`);
    }

    // Mutations
    async addSchedule(schedule: AddSchedule): Promise<RequestResponse> {
        return this.post<RequestResponse>(`schedule`, { body: schedule });
    }

    async deleteSchedule(id: Number): Promise<RequestResponse> {
        return this.delete<RequestResponse>(`schedule?id=${id}`);
    }

    async updateSchedule(id: Number, schedule: UpdateSchedule): Promise<RequestResponse> {
        return this.put<RequestResponse>(`schedule?id=${id}`, { body: schedule });
    }
}