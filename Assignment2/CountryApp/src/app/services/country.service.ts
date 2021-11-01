import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { COUNTRIES } from '../mocks/COUNTRIES';
import { Country } from '../models/country';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  constructor() {}

  getCountries(): Observable<Country[]> {
    return of(COUNTRIES);
  }

  //tanda seru => undifined
  getCountryById(id: number): Observable<Country> {
    const country = COUNTRIES.find((option) => option.id == id)!;
    return of(country);
  }

  getMostPopulatedCountries(n: number): Observable<Country[]> {
    return of(
      COUNTRIES.sort(
        (country1, country2) => country2.population - country1.population
      ).slice(0, n)
    );
  }

  getLargestCountries(n: number): Observable<Country[]> {
    return of(
      COUNTRIES.sort(
        (country1, country2) => country2.area - country1.area
      ).slice(0, n)
    );
  }
}
