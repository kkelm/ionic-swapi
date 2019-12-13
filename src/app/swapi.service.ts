import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SwapiService {

	constructor(private httpClient: HttpClient) { }

	getPlanets() {
		const observablePlanets = this.httpClient.get("https://swapi.co/api/planets");

		return observablePlanets;
	}

}
