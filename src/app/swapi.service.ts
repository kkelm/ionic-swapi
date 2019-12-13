import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { race, merge, empty } from 'rxjs';
import { expand } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SwapiService {

	constructor(private httpClient: HttpClient) { }

	getPlanets() {
		/*
		const observablePlanetsOne = this.httpClient.get("https://swapi.co/api/planets");
		const observablePlanetsTwo = this.httpClient.get("https://swapi.co/api/planets?page=2");
		const observablePlanetsThree = this.httpClient.get("https://swapi.co/api/planets?page=3");
		const observablePlanetsFour = this.httpClient.get("https://swapi.co/api/planets?page=4");
		const observablePlanetsFive = this.httpClient.get("https://swapi.co/api/planets?page=5");
		const observablePlanetsSix = this.httpClient.get("https://swapi.co/api/planets?page=6");
		const observablePlanetsSeven = this.httpClient.get("https://swapi.co/api/planets?page=7");

		return merge(
			observablePlanetsOne
			, observablePlanetsTwo
			, observablePlanetsThree
			, observablePlanetsFour
			, observablePlanetsFive
			, observablePlanetsSix
			, observablePlanetsSeven
		);
		*/

		return this.httpClient.get("https://swapi.co/api/people")
		.pipe(
			expand(
				data => (<any> data).next ? this.httpClient.get((<any> data).next) : empty()
			)
		);
	}

}
