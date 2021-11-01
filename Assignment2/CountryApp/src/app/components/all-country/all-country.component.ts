import { Component, OnInit } from '@angular/core';
import { Country } from 'src/app/models/country';
import { CountryService } from 'src/app/services/country.service';

@Component({
  selector: 'app-all-country',
  templateUrl: './all-country.component.html',
  styleUrls: ['./all-country.component.css'],
})
export class AllCountryComponent implements OnInit {
  countries: Country[] = [];

  constructor(private countryService: CountryService) {}

  ngOnInit(): void {
    this.getCountries();
  }

  getCountries() {
    this.countryService
      .getCountries()
      .subscribe((data) => (this.countries = data));
  }
}
