import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Country } from 'src/app/models/country';
import { CountryService } from 'src/app/services/country.service';

@Component({
  selector: 'app-detail-country',
  templateUrl: './detail-country.component.html',
  styleUrls: ['./detail-country.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class DetailCountryComponent implements OnInit {
  id: number;
  country: Country = {} as Country;

  constructor(
    private countryService: CountryService,
    private activeRoute: ActivatedRoute
  ) {
    this.id = Number(this.activeRoute.snapshot.params.id);
  }

  ngOnInit(): void {
    this.getCountryDetail(this.id);
  }

  getCountryDetail(id: number) {
    this.countryService
      .getCountryById(id)
      .subscribe((data) => (this.country = data));
  }
}
