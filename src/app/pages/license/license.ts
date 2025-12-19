import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
	selector: 'app-license',
	standalone: true,
	imports: [RouterLink],
	templateUrl: './license.html',
	styleUrl: './license.scss'
})
export class License {
	readonly lastUpdated = new Date('2025-12-19').toLocaleDateString().slice(0, 10); // YYYY-MM-DD
}
