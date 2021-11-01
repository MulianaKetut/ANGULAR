import { Component, OnInit } from '@angular/core';
import { Country } from 'src/app/models/country';
import { CountryService } from 'src/app/services/country.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  countriesByMostPopulation: Country[] = [];
  countriesByLargestArea: Country[] = [];

  constructor(public countryService: CountryService) {}

  ngOnInit(): void {
    this.getCountriesByMostPopulation(3);
    this.getCountriesByLargestArea(3);
  }

  getCountriesByMostPopulation(n: number): void {
    this.countryService
      .getMostPopulatedCountries(n)
      .subscribe((countries) => (this.countriesByMostPopulation = countries));
  }
  getCountriesByLargestArea(n: number): void {
    this.countryService
      .getLargestCountries(n)
      .subscribe((countries) => (this.countriesByLargestArea = countries));
  }
}
