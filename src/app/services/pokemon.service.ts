import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  url = 'https://pokeapi.co/api/v2/pokemon?limit=100'
  constructor(private httpClient: HttpClient) { }


  getPokemons() {
    return this.httpClient.get<any>(`${this.url}`);
  }
}
