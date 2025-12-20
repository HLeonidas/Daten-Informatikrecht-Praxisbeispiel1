import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Game, GAMES, Genre } from '../../data/games';

type SortMode = 'relevance' | 'rating_desc' | 'title_asc' | 'new_first';

@Component({
	selector: 'app-catalog',
	standalone: true,
	imports: [RouterLink],
	templateUrl: './catalog.html',
	styleUrl: './catalog.scss'
})
export class Catalog {
	// Mock data
	games: Game[] = GAMES;

	// Filter state (simple, no FormsModule needed)
	query = '';
	selectedGenre: Genre | 'All' = 'All';
	onlyCloud = false;
	sort: SortMode = 'relevance';

	// Pagination mock
	pageSize = 6;
	page = 1;

	genres: (Genre | 'All')[] = ['All', 'Action', 'RPG', 'Indie', 'Co-op', 'Racing', 'Strategy'];

	setQuery(value: string) {
		this.query = value;
		this.page = 1;
	}

	setGenre(value: string) {
		this.selectedGenre = value as any;
		this.page = 1;
	}

	toggleCloud(value: boolean) {
		this.onlyCloud = value;
		this.page = 1;
	}

	setSort(value: string) {
		this.sort = value as SortMode;
		this.page = 1;
	}

	clearFilters() {
		this.query = '';
		this.selectedGenre = 'All';
		this.onlyCloud = false;
		this.sort = 'relevance';
		this.page = 1;
	}

	private filtered(): Game[] {
		const q = this.query.trim().toLowerCase();

		let list = this.games.filter(g => {
			const matchesQuery =
				!q || g.title.toLowerCase().includes(q) || g.description.toLowerCase().includes(q);

			const matchesGenre =
				this.selectedGenre === 'All' || g.genres.includes(this.selectedGenre);


			const matchesCloud =
				!this.onlyCloud || g.cloud;

			return matchesQuery && matchesGenre && matchesCloud;
		});

		// Sorting
		list = [...list];
		switch (this.sort) {
			case 'rating_desc':
				list.sort((a, b) => b.rating - a.rating);
				break;
			case 'title_asc':
				list.sort((a, b) => a.title.localeCompare(b.title));
				break;
			case 'new_first':
				list.sort((a, b) => Number(b.isNew) - Number(a.isNew));
				break;
			case 'relevance':
			default:
				// simple: new first, then rating
				list.sort((a, b) => (Number(b.isNew) - Number(a.isNew)) || (b.rating - a.rating));
		}

		return list;
	}

	get totalResults(): number {
		return this.filtered().length;
	}

	get totalPages(): number {
		return Math.max(1, Math.ceil(this.totalResults / this.pageSize));
	}

	get pagedResults(): Game[] {
		const list = this.filtered();
		const start = (this.page - 1) * this.pageSize;
		return list.slice(start, start + this.pageSize);
	}

	nextPage() {
		this.page = Math.min(this.totalPages, this.page + 1);
	}

	prevPage() {
		this.page = Math.max(1, this.page - 1);
	}

	goToPage(p: number) {
		this.page = Math.min(this.totalPages, Math.max(1, p));
	}

	// Small helper for “stars”
	stars(rating: number): number[] {
		const full = Math.round(rating);
		return Array.from({ length: 5 }, (_, i) => (i < full ? 1 : 0));
	}
}
