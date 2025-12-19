import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Game, GAMES } from '../../data/games';

@Component({
	selector: 'app-game-details',
	standalone: true,
	imports: [RouterLink],
	templateUrl: './game-details.html',
	styleUrl: './game-details.scss'
})
export class GameDetails {
	id = '';
	game: Game | null = null;

	constructor(route: ActivatedRoute) {
		const idParam = route.snapshot.paramMap.get('id');
		this.game = GAMES.find(g => g.id === (idParam ?? '')) ?? null;
	}

	stars(rating: number): number[] {
		const full = Math.round(rating);
		return Array.from({ length: 5 }, (_, i) => (i < full ? 1 : 0));
	}
}
