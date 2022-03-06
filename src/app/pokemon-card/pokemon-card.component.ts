import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.sass'],
})


export class PokemonCardComponent implements OnInit {
  @Input()
  pokemon: any = {};
  private readonly pokemonUrl: string = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
  private readonly imageType: string = '.png';

  ngOnInit(): void {
    this.pokemon.imageId = this.pegarIdPokemon(this.pokemon['url'])
  }

  pegarIdPokemon(url: string) {
    const urlSplit = url.split('/');
    return urlSplit[urlSplit.length - 2]

  }

  getUrlImage(id: string){
    return this.pokemonUrl + id + this.imageType;

  }


}
