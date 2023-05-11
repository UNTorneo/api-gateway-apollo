import { RESTDataSource, RequestOptions } from '@apollo/datasource-rest';
import { RequestResponse } from '../../core/interfaces/base-interfaces';
import { Owner, OwnerPopulated } from './owner/owner.interfaces';
import { AddCourt, Court, UpdateCourt } from './courts/courts.interfaces';
import { AddPhoto, Photo, UpdatePhoto } from './photos/photos.interfaces';
import { AddSchedule, Schedule, UpdateSchedule } from './schedule/schedule.interfaces';
import { AddVenue, UpdateVenue, Venue } from './venue/venue.interfaces';
import { FetcherResponse } from '@apollo/utils.fetcher';

export class TournamentVenueApi extends RESTDataSource {
    override baseURL = process.env.URL_MS_TOURNAMENT_VENUE+'/';
    protected override throwIfResponseIsError(options): Promise<void> {
        console.log('TournamentVenueApi throwIfResponseIsError: ', options);
        return;
    }
    //protected override didEncounterError(_error: Error, _request: RequestOptions): void {
    //    console.log('TournamentVenueApi error: ', _error);
    //    console.log('TournamentVenueApi request: ', _request);
    //}
    //Owners
    //Querys
    async getOwners(): Promise<Owner[]> {
        console.log(`getOwners`);
        return this.get<Owner[]>(`owner`);
    }

    async getOwner(id: number): Promise<OwnerPopulated> {
        console.log(`getOwner: ${id}`);
        return this.get<OwnerPopulated>(`owner?id=${id}`);
    }

    async getOwnerByVenueId(venueId: number): Promise<OwnerPopulated> {
        console.log(`getOwnerByVenueId: ${venueId}`);
        return this.get<OwnerPopulated>(`owner?venueId=${venueId}`);
    }

    //Mutations
    async addOwner(venueId: number, userId: string): Promise<RequestResponse> {
        console.log(`addOwner: ${venueId}, ${userId}`);
        const res = await this.post<RequestResponse>(`owner`, { body: { venueId, userId } });
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

    //Venue
    // Querys
    async getVenues(): Promise<Venue[]> {
        return this.get<Venue[]>(`venue`);
    }
    async getVenue(id: Number): Promise<Venue[]> {
        return this.get<Venue[]>(`venue?id=${id}`);
    }
    async getVenuesByUserId(venueId: Number): Promise<Venue[]> {
        return this.get<Venue[]>(`venue?venueId=${venueId}`);
    }

    // Mutations
    async addVenue(venue: AddVenue): Promise<RequestResponse> {
        return this.post<RequestResponse>(`venue`, { body: venue });
    }

    async deleteVenue(id: Number): Promise<RequestResponse> {
        return this.delete<RequestResponse>(`venue?id=${id}`);
    }

    async updateVenue(id: Number, venue: UpdateVenue): Promise<RequestResponse> {
        return this.put<RequestResponse>(`venue?id=${id}`, { body: venue });
    }
}