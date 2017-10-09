import { Component, OnInit } from '@angular/core';
import { Model } from '../model';

@Component({
  selector: 'hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {

	heroes;
	selectedHero;

  	constructor(private model: Model) {
  		this.heroes=this.model.getHeroes();
  	}

  	ngOnInit() {
  	}

  	selectHero(hero):void {
  		this.selectedHero=hero;
  	}


}
