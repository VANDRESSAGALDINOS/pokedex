import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.sass'],
})
export class PokemonListComponent implements OnInit {
  pokemons: Array<any> = []
  constructor(public pokemonService: PokemonService) { }
  ngOnInit(): void {
    this.loadData()
  }

  loadData() {
    this.pokemonService.getPokemons().subscribe((result) => {
      if (result) {
        this.pokemons = result['results']

      }
    });
}
}
