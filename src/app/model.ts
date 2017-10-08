import { Hero } from './hero';

var heroes:Hero[] = [
	{id:1, name:"John Rambo", points:100},
	{id:2, name:"Terminator", points:120},
	{id:3, name:"Robocop", points:80},
	{id:4, name:"Spiderman", points:60},
	{id:5, name:"Ninja Turtle", points:110},
	{id:6, name:"Son Goku", points:310},
	{id:7, name:"Piccollo", points:220},
	{id:8, name:"Vegeta", points:290},
	{id:9, name:"Yamsha", points:10},
];

const model = {
	heroes:heroes,
};

export class Model {
	private model=model;

	constructor() {
	}

	getHeroes(): Hero[] {
		return this.model.heroes;
	}

	setHeroes(h) {
		this.model.heroes = h;
	}
}
