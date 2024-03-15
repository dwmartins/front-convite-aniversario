import { Injectable, inject } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Guests } from '../models/guests';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class GuestsService {
    httpClient = inject(HttpClient);

    private API_URL = environment.API_URL;

    constructor() { }

    newGuests(guests: Guests) {
        return this.httpClient.post<Guests>(`${this.API_URL}/guests`, guests);
    }

    updateGuests(guests: Guests) {
        return this.httpClient.put<Guests>(`${this.API_URL}/guests`, guests); 
    }

    deleteGuest(id: number) {
        return this.httpClient.delete<Guests>(`${this.API_URL}/guests?id=${id}`); 
    }

    findAll(guests: Guests) {
        return this.httpClient.get<Guests[]>(`${this.API_URL}/guests`); 
    }
}
