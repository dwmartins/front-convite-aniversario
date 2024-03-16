import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConstantsService {

  dateOfEvent = "22 de maio de 2024"
  eventTime = "19h";
  eventAddress = "R. Manoel da Costa 216, Parque Pampulha, Agudos SP";
  addressComplement = "Ao lado da sorveteria Ice Good";
  eventManager = "Giovana";
  managerPhone = "14991882505";

  constructor() { }
}
